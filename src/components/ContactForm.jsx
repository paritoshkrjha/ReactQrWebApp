import { serverTimestamp } from "firebase/database";
import Button from "./Button";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import OtpModal from "./OtpModal";


function ContactForm({ message, userId, recaptchaCallback, phoneNumberVerfier, loading, isEmergency }) {
    const { register: register1, formState: formState1, handleSubmit: handleSubmit1 } = useForm()
    const navigate = useNavigate()
    const [permissionLabel, setPermissionLabel] = useState('Allow')
    const [allowed, setAllowed] = useState(false);
    const [locationError, setLocationError] = useState('')
    const [coordinates, setCoordinates] = useState({
        'lat': '',
        'lng': ''
    })
    const [modalActive, setModalActive] = useState(false)

    const requestOTP = async (values) => {
        const contactValue = '+91' + values.contact;
        if (isEmergency) {
            message.current = { ...message.current, contactValue, key: userId, coordinates: coordinates, desc: values.desc }
        }
        else {
            message.current = { ...message.current, contactValue, key: userId, viewed: 'false', time: serverTimestamp(), coordinates: coordinates }
        }
        console.log(message)
        try {
            await recaptchaCallback(contactValue);
            toast.success("OTP sent successfully")
            setModalActive(true)
        } catch (err) {
            console.log('The error is', err);
        }
    };

    function locationPermissionHandler() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    console.log(`Latitude: ${lat}, longitude: ${lng}`);
                    setCoordinates({
                        'lat': position.coords.latitude,
                        'lng': position.coords.longitude
                    })
                    setAllowed(true)
                    setPermissionLabel("✓")
                },
                (error) => {
                    console.error("Error getting user location:", error);
                    setPermissionLabel('!')
                    setLocationError("Geolocation is not supported by this browser.")
                }
            );
        } else {
            setPermissionLabel('!')
            console.error("Geolocation is not supported by this browser.");
            setLocationError("Geolocation is not supported by this browser.")
        }
    }

    return (
        <>
        {console.log(userId)}
        <form onSubmit={handleSubmit1(requestOTP)}>
            <div className="form-control mb-4">
                <label className="label cursor-pointer">
                    <span className="label font-semibold text-black max-w-[200px]">Give location access</span>
                    <button onClick={(e) => {
                        e.preventDefault()
                        locationPermissionHandler()
                    }} className="border-2 border-primary px-2 bg-primary text-base rounded text-white disabled:cursor-none" disabled={allowed} >{permissionLabel}</button>
                </label>
                <span className="label-text-alt text-black max-w-[300px] px-2"><span className="text-red-700">*</span>We only need location to verify the vehicle's location.</span>
            </div>

            {
                isEmergency && <Input {...register1('desc', {
                    required: "The Descripton can not be empty!", validate: (text) => { }
                })} minLength={5} label="Enter Message" type="textarea" error={formState1.errors?.desc?.message} placeholder="" control='textarea' />
            }

            <Input {...register1('contact', {
                required: "Phone number can not be empty", validate: (number) => {
                    const regex = /^(?!0{10}$)[1-9][0-9]{9}$/;
                    return regex.test(number) || 'Given number is invalid';
                }
            })} maxLength={10} label="Contact Number" type="tel" error={formState1.errors?.contact?.message} placeholder="Enter you contact number" />
            <div className="flex justify-center pb-2">
                <div id='recaptcha-container' className="mb-2" />
            </div>
            <Button type='submit' label="Get OTP" loading={loading} variant='btn-wide' disable={loading} />
            {loading == true && <label className=" label-text-alt text-black text-center font-medium"> *The form will auto submit as soon recaptcha is verified</label>}
        </form>
        <OtpModal active={modalActive} onClose = {()=>{
            setModalActive(false)
        }} loading={loading} phoneNumberVerfier={phoneNumberVerfier} userId={userId} message={message}  />
        </>

    )
}
export default ContactForm
import { useEffect, useId } from "react"
import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


function OtpModal({ phoneNumberVerfier, userId, loading, active, onClose , message }) {
    const id = useId()
    useEffect(() => {
        if (active) {
            document.getElementById(id).showModal()
        }
        else {
            document.getElementById(id).close()
        }
    }, [active])
    const navigate = useNavigate()
    const { register: register2, formState: formState2, handleSubmit: handleSubmit2 } = useForm()
    const submitHandler = async (values) => {
        const otpValue = values.otp;
        try {
            await phoneNumberVerfier(otpValue, userId, message.current)
            toast.success("OTP successfully verified")
            onClose()
            navigate('/contact/success')
        } catch (error) {
            toast.error("We encountered some error. Try again later")
            console.log(error);
        }
    }
    const editPhoneHandler = () => {
        onClose()
    }

    return (
        <div>
            <dialog id={id} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <form onSubmit={handleSubmit2(submitHandler)}>
                        <Input {...register2('otp', {
                            required: "Please enter the otp", validate: (otp) => {
                                const regex = /^\d{6}$/;
                                return regex.test(otp) || 'The OTP must conatain 6 digits';
                            }
                        })} maxLength={6} label="Enter OTP" error={formState2.errors?.otp?.message} placeholder="Enter 6-digit otp" />
                        <div className="flex flex-col gap-5">
                            <Button type='submit' label="Verify" loading={loading} variant="btn-wide" disabled={false} />
                            <Button label="Edit Phone Number" onClick={editPhoneHandler} variant="btn-wide btn-outline text-black" />
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default OtpModal
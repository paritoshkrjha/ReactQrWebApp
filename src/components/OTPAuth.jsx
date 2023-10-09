import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import Button from "./Button";
import Input from "./Input";


const OTPAuth = ({ loading, phoneNumberVerfier, setScreen }) => {
    const { register: register2, formState: formState2, handleSubmit: handleSubmit2 } = useForm()


    const submitHandler = async (values) => {
        const otpValue = values.otp;
        try {
            await phoneNumberVerfier(otpValue)
            toast.success("OTP successfully verified")
            setScreen('successful')
        } catch (error) {
            toast.error("We encountered some error. Try again later")
            console.log(error);
        }
    };

    const editPhoneHandler = () => {
        setScreen('contact');
    }


    return (
        <>

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

        </>
    );
}

export default OTPAuth;
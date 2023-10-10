import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useState } from 'react'
import { sendMessage } from "../controller/sender";
import { auth } from "../firebase";

function usePhoneAuth() {
  const [loading, setLoading] = useState(false)
  const [confirmationResult, setConfirmationResult] = useState(null)

  async function recaptchaCallback(number) {
    const recaptcha = new RecaptchaVerifier(auth, 'recaptcha-container', {
      callback: () => {
        setLoading(true)
      },
    })
    recaptcha.render()
    try {
      const result = await signInWithPhoneNumber(auth, number, recaptcha)
      setConfirmationResult(result)
      return result
    } catch (err) {
      throw new Error(err)
    } finally {
      setLoading(false)
    }
  }

  async function phoneNumberVerfier(otpValue, id, message) {
    setLoading(true)
    try {
      console.log('confirmationResult ', confirmationResult)
      console.log('otp', otpValue)
      await confirmationResult.confirm(otpValue)
      await sendMessage(message, id)
    } catch (err) {
      console.log(err)
      throw new Error(err)
    } finally {
      setLoading(false)
    }
  }
  return { phoneNumberVerfier, recaptchaCallback, loading }
}

export default usePhoneAuth

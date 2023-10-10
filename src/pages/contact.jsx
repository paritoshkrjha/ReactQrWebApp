import React from 'react'
import ContactForm from '../components/ContactForm'

function Contact({ message, recaptchaCallback, loading, phoneNumberVerfier, isEmergency , userId}) {
  return (
    <ContactForm message={message} recaptchaCallback={recaptchaCallback} loading={loading} isEmergency={isEmergency} phoneNumberVerfier={phoneNumberVerfier} userId={userId} />
  )
}

export default Contact
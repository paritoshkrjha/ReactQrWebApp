import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import { useRef } from 'react'
import EmergencyPage from '../pages/emergency'
import OTPAuth from '../pages/OTPAuth'
import Success from '../pages/Success'
import Home from '../pages/home'
import Contact from '../pages/contact'
import usePhoneAuth from '../hooks/usePhoneAuth'
import OtpModal from '../components/OtpModal'



function HomeContainer() {
    const message = useRef({})
    const { recaptchaCallback, phoneNumberVerfier, loading } = usePhoneAuth()
    const {id} = useParams()
    if(!id){
        return null
    }
    return (
        <Routes>
            <Route path='/' element={<Home message={message} userId = {id} />} />
            <Route path='/contact' element={<Contact message={message} recaptchaCallback={recaptchaCallback} phoneNumberVerfier={phoneNumberVerfier} loading={loading} isEmergency={false} userId = {id} />} />
            <Route path='/emergency' element={<EmergencyPage recaptchaCallback={recaptchaCallback}  loading={loading} userId = {id}/>} />
            {/* <Route path='/otp' element={<OtpModal loading={loading} phoneNumberVerfier={phoneNumberVerfier} userId={id} message={message} />} /> */}
            <Route path='/success' element={<Success />} />
        </Routes>
    )
}

export default HomeContainer
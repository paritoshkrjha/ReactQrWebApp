import React, { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ContactForm from '../components/ContactForm';


function EmergencyPage({ recaptchaCallback, phoneNumberVerfier, loading, userId }) {
    const MySwal = withReactContent(Swal)
    const navigate = useNavigate()
    const emergencyMessage = useRef({})
    let {id} = useParams();

    useEffect(() => {
        showConfirmation()
    }, [])

    function showConfirmation() {
        MySwal.fire({
            title: 'Emergency !',
            text: 'Only use this feature in case of EMERGENCY. ',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Proceed',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true,
            allowOutsideClick: false,
            allowEscapeKey: false,

        }).then((result) => {
            if (result.dismiss == Swal.DismissReason.cancel) {
                Swal.close();
                navigate(`/${id}`)
            }
        })
    }

    return (
        <>
            <ContactForm isEmergency={true} phoneNumberVerfier={phoneNumberVerfier} message={emergencyMessage} userId={userId} recaptchaCallback={recaptchaCallback} loading={loading} />
        </>
    );
}

export default EmergencyPage;
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ContactForm from '../components/ContactForm';


function EmergencyPage() {
    const MySwal = withReactContent(Swal)
    const navigate = useNavigate()
    const { id } = useParams()

    // useEffect(() => {
    //     showConfirmation()
    // }, [])

    function showConfirmation() {
        console.log(id)
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
            <ContactForm/>
        </>
    );
}

export default EmergencyPage;
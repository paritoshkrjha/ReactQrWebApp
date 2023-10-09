import doneImg from '../assets/correct.png'

function Success() {
    return (
        <div className="flex justify-center items-center flex-col gap-5">
            <img height={50} width={50} src={doneImg} />
            <div className="text-center">
                <p>You have been verified!</p>
                <p>The message has been sent to the owner.</p>
                <p>You might receive acknowledgement via sms or callback.</p>
            </div>
        </div>
    )
}

export default Success
import error from '../assets/error.svg'

function ErrorPage() {
    return (
        <div className="flex justify-center items-center flex-col gap-5">
            <img height={50} width={50} src={error} />
            <div className="text-center">
                <p>The URL seems to be corrupt.</p>
                <p>Please check the url and try again later</p>
            </div>
        </div>
    )
}

export default ErrorPage

function Checkbox({ label , ...props }) {
    return (
        <div className="form-control mb-4">
            <label className="label cursor-pointer">
                <span className="label-text font-medium text-black max-w-[200px]">{label}</span>
                <input {...props} type="checkbox" className="checkbox bg-gray-200" />
            </label>
        </div>
    )
}

export default Checkbox
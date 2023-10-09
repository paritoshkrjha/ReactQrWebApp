function Radio({ label, ...props }) {
  return (
    <div className="form-control w-full">
      <div className="flex justify-between items-center">
        <label className="label">
          <span className="label-text  text-gray-600 text-sm font-medium">{label}</span>
        </label>
        <input {...props} type="radio" name="radio-1" className="radio bg-gray-200 "/>
      </div>
    </div>
  )
}

export default Radio







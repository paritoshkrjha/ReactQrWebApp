import classNames from "classnames"

function Button({ variant, label, loading, disable, ...props }) {
    return (
        <button {...props} className={classNames(`btn btn-primary w-full disabled:opacity-75 disabled:bg-accent disabled:text-white disabled:cursor-not-allowed`, variant)} disabled={disable}>
            {loading ? <span className="loading loading-spinner"></span> : label}
        </button>
    )
}

export default Button
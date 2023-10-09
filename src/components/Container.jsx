import classNames from 'classnames';
import React from 'react'

function Container({ children, className, ...props }) {
    return (
        <div {...props} className={classNames("w-full min-w-[280px] max-w-xl bg-white border-gray-200 shadow-xl rounded-2xl text-black pt-10 pb-8 px-6 flex flex-col items-center justify-center ", className)}>
            {children}
        </div>
    )
}

export default Container;
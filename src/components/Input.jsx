import classNames from "classnames";
import React, { forwardRef } from 'react';


const Input = forwardRef(
  ({ label, error, name, disable, control = "text", ...props }, ref) => {
    let component = null;
    switch (control) {
      case "text":
        component = (
          <input
            name={name}
            ref={ref}
            {...props}
            className={classNames("input input-bordered w-full bg-gray-50 border-2 border-gray-200 focus:border-gray-500 text-black autofill:bg-transparent", {
                "text-black disabled:bg-gray-50" : disable,
            })}
            disabled={disable}
          />
        );
        break;
      case "textarea":
        component = (
          <textarea
            name={name}
            ref={ref}
            className="textarea textarea-bordered  bg-gray-100 border-2 border-gray-200 focus:border-primary text-black max-h-40 resize-y"
            {...props}
          />
        );
    }
    return (
      <div className="form-control w-full">
        <label htmlFor={name} className="label">
          <span className={"label-text text-black text-base font-semibold"}>
            {label}
          </span>
          {/* <span className="label-text-alt">Top Right label</span> */}
        </label>
        {component}
        <label className="label">
          <span className="label-text-alt text-red-600 font-medium">
            {error}
          </span>
          {/* <span className="label-text-alt">Bottom Right label</span> */}
        </label>
      </div>
    );
  }
);

export default Input;

import classNames from "classnames";
function Stepper({ getActiveIndex }) {

  const activeIndex = getActiveIndex()-1
  return (
    <ul className="steps my-5 text-xs">
<li data-content={activeIndex < 0 ? "?" : "✓"} className={classNames('step', {
        "step-primary": activeIndex < 0,
      })}>
        Basic Details
      </li>
      <li data-content={activeIndex < 1 ? "!" : "✓"} className={classNames('step', {
        "step-primary": activeIndex < 1,
      })}>
        Contact Number
      </li>
      <li data-content={activeIndex < 2 ? "<>" : "✓"} className={classNames('step', {
        "step-success": activeIndex >= 2, "step-primary": activeIndex < 2,
      })}>
        Validation
      </li>
    </ul>
  );
}

export default Stepper;

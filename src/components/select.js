import React, { useRef } from "react"
import { ChevronDownIcon } from "@heroicons/react/solid"

const Option = ({name, value, checked, setChecked, index}) => {
  return (
    <label className="inline-flex items-center w-full">
      <input id={`checkbox-${index}`} type="checkbox" className="form-checkbox" value={value} checked={checked === value} onChange={(event) => setChecked(checked === value ? null : value)} />
      <span className="ml-3 text-xs font-bold mt-1 text-primary">{name}</span>
    </label>
  )
}

const Select = (props) => {
  const button = useRef();
  const container = useRef();
  const {onChange, selected} = props;
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const checkIfClickedOutside = e => {
      if (open && button.current && !button.current.contains(e.target) && container.current && !container.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [open])

  return (
    <div className="relative" ref={button}>
      <button onClick={() => setOpen(!open)}>
        <div className="flex justify-between items-center">
          <span className="text-primary font-bold text-xs">{props.label.split(' ')[0]}&nbsp;<span className="hidden md:inline-block">{props.label.split(' ').pop()}</span></span>
          <ChevronDownIcon className={`ml-3 icon icon-primary transition-transform duration-250 linear transform ${open ? "rotate-180": "rotate-0"}`} style={{height: 20, stroke: "none"}} />
        </div>
      </button>
      {open && (
        <div ref={container} className="z-50 absolute transform left-1/2 -translate-x-1/2 shadow-xl rounded-2xl mt-6 p-6 bg-white dark:bg-fill" style={{minWidth: "190px"}}>
          {props.options.map((o, i) => (
            <Option key={i} index={i} name={o.name} value={o.value} checked={selected} setChecked={onChange} />
          ))}
        </div>
      )}
    </div>
  )
}

Select.defaultProps = {
  options: []
}

export default Select;
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/solid"

const Option = ({name, value, checked, setChecked, index}) => {
  return (
    <label className="inline-flex items-center w-full">
      <input id={`checkbos-${index}`} type="checkbox" className="form-checkbox" value={value} checked={checked === value} onChange={(event) => setChecked(event.target.value)} />
      <span className="ml-2 font-bold">{name}</span>
    </label>
  )
}

const Select = (props) => {
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(null);

  const onCheckedChange = (value) => {
    if (checked === value) {
      setChecked(null);
    } else {
      setChecked(value);
    }
  }

  return (
    <div className="relative" onBlur={() => setOpen(false)}>
      <button onClick={() => setOpen(!open)}>
        <div className="flex justify-between items-center">
          <span className="text-primary font-bold text-xs">Filter by status</span>
          <ChevronDownIcon className={`ml-3 icon icon-primary transition-transform duration-250 linear transform ${open ? "rotate-180": "rotate-0"}`} style={{height: 20, stroke: "none"}} />
        </div>
      </button>
      {open && (
        <div className="absolute transform left-1/2 -translate-x-1/2 shadow-xl rounded-2xl mt-6 p-3" style={{height: 100, background: "white", width: "150%"}}>
          {props.options.map((o, i) => (
            <Option key={i} index={i} name={o.name} value={o.value} checked={checked} setChecked={onCheckedChange} />
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
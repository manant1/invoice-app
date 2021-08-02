import React from "react"

const Button = (props) => {
  let classes = ""

  switch (props.status) {
    case "primary": {
      classes = "rounded-3xl text-white bg-button-primary hover:bg-button-primary-hover"
      break;
    }
    default: {
      classes = "rounded-3xl text-white bg-button-primary hover:bg-button-primary-hover"
    }
  }

  return <button onClick={props.onClick} className={classes + " font-bold text-xs pt-2 pr-4 pb-2 pl-2 h-12" + ` ${props.className || ""}`} style={{height: 46}}>{props.children}</button>
}

export default Button
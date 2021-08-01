import React from "react"

const Sideview = ({ open, onClose, className }) => {
  return <div>
    <div onClick={onClose}
         className={`left-0 top-0 fixed h-full z-30 w-full bg-black ${open ? "backdrop block" : "hidden"}`}></div>
    <div
      className={`${className} left-0 top-0 fixed h-full shadow:xl bg-white z-40 rounded-2xl ${open ? "sideview-slide-in-mobile md:sideview-slide-in" : "sideview-slide-out-mobile md:sideview-slide-out"}`}></div>
  </div>
}

export default Sideview
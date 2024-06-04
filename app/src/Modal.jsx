import React from "react";

const Modal = ({ open, onClose, children }) => {
  return (
    <div onClick={onClose} className={`
      fixed inset-0 flex justify-center items-center transitions-colors ${open ? "visible bg-black-20" : "invisible"}
    `}>
      <div className={`bg-white rounded-xl shadow p-6 transition-all
      ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>{children}</div>
    </div>
  )
}

export default Modal;
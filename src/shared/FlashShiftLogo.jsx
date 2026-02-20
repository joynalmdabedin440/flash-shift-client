import React from 'react'
import logo from "../assets/logo.png"
const FlashShiftLogo = () => {
  return (
    <div className="flex items-end">
      <img src={logo} alt="FlashShift Logo" className="mb-1" />
      <span className="text-xl font-bold -ml-3">FlashShift</span>
    </div>
  )
}

export default FlashShiftLogo

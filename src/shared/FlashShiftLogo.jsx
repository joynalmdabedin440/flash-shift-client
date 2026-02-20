import React from 'react'
import logo from "../assets/logo.png"
const FlashShiftLogo = () => {
  return (
    <div className="flex items-center">
      <img src={logo} alt="FlashShift Logo" className="w-10 h-10 mr-2" />
      <span className="text-xl font-bold">FlashShift</span>
    </div>
  )
}

export default FlashShiftLogo

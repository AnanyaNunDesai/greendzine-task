import React from "react"
import { useNavigate } from "react-router-dom"
import { FaHouse, FaUserLarge } from "react-icons/fa6"


import './BottomNavBar.css'

function BottomNavBar() {
  const navigate = useNavigate()

  return (
    <div className="navbar-container">
      <button onClick={() => navigate("/home", { replace: true })}><FaHouse className="resized-lg" /></button>
      <button onClick={() => navigate("/employee", { replace: true })}><FaUserLarge className="resized-lg" /></button>
    </div>
  )
}

export default BottomNavBar

import React from "react"
import { useNavigate } from "react-router-dom"

import './BottomNavBar.css'

function BottomNavBar() {
  const navigate = useNavigate()

  return (
    <div className="navbar-container">
      <p onClick={() => navigate("/home", { replace: true })}>HOME</p>
      <p onClick={() => navigate("/employee", { replace: true })}>EMPL</p>
    </div>
  )
}

export default BottomNavBar

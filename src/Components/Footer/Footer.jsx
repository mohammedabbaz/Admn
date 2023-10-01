import React from 'react'
import logo from "../../Assets/Images/logo.png";
import "./footer.scss"

export default function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} alt="" />
        <span>Elmadani Admin</span>
      </div>
      <p>&copy; 2023 Mohammed abbaz</p>
    </div>
  )
}

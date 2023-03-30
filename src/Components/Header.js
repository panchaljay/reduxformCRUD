import React from 'react'
import { Link } from "react-router-dom";
import "../App.css";


function Header() {
  return (
    <>
    <Link  to="/form"><button>Add Data</button></Link>
      <Link   to="/table"><button id='btn'>Show Data</button></Link>
      </>
  )
}

export default Header
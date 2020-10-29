import React from 'react'
import { Link } from 'react-router-dom'
export function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/COURTDATES">COURT DATES</Link>
        </li>
        <li>
          <Link to="/CHECK-IN">CHECK-IN</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/AddCourtDates">ADD A COURT DATE</Link>
        </li>
        <li>
          <Link to="/ALERT">ALERT</Link>
        </li>
        <li>
          <Link to="/AdminAddDate">ADMIN</Link>
        </li>
      </ul>
    </header>
  )
}

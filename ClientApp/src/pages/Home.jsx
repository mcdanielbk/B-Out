import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Header } from '../components/Header'
import Court from '../img/court.jpg'
import CheckIn from '../img/CheckIn.jpg'
import lawyer from '../img/lawyer.png'
import arrested from '../img/arrested.jpg'
//import { signUp } from '../components/signUp'

export function Home() {
  return (
    <>
      <Header />
      <nav>
        <Link to="/signUp">Sign Up</Link>
      </nav>

      <main className="options">
        <section>
          <h3>COURT DATES</h3>
          <img src={Court} />
          <div>
            <a href="/COURTDATES">
              <button type="button">COURT DATES</button>
            </a>
          </div>
        </section>
        <section>
          <h3>WEEKLY CHECK-IN</h3>
          <img src={CheckIn} />
          <div>
            <a href="/CHECK-IN">
              <button type="button">CHECK-IN</button>
            </a>
          </div>
        </section>
        <section>
          <h3>ADD COURT DATE</h3>
          <img src={lawyer} />
          <div>
            <a href="/LAWYERS">
              <button type="button">ADD COURT DATE</button>
            </a>
          </div>
        </section>
        <section>
          <h3>I'M BEING ARRESTED</h3>
          <img src={arrested} />
          <div>
            <a href="/ALERT">
              <button type="button" className="alert">
                ALERT
              </button>
            </a>
          </div>
        </section>
      </main>
    </>
  )
}

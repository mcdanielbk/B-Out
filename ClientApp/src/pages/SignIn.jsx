import React, { useState } from 'react'
import { recordAuthentication } from '../auth'
import bars from '../img/bars.jpg'

export function SignIn() {
  const [errorMessage, setErrorMessage] = useState()

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedUser = { ...user, [fieldName]: value }

    setUser(updatedUser)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Sessions', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    })

    const apiResponse = await response.json()

    if (apiResponse.status === 400) {
      setErrorMessage(Object.values(apiResponse.errors).join(' '))
    } else {
      // TODO, record the login
      recordAuthentication(apiResponse)
      window.location.assign('/')
    }
  }

  return (
    <>
      <nav>
        <a href="/">
          <i></i>
        </a>
      </nav>
      <section className="sign-body">
        <h1>LOG-IN</h1>
        <div className="login-box">
          <form className="full" onSubmit={handleFormSubmit}>
            {errorMessage && <p>{errorMessage}</p>}
            <h1>LOG-IN</h1>
            <div className="form-input">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleStringFieldChange}
              />
            </div>
            <div className="form-input">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleStringFieldChange}
              />
            </div>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </section>
    </>
  )
}

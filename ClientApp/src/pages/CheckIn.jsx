import React from 'react'
import { Header } from '../components/Header'
import { usePosition } from 'use-position'

export function CheckIn() {
  const { latitude, longitude } = usePosition()

  function handleSubmitForm(event) {
    event.preventDefault()
    console.log(`I know the user is at ${latitude} and ${longitude}`)
  }

  return (
    <>
      <Header />
      <h1>WEEKLY CHECK-IN</h1>
      <form onSubmit={handleSubmitForm}>
        <div>
          <h2>Question</h2>
          <input type="radio" />
          <label>NO</label>
          <input type="radio" />
          <label>YES</label>
        </div>
        <div>
          <h2>Question</h2>
          <input type="radio" />
          <label>NO</label>
          <input type="radio" />
          <label>YES</label>
        </div>
        <div>
          <h2>Question</h2>
          <input type="radio" />
          <label>NO</label>
          <input type="radio" />
          <label>YES</label>
        </div>
        <div>
          <h2>Question</h2>
          <input type="radio" />
          <label>NO</label>
          <input type="radio" />
          <label>YES</label>
        </div>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>
    </>
  )
}

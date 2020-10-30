import React from 'react'
import { Header } from '../components/Header'
import runninman from '../img/runninman.jpg'
import { usePosition } from 'use-position'

export function Alert() {
  const { latitude, longitude } = usePosition()

  function handleSubmitForm(event) {
    event.preventDefault()
    console.log(`I know the user is at ${latitude} and ${longitude}`)
  }

  return (
    <>
      <Header />
      <body className="alertmain">
        <form onSubmit={handleSubmitForm}>
          <input
            value=""
            className="gps"
            type="submit"
            id="image"
            alt="Login"
          />
        </form>
        <div className="alerttxt">
          <h2>
            IF YOU ARE CURRENTLY ABOUT TO BE ARRESTED AND CANT REACH US PLEASE
            PRESS THE ABOVE BUTTON AND YOUR LOCATION WILL BE SENT TO US SO WE
            KNOW WHAT CITY YOU ARE BEING ARRESTED IN SO WE CAN INITIATE THE
            PAPERWORK TO GET YOU BONDED, STAND BY AND WE WILL SEE YOU SOON!{' '}
          </h2>
        </div>
      </body>
    </>
  )
}

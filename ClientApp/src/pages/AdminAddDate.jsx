import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
//import './App.css'
import { Header } from '../components/Header'
import { useHistory } from 'react-router-dom'
import { getUser, getUserId } from '../auth'

export function AdminAddDates() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [newCourtDate, setNewCourtDate] = useState({
    when: '',
    caseNumber: '',
    charge: '',
    courtRoom: '',
  })

  const history = useHistory()

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedCourtDate = { ...newCourtDate, [fieldName]: value }

    setNewCourtDate(updatedCourtDate)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/CourtDates', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newCourtDate),
    })

    const json = await response.json()

    history.push('/CourtDates')
  }

  const user = getUser()
  if (user.isAdmin && getUserId() !== undefined) {
    return (
      <>
        <Header />
        <form className="Add" onSubmit={handleFormSubmit}>
          <h5>
            IF YOU HAVE RECEIVED A COURT DATE BEFORE WE HAD A CHANCE TO GIVE IT
            TO YOU PLEASE ENTER IT HERE
          </h5>
          <div className="date">
            <label>Select a court date: </label>
            <DatePicker
              name="when"
              value={newCourtDate.when}
              selected={selectedDate}
              onChange={(date) => {
                setSelectedDate(date)
                setNewCourtDate({ ...newCourtDate, when: date })
              }}
              dateFormat="yyyy-MM-dd"
              minDate={new Date()}
            />
          </div>
          <div className="Case">
            <label> Enter Case Number: </label>
            <input
              name="caseNumber"
              type="caseNumber"
              value={newCourtDate.caseNumber}
              onChange={handleStringFieldChange}
            />
          </div>
          <div className="Charge">
            <label> Enter Charge: </label>
            <input
              name="charge"
              type="Charge"
              value={newCourtDate.charge}
              onChange={handleStringFieldChange}
            />
          </div>
          <div className="CourtRoom">
            <label> Enter CourtRoom: </label>
            <input
              name="courtRoom"
              type="courtRoom"
              value={newCourtDate.courtRoom}
              onChange={handleStringFieldChange}
            />
          </div>
          <p>
            <input type="submit" value="Submit"></input>
          </p>
        </form>
      </>
    )
  } else {
    return (
      <>
        <h1>This Page is Reserved For Admin Use Only</h1>
      </>
    )
  }
}

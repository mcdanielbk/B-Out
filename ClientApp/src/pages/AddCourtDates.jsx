import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
//import './App.css'
import { Header } from '../components/Header'

export function AddCourtDates() {
  const [selectedDate, setSelectedDate] = useState(null)
  return (
    <>
      <Header />
      <form className="Add">
        <div className="Picker">
          <h1>Please enter your court Date.</h1>
          <h5>
            IF YOU HAVE RECEIVED A COURT DATE BEFORE WE HAD A CHANCE TO GIVE IT
            TO YOU PLEASE ENTER IT HERE
          </h5>
          <label>Select a court date: </label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
            minDate={new Date()}
          />
        </div>
      </form>
    </>
  )
}

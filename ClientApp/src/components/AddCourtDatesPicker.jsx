import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

function AddCourtDatesPicker() {
  const [selectedDate, setSelectedDate] = useState(null)
  return (
    <>
      <div className="Picker">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="yyyy-MM-dd"
          minDate={new Date()}
        />
      </div>
    </>
  )
}

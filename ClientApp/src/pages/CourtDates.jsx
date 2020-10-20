import React, { useState, useEffect } from 'react'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { Header } from '../components/Header'
import { useHistory } from 'react-router-dom'

const localizer = momentLocalizer(moment)

export function CourtDates() {
  const history = useHistory()

  const [courtdates, setCourtdates] = useState([])

  useEffect(() => {
    async function fetchCourtDates() {
      const response = await fetch('/api/CourtDates')
      const json = await response.json()
      console.log(json)

      setCourtdates(json)
    }

    fetchCourtDates()
  }, [])

  return (
    <>
      <Header />
      <div className="C">
        <Calendar
          localizer={localizer}
          events={courtdates}
          startAccessor="when"
          endAccessor="when"
          titleAccessor="caseNumber"
          // titleAccessor={(event) => 'COURT'}
          style={{ height: '75vh' }}
          onSelectEvent={function (calendarEvent, browserEvent) {
            history.push(`/courtdate/${calendarEvent.id}`)
          }}
        />
      </div>
    </>
  )
}

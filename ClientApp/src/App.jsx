import React, { useState, useEffect } from 'react'
import './custom.scss'
import { Home } from './pages/Home'
import { Route, Switch, useParams } from 'react-router-dom'
import { Header } from './components/Header'
import { CourtDates } from './pages/CourtDates'
import { CheckIn } from './pages/CheckIn'
import { AddCourtDates } from './pages/AddCourtDates'
import { Alert } from './pages/Alert'
import { SignUp } from './pages/SignUp'
import axios from 'axios'
import { SignIn } from './pages/SignIn'
import { AdminAddDates } from './pages/AdminAddDate'
import { logout } from './auth'

export function CourtDate() {
  const [courtDate, setCourtDate] = useState([])

  const params = useParams()
  const id = params.id

  useEffect(() => {
    axios
      .get(`api/CourtDates/${id}`)
      .then((response) => setCourtDate(response.data))
    // fetch to pull details of courtdate with id equal to `id`
    // Put that in state
    //show it below
    // setState(json)
  }, [id])

  return (
    <>
      <Header />
      <article>
        <ul>
          <li>THE CASE NUMBER FOR THIS COURT DATE IS</li>
          {courtDate.caseNumber}
          <li>
            THE CHARGE IN WHICH YOU WILL BE GOING TO COURT FOR THIS DAY IS{' '}
          </li>
          {courtDate.charge}
          <li>THE COURT ROOM YOU SHOULD REPORT TO IS </li> {courtDate.courtRoom}
        </ul>
      </article>
    </>
  )
}

export function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/CourtDates" component={CourtDates}></Route>
        <Route exact path="/CHECK-IN" component={CheckIn}></Route>
        <Route exact path="/AddCourtDates" component={AddCourtDates}></Route>
        <Route exact path="/ALERT" component={Alert}></Route>
        <Route exact path="/courtdate/:id" component={CourtDate}></Route>
        <Route exact path="/SignUp/" component={SignUp}></Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/AdminAddDate/" component={AdminAddDates}></Route>
      </Switch>
    </>
  )
}

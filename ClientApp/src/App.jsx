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

export function CourtDate() {
  const [courtDate, setCourtDate] = useState({
    when: '',
    caseNumber: '',
    charge: '',
    courtRoom: '',
  })
  const params = useParams()
  const id = params.id

  useEffect(() => {
    // fetch to pull details of courtdate with id equal to `id`
    // Put that in state
    //show it below
    // setState(json)
  }, [id])

  return <div>All about court date with id {id}</div>
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
      </Switch>
    </>
  )
}

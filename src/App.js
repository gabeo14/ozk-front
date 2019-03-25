import React, { Component } from 'react'
import logo from './logo.svg'
import './App.scss'
import GoalCard from './Components/Pages/GoalCard.jsx'
import NewGoal from './Components/Pages/NewGoal.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <GoalCard /> */}
        <NewGoal />
      </div>
    )
  }
}

export default App

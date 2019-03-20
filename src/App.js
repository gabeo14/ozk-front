import React, { Component } from 'react'
import logo from './logo.svg'
import './App.scss'
import GoalCard from './Components/GoalCard.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GoalCard />
      </div>
    )
  }
}

export default App

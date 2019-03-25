import React, { Component } from 'react'

class NewGoal extends Component {
  state = {}
  render() {
    return (
      <>
        <div className="container form-container">
          <header className="title " />
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="e.g MacBook Pro"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Savings Goal</label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="e.g. 1,500"
                min="0"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Initial Savings</label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="e.g. 100"
                min="0"
              />
            </div>
          </div>

          <a className="button is-success">Submit Goal</a>
        </div>
      </>
    )
  }
}

export default NewGoal

import React, { Component } from 'react'

class GoalCard extends Component {
  state = {}
  render() {
    return (
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <ul className="goalCardStuff">
              <li>
                <div className="card">
                  <header className="card-header">
                    <h2 className="title is-2 has-text-centered">Zelos Mako</h2>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      <h1 className="title is-1">$100/$800 | 12.5%</h1>
                      <progress
                        className="progress is-success"
                        value="12.5"
                        max="100"
                      />
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a href="#" className="card-footer-item">
                      Update
                    </a>
                    <a href="#" className="card-footer-item">
                      History
                    </a>
                    <a href="#" className="card-footer-item">
                      Delete
                    </a>
                  </footer>
                </div>
              </li>
              <li>
                <div className="card">
                  <header className="card-header">
                    <h2 className="title is-2">Ventus Mori</h2>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      <h1 className="title is-1">$100/400 | 25%</h1>
                      <progress
                        className="progress is-success"
                        value="25"
                        max="100"
                      />
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a href="#" className="card-footer-item">
                      Update
                    </a>
                    <a href="#" className="card-footer-item">
                      History
                    </a>
                    <a href="#" className="card-footer-item">
                      Delete
                    </a>
                  </footer>
                </div>
              </li>
              <li>
                <a className="button">New Goal</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoalCard

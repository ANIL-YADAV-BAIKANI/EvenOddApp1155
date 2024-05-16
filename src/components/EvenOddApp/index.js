import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, text: 'Even'}

  onIncrement = () => {
    const {count, text} = this.state
    let randomNum = Math.floor(Math.random() * 100)
    if (randomNum % 2 === 0) {
      this.setState(prev => {
        return {count: randomNum, text: 'Even'}
      })
    } else {
      this.setState(prev => {
        return {count: randomNum, text: 'odd'}
      })
    }
  }

  render() {
    const {count, text} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <div>
            <h1 className="heading-count">Count {count}</h1>
            <p className="even-odd">Count is {text}</p>
            <button className="button" onClick={this.onIncrement}>
              Increment
            </button>
            <p className="note">*Increase By Random Number Between 0 to 100</p>
          </div>
        </div>
      </div>
    )
  }
}
export default EvenOddApp

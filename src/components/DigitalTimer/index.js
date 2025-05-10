// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {totalSeconds: 1500, isRunning: false}

  componentDidMount() {
    const {isRunning} = this.state
    if (isRunning) {
      this.timerID = setInterval(this.myTimer, 1000)
    }
  }

  myTimer = () => {
    this.setState(prevState => {
      const {totalSeconds} = this.state
      return {totalSeconds: prevState.totalSeconds - 1}
    })
  }

  lessCount = () => {
    this.setState(prevState => {
      const {totalSeconds} = this.state
      return {totalSeconds: prevState.totalSeconds - 60}
    })
  }

  addCount = () => {
    this.setState(prevState => {
      const {totalSeconds} = this.state
      return {totalSeconds: prevState.totalSeconds + 60}
    })
  }

  startBtn = () => {
    this.setState(
      prevState => ({isRunning: !prevState.isRunning}),
      () => {
        const {isRunning} = this.state
        if (isRunning) {
          this.timerID = setInterval(this.myTimer, 1000)
        } else {
          clearInterval(this.timerID)
        }
      },
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  resetBtn = () => {
    this.setState({totalSeconds: 1500})
  }

  render() {
    const {totalSeconds, isRunning} = this.state
    const min = Math.floor(totalSeconds / 60)
    const sec = totalSeconds % 60
    const format = num => num.toString().padStart(2, '0')

    return (
      <div className="bg-container">
        <h1>Digital Timer</h1>
        <div className="content-div">
          <div className="timer-card">
            <div className="time-content-div">
              <h1>
                {format(min)}:{format(sec)}
              </h1>
              {isRunning ? <p>Running</p> : <p>Paused</p>}
            </div>
          </div>
          <div className="time-buttons-div">
            <div className="bg-btn-div">
              <button className="btn-div" onClick={this.startBtn}>
                <img src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png" />
                {isRunning ? (
                  <h1 className="start-txt">Pause</h1>
                ) : (
                  <h1 className="start-txt">Start</h1>
                )}
              </button>
              <button className="btn-div" onClick={this.resetBtn}>
                <img src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png " />
                <h1 className="start-txt">Reset</h1>
              </button>
            </div>
            <p>Set Time limt</p>
            <div className="add-remov-btn-bg-div">
              <button
                className="add-btn"
                type="button"
                onClick={this.lessCount}
              >
                -
              </button>
              <div className="plus-minus">
                <h1>25</h1>
              </div>
              <button className="add-btn" type="button" onClick={this.addCount}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer

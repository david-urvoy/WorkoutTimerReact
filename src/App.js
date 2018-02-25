import React, { Component } from 'react';
import Series from './components/serie/Series'
import RestPeriods from './components/rest-period/RestPeriods'
import Timer from './components/Timer'
import { P, D } from './constants/ButtonType'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    const series = this._initSeries()
    series[0] = D.value
    const restPeriods = this._initRestPeriods()
    this.state = {
      serieIndex: 0,
      series: series,
      restPeriods: restPeriods,
      lockTimer: false,
      countdown: restPeriods[0],
      intervalID: -1
    }
  }

  _initRestPeriods() {
    return [25, 60, 90, 120, 180, 240]
  }

  _initSeries = () => {
    return Array(7).fill(P.value)
  }

  focusSerie = e => {
    const series = this._initSeries()
    series[e] = D.value
    this.setState({
      series: series,
      serieIndex: e
    })
  }

  startTimer = restPeriodIndex => {
    let focus = this.state.serieIndex > 0 ? this.state.serieIndex - 1 : 0
    const series = this.state.series
    series[this.state.serieIndex] = P.value
    series[focus] = D.value
    this.setState(prevState => ({
      serieIndex: focus,
      series: series,
      lockTimer: true,
      countdown: prevState.restPeriods[restPeriodIndex],
      intervalID: this._countdown()
    }))
  }

  stopTimer = () => this.setState(prevState => ({
    countdown: prevState.restPeriods[0],
    lockTimer: false
  }))

  _countdown = restIndex => {
    return setInterval(() => {
      if (this.state.lockTimer && this.state.countdown > 0) {
        this.setState((prevState, props) => ({ countdown: prevState.countdown - 1 }))
      } else {
        clearInterval(this.state.intervalID)
        this.setState({ intervalID: -1 })
        this.stopTimer()
      }
    }, 1000)
  }

  render() {
    return (
      <div className="App" role="alert">
        <Series series={this.state.series} click={this.focusSerie} />
        {
          !this.state.lockTimer ?
            <RestPeriods restPeriods={this.state.restPeriods} click={this.startTimer} />
            :
            <Timer countdown={this.state.countdown} stop={this.stopTimer} />
        }
      </div>
    )
  }
}

export default App;

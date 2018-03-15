import React, { Component } from 'react';
import Series from './components/serie/Series'
import RestPeriods from './components/rest-period/RestPeriods'
import Timer from './components/Timer'
import Exercices from './components/exercise/Exercises'
import { FullProgram, UpperProgram, LowerProgram } from './data/Program'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      program: FullProgram,
      seriesData: {},
      exerciseIndex: 0,
      lockTimer: false,
      restPeriod: 0
    }
  }

  componentWillMount() {
    this.setState(prevState => {
      return ({
        seriesData: { index: prevState.program[0].nbSeries, length: prevState.program[0].nbSeries }
      })
    })
  }

  startTimer = restPeriod => this.setState(prevState => {
    const serieIndex = prevState.seriesData.index - 1
    let exerciseIndex = prevState.exerciseIndex
    if (serieIndex === 0) {
      if (prevState.program[exerciseIndex].double) {
        prevState.program[exerciseIndex].double = false
      } else {
        exerciseIndex += 1
      }
    }
    return {
      seriesData: {
        length: prevState.program[exerciseIndex].nbSeries, index: serieIndex === 0 ? prevState.program[exerciseIndex].nbSeries : serieIndex
      },
      lockTimer: true,
      restPeriod: restPeriod,
      exerciseIndex: exerciseIndex
    }
  })

  focusSerie = index => this.setState(prevState => ({
    seriesData: { ...prevState.seriesData, index: index }
  }))

  focusExercise = exercise => this.setState({
    seriesData: { index: exercise.nbSeries, length: exercise.nbSeries },
    exerciseIndex: exercise.index
  })

  render() {
    return (
      <div className="App" role="alert">
        <Series data={this.state.seriesData} click={this.focusSerie} />
        {
          !this.state.lockTimer ?
            <RestPeriods click={this.startTimer} />
            :
            <Timer countdown={this.state.restPeriod} stop={() => this.setState({ lockTimer: false })} />
        }
        <Exercices program={this.state.program} index={this.state.exerciseIndex} click={this.focusExercise} />
      </div>
    )
  }
}

export default App;

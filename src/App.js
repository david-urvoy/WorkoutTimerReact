import React, { Component } from 'react';
import Programs from './components/Programs'
import Series from './components/serie/Series'
import RestPeriods from './components/rest-period/RestPeriods'
import Timer from './components/Timer'
import Exercices from './components/exercise/Exercises'
import { FullProgram, UpperProgram, LowerProgram } from './data/Program'
import './App.css';

const programs = [FullProgram, UpperProgram, LowerProgram]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exerciseIndex: 0,
      lockTimer: false,
      programIndex: 0,
      seriesData: {},
      restPeriod: 0
    }
  }

  componentWillMount() {
    this.setState(prevState => {
      return ({
        seriesData: { index: programs[prevState.programIndex].workout[0].nbSeries, length: programs[prevState.programIndex].workout[0].nbSeries }
      })
    })
  }

  startTimer = restPeriod => this.setState(prevState => {
    const serieIndex = prevState.seriesData.index - 1
    let exerciseIndex = prevState.exerciseIndex
    if (serieIndex === 0) {
      if (programs[prevState.programIndex].workout[exerciseIndex].double) {
        programs[prevState.programIndex].workout[exerciseIndex].double = false
      } else {
        exerciseIndex += 1
      }
    }
    return {
      seriesData: {
        length: programs[prevState.programIndex].workout[exerciseIndex].nbSeries, index: serieIndex === 0 ? programs[prevState.programIndex].workout[exerciseIndex].nbSeries : serieIndex
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
        <Exercices program={programs[this.state.programIndex]} index={this.state.exerciseIndex} click={this.focusExercise} />
        <Programs programs={programs} index={this.state.programIndex} click={index => this.setState({ programIndex: index, exerciseIndex: 0 })} />
      </div>
    )
  }
}

export default App;

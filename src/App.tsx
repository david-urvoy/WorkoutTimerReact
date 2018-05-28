import * as React from 'react';
import Exercise from './model/Exercise'
import Exercices from './components/exercise/Exercises'
import Programs from './components/Programs'
import RestPeriods from './components/rest-period/RestPeriods'
import { Series, SeriesData } from './components/serie/Series'
import Timer from './components/Timer'
import { FullProgram, UpperProgram, LowerProgram } from './data/Program'
import './App.css';

const programs = [FullProgram, UpperProgram, LowerProgram]

interface AppState {
  exerciseIndex: number
  lockTimer: boolean,
  programIndex: number,
  seriesData: SeriesData,
  restPeriod: number
}

class App extends React.Component<any, AppState> {
  state: AppState

  constructor(props) {
    super(props)
    this.state = {
      exerciseIndex: 0,
      lockTimer: false,
      programIndex: 0,
      seriesData: { index: 0, length: 0 },
      restPeriod: 0
    }
  }

  componentWillMount() {
    this.setState((prevState: AppState) => {
      const nbSeries = programs[prevState.programIndex].workout[0].nbSeries
      return ({
        seriesData: { index: nbSeries, length: nbSeries }
      })
    })
  }

  startTimer = (restPeriod: number) => this.setState((prevState: AppState) => {
    if (!prevState.lockTimer) {
      const serieIndex = prevState.seriesData.index - 1
      let exerciseIndex = prevState.exerciseIndex
      if (serieIndex === 0) {
        if (programs[prevState.programIndex].workout[exerciseIndex].double) {
          programs[prevState.programIndex].workout[exerciseIndex].double = false
        } else {
          exerciseIndex += 1
        }
      }
      const nbSeries = programs[prevState.programIndex].workout[exerciseIndex].nbSeries
      return {
        seriesData: {
          length: nbSeries, index: serieIndex === 0 ? nbSeries : serieIndex
        },
        lockTimer: true,
        restPeriod,
        exerciseIndex
      }
    }
  })

  focusSerie = (index: number) => this.setState((prevState: AppState) => ({
    seriesData: { ...prevState.seriesData, index }
  }))

  focusExercise = (exercise: Exercise, exerciseIndex: number) => this.setState({
    seriesData: { index: exercise.nbSeries, length: exercise.nbSeries },
    exerciseIndex
  })

  computeRest = () => {
    const exercise = programs[this.state.programIndex].workout[this.state.exerciseIndex]
    const rest = this.state.seriesData.index === 1 ? exercise.over : exercise.rest
    this.startTimer(rest)
  }

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
        <button onClick={() => this.computeRest()}>START</button>
      </div>
    )
  }
}

export default App;

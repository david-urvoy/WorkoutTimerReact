import * as React from 'react';
import Exercise from './model/Exercise'
import Exercices from './components/exercise/Exercises'
import Programs from './components/Programs'
import Rest from './components/Rest'
import RestPeriods from './components/rest-period/RestPeriods'
import { Series, SeriesData } from './components/serie/Series'
import { FullProgram, UpperProgram, LowerProgram } from './data/Program'
import './App.css';

const programs = [FullProgram, UpperProgram, LowerProgram]

interface AppState { exerciseIndex: number, programIndex: number, seriesData: SeriesData }

/**
 * Application's parent component
 */
class App extends React.Component<any, AppState> {
  state: AppState = { exerciseIndex: 0, programIndex: 0, seriesData: { index: 0, length: 0 } }

  constructor(props) {
    super(props)
  }

  /**
   * Lifecycle hook that initializes the series data with the selected program
   */
  componentWillMount() {
    this.setState((prevState: AppState) => {
      const nbSeries = programs[prevState.programIndex].workout[0].nbSeries
      return ({
        seriesData: { index: nbSeries, length: nbSeries }
      })
    })
  }

  /**
   * Void function that computes the state to the next serie (and next exercise when necessary)
   */
  private nextSerie = () => this.setState((prevState: AppState) => {
    const serieIndex = prevState.seriesData.index - 1
    let exerciseIndex = prevState.exerciseIndex
    if (serieIndex === 0) {
      if (programs[prevState.programIndex].workout[exerciseIndex].double) {
        programs[prevState.programIndex].workout[exerciseIndex].double = false
      } else {
        exerciseIndex++
      }
    }
    const nbSeries = programs[prevState.programIndex].workout[exerciseIndex].nbSeries
    return {
      seriesData: {
        length: nbSeries, index: serieIndex === 0 ? nbSeries : serieIndex
      },
      exerciseIndex
    }
  })

  /**
   * Returns the Exercise at the provided index of the program
   * 
   * @param index: The index of the exercise within the current program
   */
  private exercise = (index: number) => programs[this.state.programIndex].workout[index]

  /**
   * Sets the state's serie index to the provided value
   * 
   * @param index : The serie index to focus
   */
  private focusSerie = (index: number) => this.setState((prevState: AppState) => ({
    seriesData: { ...prevState.seriesData, index }
  }))

  /**
   * Sets the state's exercise index to the provided value
   * 
   * @param index : The exercise index to focus
   */
  private focusExercise = (exerciseIndex: number) => {
    const exercise = this.exercise(exerciseIndex)
    this.setState({
      seriesData: { index: exercise.nbSeries, length: exercise.nbSeries },
      exerciseIndex
    })
  }

  /**
   * Calculates the duration of the rest pause based on the current exercise and serie focused
   */
  private computeRest = () => {
    const exercise = programs[this.state.programIndex].workout[this.state.exerciseIndex]
    return this.state.seriesData.index === 1 ? exercise.over : exercise.rest
  }

  render() {
    return (
      <div className="App" role="alert">
        <Series data={this.state.seriesData} click={this.focusSerie} />
        <Rest nextSerie={this.nextSerie} defaultTimer={this.computeRest()} />
        <Exercices program={programs[this.state.programIndex]} index={this.state.exerciseIndex} click={this.focusExercise} />
        <Programs programs={programs} index={this.state.programIndex} click={index => this.setState({ programIndex: index, exerciseIndex: 0 })} />
      </div>
    )
  }
}

export default App;

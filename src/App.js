import React, { Component } from 'react';
import Series from './components/serie/Series'
import RestPeriods from './components/rest-period/RestPeriods'
import Timer from './components/Timer'
import Exercices from './components/exercise/Exercises'
import Program from './data/Program'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seriesData: {
        index: Program[0].nbSeries,
        length: Program[0].nbSeries,
      },
      exerciseIndex: 0,
      lockTimer: false,
      restPeriod: 0
    }
  }

  startTimer = restPeriod => this.setState(prevState => {
    const serieIndex = prevState.seriesData.index - 1
    const exerciseIndex = prevState.exerciseIndex + (serieIndex === 0 ? 1 : 0)
    return {
      seriesData: {
        length: Program[exerciseIndex].nbSeries, index: serieIndex === 0 ? Program[exerciseIndex].nbSeries : serieIndex
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
        <Exercices index={this.state.exerciseIndex} click={this.focusExercise} />
      </div>
    )
  }
}

export default App;

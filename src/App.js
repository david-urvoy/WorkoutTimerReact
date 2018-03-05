import React, { Component } from 'react';
import Series from './components/serie/Series'
import RestPeriods from './components/rest-period/RestPeriods'
import Timer from './components/Timer'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      serieIndex: 0,
      lockTimer: false,
      restPeriod: 0
    }
  }

  startTimer = restPeriod => this.setState(prevState => ({
    serieIndex: prevState.serieIndex > 0 ? prevState.serieIndex - 1 : 0,
    lockTimer: true,
    restPeriod: restPeriod
  }))

  focusSerie = e => this.setState({ serieIndex: e })

  render() {
    return (
      <div className="App" role="alert">
        <Series focus={this.state.serieIndex} click={this.focusSerie} />
        {
          !this.state.lockTimer ?
            <RestPeriods click={this.startTimer} />
            :
            <Timer countdown={this.state.restPeriod} stop={() => this.setState({ lockTimer: false })} />
        }
      </div>
    )
  }
}

export default App;

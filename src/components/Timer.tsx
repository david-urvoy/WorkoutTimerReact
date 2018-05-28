import * as React from 'react'
import format from '../constants/TimeFormat'

interface TimerState { countdown: number, timerID: number }

export default class Timer extends React.Component {
    state: TimerState
    props: { countdown: number, stop: () => void }
    constructor(props) {
        super(props)
        this.state = {
            countdown: props.countdown,
            timerID: -1
        }
    }

    componentDidMount() {
        const timerID = setInterval(() => this.countdown(), 1000)
        this.setState({ timerID })
    }

    countdown() {
        if (this.state.countdown > 0) {
            this.setState((prevState: TimerState) => ({ countdown: prevState.countdown - 1 }))
        } else {
            this.props.stop()
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.timerID)
    }

    render() {
        return (
            <div>
                <div><label style={{ fontSize: '100px', fontWeight: 'bold' }}>{format(this.state.countdown)}</label></div>
                <div><button onClick={this.props.stop}>Reset</button></div>
            </div>
        )
    }
}
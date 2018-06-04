import * as React from 'react'
import format from '../../constants/TimeFormat'

interface TimerState { countdown: number, timerID: number }

interface TimerProps { countdown: number, stop: () => void }

/**
 * Component that builds a countdown timer initialized with the props' countdown attribute and that calls the props' stop callback once finished
 */
export default class Timer extends React.Component<TimerProps, TimerState> {
    state: TimerState
    constructor(props: TimerProps) {
        super(props)
        this.state = {
            countdown: props.countdown,
            timerID: -1
        }
    }

    /** Lifecycle hook that initializes the timer countdown with a single second interval */
    componentDidMount() {
        const timerID = window.setInterval(() => this.countdown(), 1000)
        this.setState({ timerID })
    }

    /** Decrements the countdown timer and call the Props' stop callback once it reaches 0 */
    countdown() {
        if (this.state.countdown > 0) {
            this.setState((prevState: TimerState) => ({ countdown: --prevState.countdown }))
        } else {
            this.props.stop()
        }
    }

    /** Lifecycle hook that clears the interval on component unmount (timer reaching 0 or interrupted) */
    componentWillUnmount() {
        clearInterval(this.state.timerID)
    }

    render() {
        return (
            <div>
                <div><label style={{ fontSize: '100px', fontWeight: 'bold' }}>{format(this.state.countdown)}</label></div>
            </div>
        )
    }
}
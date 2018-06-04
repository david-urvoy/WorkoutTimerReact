import * as React from 'react'
import RestPeriods from './rest-period/RestPeriods'
import StartStop from './timer/StartStop'
import Timer from './timer/Timer'

interface RestState {
    timerIsLocked: boolean
}

interface RestProps {
    nextSerie: () => void
    defaultTimer: number
}

/**
 * Component that handles the rest pauses functionalities : Start/Stop button (or start timer buttons) and timer that locks the timer buttons until
 * the end of the rest pause
 */
export default class Rest extends React.Component<RestProps, RestState> {
    state: RestState = { timerIsLocked: false }
    constructor(props: RestProps) {
        super(props)
    }

    /**
     * Function that handles the start timer
     * 
     * @param restPeriod : Represents the duration of the rest pause (in seconds)
     */
    private start = (restPeriod: number) => {
        this.setState({ timerIsLocked: true })
    }

    /**
     * Function that handles the stop timer
     */
    private stop = () => {
        this.setState({ timerIsLocked: false })
        this.props.nextSerie()
    }

    render() {
        return (
            <div>
                <StartStop started={this.state.timerIsLocked} start={() => this.start(this.props.defaultTimer)} stop={this.stop} />
                {this.state.timerIsLocked &&
                    <Timer countdown={this.props.defaultTimer} stop={this.stop} />
                }
            </div>
        )
    }
}
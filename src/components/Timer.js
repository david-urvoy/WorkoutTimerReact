import React from 'react'
import format from '../constants/TimeFormat'

export default class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            countdown: props.countdown,
            timerID: -1
        }
    }

    componentDidMount = () => {
        const timerID = setInterval(() => this._countdown(), 1000)
        this.setState({ timerID: timerID })
    }

    _countdown = () => {
        if (this.state.countdown > 0) {
            this.setState((prevState, props) => ({ countdown: prevState.countdown - 1 }))
        } else {
            clearInterval(this.state.timerID)
            this.setState({ timerID: -1 })
        }
    }

    componentWillUnmount = () => {
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
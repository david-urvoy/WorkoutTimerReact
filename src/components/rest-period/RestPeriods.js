import React from 'react'
import RestPeriod from './RestPeriod'

export default class RestPeriods extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            restPeriods: [25, 60, 90, 120, 180, 240]
        }
    }

    render() {
        return (
            <div>
                {this.state.restPeriods.map((restPeriod, index) => <RestPeriod key={index} restPeriod={restPeriod} click={() => this.props.click(restPeriod)} />)}
            </div>
        )
    }
}
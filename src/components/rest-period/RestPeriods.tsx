import * as React from 'react'
import RestPeriod from './RestPeriod'

export default class RestPeriods extends React.Component {
    state: { restPeriods: [25, 60, 90, 120, 180, 240] }
    props: { click: (restPeriod: number) => void }
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.state.restPeriods.map((restPeriod: number, index: number) => <RestPeriod key={index} restPeriod={restPeriod} click={() => this.props.click(restPeriod)} />)}
            </div>
        )
    }
}
import React from 'react'
import RestPeriod from './RestPeriod'

export default function RestPeriods(props) {
    return (
        <div>
            {props.restPeriods.map((restPeriod, index) => <RestPeriod key={index} index={index} restPeriod={restPeriod} click={props.click} />)}
        </div>
    )
}
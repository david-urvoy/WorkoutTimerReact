import React from 'react'
import format from '../../constants/TimeFormat'

export default function RestPeriod(props) {
    return (
        <div>
            <button onClick={props.click} >
                {format(props.restPeriod)}
            </button>
        </div>
    )
}
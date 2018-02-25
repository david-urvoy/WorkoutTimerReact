import React from 'react'
import format from '../constants/TimeFormat'

export default function Timer(props) {
    return (
        <div>
            <div><label style={{fontSize: '100px', fontWeight:'bold'}}>{format(props.countdown)}</label></div>
            <div><button onClick={props.stop}>Reset</button></div>
        </div>
    )
}
import React from 'react'
import { P, D } from '../constants/ButtonType'

export default function Programs(props) {
    const focused = (index) => {
        return (index === props.index) ? D : P
    }

    return (
        <React.Fragment>
            <button className={"btn btn-" + focused(0)} onClick={() => props.click(0)}>{props.programs[0].name}</button>
            <button className={"btn btn-" + focused(1)} onClick={() => props.click(1)}>{props.programs[1].name}</button>
            <button className={"btn btn-" + focused(2)} onClick={() => props.click(2)}>{props.programs[2].name}</button>
        </React.Fragment>
    )
}


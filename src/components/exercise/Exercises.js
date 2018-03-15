import React from 'react'
import Exercise from './Exercise'
import { D, S } from '../../constants/ButtonType'

export default function Exercises(props) {
    return (
        <div>
            {
                props.program.map((exercise, index) =>
                    <Exercise key={index}
                        click={props.click}
                        style={index === props.index ? D : S}
                        exercise={Object.assign(exercise, { index: index })} />
                )
            }
        </div>
    )
}
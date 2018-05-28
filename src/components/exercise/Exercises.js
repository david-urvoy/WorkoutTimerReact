import React from 'react'
import Exercise from './Exercise'
import { D, S } from '../../constants/ButtonType'

export default function Exercises(props) {
    return (
        <div>
            {
                props.program.workout.map((exercise, index) =>
                    <Exercise key={index}
                        click={props.click}
                        style={index === props.index ? D : S}
                        index={index}
                        exercise={exercise} />
                )
            }
        </div>
    )
}
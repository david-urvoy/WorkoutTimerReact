import React from 'react'
import Exercise from './Exercise'
import Program from '../../data/Program'
import { D, S } from '../../constants/ButtonType'

export default class Exercises extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            exercises: Program
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.exercises.map((exercise, index) =>
                        <Exercise key={index}
                            click={this.props.click}
                            style={index === this.props.index ? D : S}
                            exercise={Object.assign(exercise, { index: index })} />
                    )
                }
            </div>
        )
    }
}
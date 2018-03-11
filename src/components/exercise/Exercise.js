import React from 'react'

export default function Exercise(props) {
    return (
        <button
            onClick={() => props.click(props.exercise)}
            className={'btn btn-' + props.style}>
            {`Exercice ${props.exercise.label}`}
        </button>
    )
}
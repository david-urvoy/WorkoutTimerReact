import React from 'react'

export default function Serie(props) {
    return (
        <button key={props.value} type="button" className={'btn btn-' + props.style} onMouseDown={props.click}>
            {props.value}
        </button>
    )
}
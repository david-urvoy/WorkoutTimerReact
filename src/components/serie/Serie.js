import React from 'react'

export default function Serie(props) {
    return (
        <button key={props.value} type="button" className={'btn btn-' + props.style} onClick={props.click}>
            {props.value}
        </button>
    )
}
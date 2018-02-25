import React from 'react'
import Serie from './Serie'

export default function Series(props) {
    return (
        <div className="series" >
            {
                props.series.map((serie, index) =>
                    <Serie key={index} value={index} style={serie} click={() => props.click(index)} />)
            }
        </div>
    )
}
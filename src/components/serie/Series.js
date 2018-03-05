import React from 'react'
import Serie from './Serie'
import { P, D } from '../../constants/ButtonType'

export default class Series extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            series: []
        }
    }

    componentDidMount = () => {
        this._series(0)
    }

    componentWillReceiveProps = (props) => {
        this._series(props.focus)
    }

    _series = (focus) => {
        this.setState({
            series: [...Array(focus).fill(P.value), D.value, ...Array(6 - focus).fill(P.value)]
        })
    }

    render() {
        return (
            <div className="series" >
                {
                    this.state.series.map((serie, index) =>
                        <Serie key={index} value={index} style={serie} click={() => this.props.click(index)} />)
                }
            </div>
        )
    }
}
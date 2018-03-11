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
        this._series(this.props.data)
    }

    componentWillReceiveProps = (props) => {
        this._series(props.data)
    }

    _series = ({index, length}) => {
        this.setState({
            series: [...Array(index-1).fill(P), D, ...Array(length - index).fill(P)]
        })
    }

    render() {
        return (
            <div className="series" >
                {
                    this.state.series.map((serie, index) =>
                        <Serie key={index} value={++index} style={serie} click={() => this.props.click(index)} />)
                }
            </div>
        )
    }
}
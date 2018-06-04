import * as React from 'react'
import Serie from './Serie'
import { P, D } from '../../constants/ButtonType'

/** 
 * Interface that represents the information related to a serie of an exercise
 * 
 * @argument index: The index of the current serie
 * @argument length: The total count of series for the current exercise
 */
export interface SeriesData { index: number, length: number }

/**
 * Component that manages the series of an exercise
 */
export class Series extends React.Component {
    state: { series: number[] }
    props: { data: SeriesData, click: (index: number) => void }
    constructor(props) {
        super(props)
        this.state = {
            series: []
        }
    }

    componentDidMount() {
        this.series(this.props.data)
    }

    componentWillReceiveProps(props) {
        this.series(props.data)
    }

    /**
     * Updates the state's set of series with both total number of series and index of the focused serie
     * 
     * @param SeriesData: object that contains {index} the index of the focused serie and {length} the total number of series
     */
    private series = ({ index, length }: SeriesData) => {
        this.setState({
            series: [...Array(index - 1).fill(P), D, ...Array(length - index).fill(P)]
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
export default class Exercise {
    label: string
    nbSeries: number
    rest: number
    over: number
    double?: boolean
    constructor({ label, nbSeries = 6, rest = 25, over = 25, double }: { label: string, nbSeries: number, rest: number, over: number, double?: boolean }) {
        this.label = label
        this.nbSeries = nbSeries
        this.double = double
        this.rest = rest
        this.over = over
    }
}
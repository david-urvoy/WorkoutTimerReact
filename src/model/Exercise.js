export default class Exercise {
    constructor({ label, nbSeries = 6, rest = 25, over = 25, double }) {
        this.label = label
        this.nbSeries = nbSeries
        this.double = double
        this.rest = rest
        this.over = over
    }
}
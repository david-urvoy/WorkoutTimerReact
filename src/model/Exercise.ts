// interface IExercise { readonly label: string, readonly nbSeries?: number, readonly rest?: number, readonly over?: number, double?: boolean }

/**
 * Defines an exercise and its related context
 */
export default class Exercise {
    constructor(readonly label: string, readonly nbSeries = 6, readonly rest = 25, readonly over = 25, public double?: boolean) { }

    static builder = ({ label, nbSeries, rest, over, double }: { label: string, nbSeries?: number, rest?: number, over?: number, double?: boolean }) => {
        return new Exercise(label, nbSeries, rest, over, double)
    }
}

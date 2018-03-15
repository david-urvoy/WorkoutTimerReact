import Exercise from '../model/Exercise'

const B = new Exercise("B", 6)
const A12 = new Exercise("A12", 6)
const A2 = new Exercise("A2", 6)
const C = new Exercise("C", 6)
const E = new Exercise("E", 6, true)
const F = new Exercise("F", 4)
const G = new Exercise("G", 6)
const H = new Exercise("H", 6)
const K2 = new Exercise("K2", 3)

const UpperProgram = { name: 'Upper', workout: [B, A12, A2, C, K2] }
const LowerProgram = { name: 'Lower', workout: [E, F, G, H] }
const FullProgram = { name: 'FullBody', workout: [B, A12, A2, C, E, F, G, H, K2] }

export { FullProgram, UpperProgram, LowerProgram }
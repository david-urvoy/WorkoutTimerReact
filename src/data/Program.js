import Exercise from '../model/Exercise'

const B = new Exercise({ label: "B" })
const A12 = new Exercise({ label: "A12" })
const A2 = new Exercise({ label: "A2", over: 180 })
const C = new Exercise({ label: "C", over: 180 })
const E = new Exercise({ label: "E", double: true, over: 180 })
const F = new Exercise({ label: "F", nbSeries: 4, over: 180 })
const G = new Exercise({ label: "G", over: 120 })
const H = new Exercise({ label: "H", over: 60 })
const K2 = new Exercise({ label: "K2", nbSeries: 3, rest: 60 })

const UpperProgram = { name: 'Upper', workout: [B, A12, A2, C, K2] }
const LowerProgram = { name: 'Lower', workout: [E, F, G, H] }
const FullProgram = { name: 'FullBody', workout: [B, A12, A2, C, E, F, G, H, K2] }

export { FullProgram, UpperProgram, LowerProgram }
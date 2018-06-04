import Exercise from '../model/Exercise'

const B = Exercise.builder({ label: "B" })
const A12 = Exercise.builder({ label: "A12" })
const A2 = Exercise.builder({ label: "A2", over: 180 })
const C = Exercise.builder({ label: "C", over: 180 })
const E = Exercise.builder({ label: "E", double: true, over: 180 })
const F = Exercise.builder({ label: "F", nbSeries: 4, over: 180 })
const G = Exercise.builder({ label: "G", over: 120 })
const H = Exercise.builder({ label: "H", over: 60 })
const K2 = Exercise.builder({ label: "K2", nbSeries: 3, rest: 60 })

const UpperProgram = { name: 'Upper', workout: [B, A12, A2, C, K2] }
const LowerProgram = { name: 'Lower', workout: [E, F, G, H] }
const FullProgram = { name: 'FullBody', workout: [B, A12, A2, C, E, F, G, H, K2] }

export { FullProgram, UpperProgram, LowerProgram }
export default function format(seconds) {
    let minutes = parseInt(seconds / 60, 10)
    minutes = minutes > 0 ? `${minutes}'` : ''
    return `${minutes}${(seconds % 60).toString().padStart(2, 0)}''`
}
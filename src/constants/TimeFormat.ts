/**
 * Parsing function that converts seconds to {minutes}'{seconds}'' format
 * 
 * @param seconds : Amount of seconds to parse in {minutes}'{seconds}'' format
 */
export default function format(seconds: number) {
    const minutes = Math.floor(seconds / 60)
    return `${minutes > 0 ? `${minutes}'` : ''}${((seconds % 60).toString() as any).padStart(2, 0)}''`
}
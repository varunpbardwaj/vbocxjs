export default interface Donut {
    size: number,
    percent: number,
    theme?: string[],
    hidePercentText?: boolean,
    curvedEdge?: boolean,
    gradient?: string[]
}
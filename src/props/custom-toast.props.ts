export default interface CustomBanner {
    position?: string | number,
    message: string,
    timer?: number,
    backgroundColor: string,
    color: string,
    toastIcon?: any,
    closeIcon?: any,
    animate?: string
}
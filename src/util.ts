const logPrefix = '[reddit-action]: '

export const log = (message?: any, ...optionalParams: any[]) => {
  if (process.env.NODE_ENV !== 'production') {
    // tslint:disable-next-line
    console.log(
      `${logPrefix}${message}${optionalParams.length ? '\n' : ''}`,
      ...optionalParams,
    )
  }
}

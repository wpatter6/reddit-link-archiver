const logPrefix = '[reddit-archiver] '

export const log = (message?: string, ...optionalParams: any[]) => {
  if (process.env.NODE_ENV !== 'production') {
    // tslint:disable-next-line
    console.log(
      `${logPrefix}${message}${optionalParams.length ? '\n' : ''}`,
      ...optionalParams,
    )
  }
}

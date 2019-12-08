import ActionConnection from 'reddit-actions'
import getConfig from './config'
import { log } from './util'

const config = getConfig()
const connection = new ActionConnection(config.credentials)

connection.onSubmission(data => {
  log('submission', data)
}, config)

log('listening for posts that match filters...')

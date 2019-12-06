import getConfig from './config'
import connect from './connect'
import { log } from './util'

connect(getConfig())

log('listening for posts that match filters...')

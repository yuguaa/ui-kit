import theme from '../theme/blog-post'
import { moduleOptions } from '../module-options'
import { tv } from '../utils/tv'

export default tv({ extend: theme(moduleOptions) })

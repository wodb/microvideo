import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getPageTitle } from '@/utils/index'

NProgress.configure({ showSpinner: false })

// const whiteList = ['/login']

router.beforeEach(async(to, from, next) => {
  NProgress.start()

  document.title = getPageTitle(to.meta.title)

  next()
})

router.afterEach(() => {
  NProgress.done()
})

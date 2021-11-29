import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2e46b24a = () => interopDefault(import('../pages/businessplan.vue' /* webpackChunkName: "pages/businessplan" */))
const _238a86be = () => interopDefault(import('../pages/financialplan.vue' /* webpackChunkName: "pages/financialplan" */))
const _3b7bf3f6 = () => interopDefault(import('../pages/men.vue' /* webpackChunkName: "pages/men" */))
const _04a6c5fb = () => interopDefault(import('../pages/presentation.vue' /* webpackChunkName: "pages/presentation" */))
const _314071e0 = () => interopDefault(import('../pages/tests.vue' /* webpackChunkName: "pages/tests" */))
const _5bb44a6d = () => interopDefault(import('../pages/women.vue' /* webpackChunkName: "pages/women" */))
const _06ec3d7e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/businessplan",
    component: _2e46b24a,
    name: "businessplan"
  }, {
    path: "/financialplan",
    component: _238a86be,
    name: "financialplan"
  }, {
    path: "/men",
    component: _3b7bf3f6,
    name: "men"
  }, {
    path: "/presentation",
    component: _04a6c5fb,
    name: "presentation"
  }, {
    path: "/tests",
    component: _314071e0,
    name: "tests"
  }, {
    path: "/women",
    component: _5bb44a6d,
    name: "women"
  }, {
    path: "/",
    component: _06ec3d7e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3b7bf3f6 = () => interopDefault(import('../pages/men.vue' /* webpackChunkName: "pages/men" */))
const _2dbd3243 = () => interopDefault(import('../pages/ourVision.vue' /* webpackChunkName: "pages/ourVision" */))
const _04a6c5fb = () => interopDefault(import('../pages/presentation.vue' /* webpackChunkName: "pages/presentation" */))
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
    path: "/men",
    component: _3b7bf3f6,
    name: "men"
  }, {
    path: "/ourVision",
    component: _2dbd3243,
    name: "ourVision"
  }, {
    path: "/presentation",
    component: _04a6c5fb,
    name: "presentation"
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

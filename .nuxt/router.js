import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f9dec0b8 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _03e41af7 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _294bd2aa = () => interopDefault(import('../pages/policy.vue' /* webpackChunkName: "pages/policy" */))
const _4cc6389e = () => interopDefault(import('../pages/terms.vue' /* webpackChunkName: "pages/terms" */))
const _0f66956c = () => interopDefault(import('../pages/work.vue' /* webpackChunkName: "pages/work" */))
const _ba6f0b2e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _f9dec0b8,
    name: "about"
  }, {
    path: "/contact",
    component: _03e41af7,
    name: "contact"
  }, {
    path: "/policy",
    component: _294bd2aa,
    name: "policy"
  }, {
    path: "/terms",
    component: _4cc6389e,
    name: "terms"
  }, {
    path: "/work",
    component: _0f66956c,
    name: "work"
  }, {
    path: "/",
    component: _ba6f0b2e,
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

/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './pages/__root'
import { Route as ProtectedImport } from './pages/protected'

// Create Virtual Routes

const SigninLazyImport = createFileRoute('/signin')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const SigninLazyRoute = SigninLazyImport.update({
  path: '/signin',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./pages/signin.lazy').then((d) => d.Route))

const ProtectedRoute = ProtectedImport.update({
  path: '/protected',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./pages/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/protected': {
      id: '/protected'
      path: '/protected'
      fullPath: '/protected'
      preLoaderRoute: typeof ProtectedImport
      parentRoute: typeof rootRoute
    }
    '/signin': {
      id: '/signin'
      path: '/signin'
      fullPath: '/signin'
      preLoaderRoute: typeof SigninLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  ProtectedRoute,
  SigninLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/protected",
        "/signin"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/protected": {
      "filePath": "protected.tsx"
    },
    "/signin": {
      "filePath": "signin.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */

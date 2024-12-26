/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as MainImport } from './routes/main'

// Create Virtual Routes

const GedaLazyImport = createFileRoute('/geda')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const GedaLazyRoute = GedaLazyImport.update({
  id: '/geda',
  path: '/geda',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/geda.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const MainRoute = MainImport.update({
  id: '/main',
  path: '/main',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

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
    '/main': {
      id: '/main'
      path: '/main'
      fullPath: '/main'
      preLoaderRoute: typeof MainImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/geda': {
      id: '/geda'
      path: '/geda'
      fullPath: '/geda'
      preLoaderRoute: typeof GedaLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/main': typeof MainRoute
  '/about': typeof AboutLazyRoute
  '/geda': typeof GedaLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/main': typeof MainRoute
  '/about': typeof AboutLazyRoute
  '/geda': typeof GedaLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/main': typeof MainRoute
  '/about': typeof AboutLazyRoute
  '/geda': typeof GedaLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/main' | '/about' | '/geda'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/main' | '/about' | '/geda'
  id: '__root__' | '/' | '/main' | '/about' | '/geda'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  MainRoute: typeof MainRoute
  AboutLazyRoute: typeof AboutLazyRoute
  GedaLazyRoute: typeof GedaLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  MainRoute: MainRoute,
  AboutLazyRoute: AboutLazyRoute,
  GedaLazyRoute: GedaLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/main",
        "/about",
        "/geda"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/main": {
      "filePath": "main.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/geda": {
      "filePath": "geda.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */

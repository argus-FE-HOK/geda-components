import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import React, { Suspense } from 'react'


// This is a special case where we only want to load the devtools in development
const TanStackRouterDevtools = 
  process.env.NODE_ENV === 'production'
    ? () => null :
    React.lazy(() => import('@tanstack/router-devtools').then(m => ({ default: m.TanStackRouterDevtools })))

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/geda" className="[&.active]:font-bold">
          Geda
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
})
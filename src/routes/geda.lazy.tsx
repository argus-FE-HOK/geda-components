import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/geda')({
  component: Geda,
})

function Geda() {
  return <div className="p-2">Hello from Geda!</div>
}
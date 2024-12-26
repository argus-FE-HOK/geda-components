import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  console.log(process.env.NODE_ENV)
  return <div className="p-2">Hello from About!</div>
}
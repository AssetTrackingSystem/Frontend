import BaseLayout from '@/layouts/BaseLayout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_baseLayout')({
  component: BaseLayout,
})


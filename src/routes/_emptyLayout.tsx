import EmptyLayout from '@/layouts/EmptyLayout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_emptyLayout')({
  component: EmptyLayout,
})


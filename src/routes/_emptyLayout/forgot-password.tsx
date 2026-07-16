import ForgotPassword from '@/pages/ForgotPassword'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_emptyLayout/forgot-password')({
  component: ForgotPassword,
})


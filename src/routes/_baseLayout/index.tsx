import Landing from '@/pages/Landing';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/_baseLayout/")({
  component: Landing,
});


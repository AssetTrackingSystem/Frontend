import ResetPassword from "@/pages/ResetPassword";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_emptyLayout/reset-password")({
  component: ResetPassword,
});

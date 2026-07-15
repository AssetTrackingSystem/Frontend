import Login from "@/pages/Login";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_emptyLayout/login")({
  head: () => ({
    meta: [
      { title: "Sign in · Quantum.Data" },
      { name: "description", content: "Access your Quantum.Data portfolio terminal." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Login,
});

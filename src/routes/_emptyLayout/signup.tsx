import SignUp from "@/pages/SignUp";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_emptyLayout/signup")({
  head: () => ({
    meta: [
      { title: "Create account · Quantum.Data" },
      { name: "description", content: "Open a free Quantum.Data portfolio terminal account." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SignUp,
});

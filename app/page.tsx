// app/page.tsx
import { redirect } from "next/navigation";

export default function RootPage() {
  // Automatically redirect root `/` to `/home`
  redirect("/home");
}

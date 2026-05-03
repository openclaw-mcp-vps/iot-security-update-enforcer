import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IoT Security Update Enforcer — Force Updates, Block Threats",
  description: "Network-level tool that blocks IoT devices from internet access until they install pending security updates. Real-time monitoring, vulnerability scanning, automated enforcement."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="787ad831-824a-4833-b162-943c488e2e8b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

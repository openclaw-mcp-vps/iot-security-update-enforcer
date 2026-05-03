export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Cybersecurity · IoT Enforcement
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
          Force IoT Devices to Install<br />
          <span className="text-[#58a6ff]">Security Updates — Automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          IoT Security Update Enforcer scans your network for vulnerable devices and blocks their internet access via firewall rules until critical patches are applied. No more unpatched cameras, routers, or sensors sitting wide open.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Enforcing — $49/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🔍", title: "Real-Time Scanning", desc: "Continuously monitors every IoT device on your network for known CVEs and pending firmware updates." },
            { icon: "🚫", title: "Automatic Blocking", desc: "Pushes firewall rules to isolate non-compliant devices the moment a critical vulnerability is detected." },
            { icon: "✅", title: "Auto-Restore Access", desc: "Lifts blocks automatically once the device confirms the update is installed and verified." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <span className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest">Pro Plan</span>
          <div className="mt-4 mb-2">
            <span className="text-5xl font-extrabold text-white">$49</span>
            <span className="text-[#8b949e] ml-1">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Per organization. Unlimited devices.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited IoT device monitoring",
              "Automated firewall rule enforcement",
              "CVE & firmware vulnerability scanning",
              "Real-time dashboard & alerts",
              "Audit logs & compliance reports",
              "Email & Slack notifications",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Cancel anytime. 14-day money-back guarantee.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the network blocking actually work?",
              a: "The enforcer integrates with your existing firewall or managed switch via API (supports pfSense, OPNsense, Cisco, and Ubiquiti). When a device fails compliance, it pushes a rule to isolate that device to a quarantine VLAN with no outbound internet access until the update is confirmed."
            },
            {
              q: "Will blocking a device disrupt my operations?",
              a: "Blocking is scoped to internet egress only — local network communication remains intact by default. You can configure grace periods (e.g., 24–72 hours) before enforcement kicks in, and whitelist critical devices that require manual review."
            },
            {
              q: "What IoT devices and firmware sources are supported?",
              a: "We support 500+ device types including IP cameras, smart switches, NAS units, routers, and industrial sensors. Vulnerability data is pulled from the NVD, vendor security advisories, and our proprietary IoT CVE feed updated every 6 hours."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} IoT Security Update Enforcer. Built for IT teams who take security seriously.
      </footer>
    </main>
  );
}

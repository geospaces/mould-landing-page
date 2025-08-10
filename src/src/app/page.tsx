import Image from "next/image";

export default function Page() {
  return (
    <>
      {/* Header */}
      <header className="border-b">
        <div className="container-1440 px-20 py-5 flex items-center justify-between">
          <div className="text-xl font-semibold">GeoSpaces</div>
          <nav className="hidden md:flex items-center gap-10 text-sm text-gray-700">
            <a href="#mission" className="hover:underline">Mission</a>
            <a href="#insights" className="hover:underline">Insights</a>
            <a href="#how" className="hover:underline">How it works</a>
            <a href="#pricing" className="hover:underline">Packages</a>
            <a href="#faq" className="hover:underline">FAQ</a>
          </nav>
          <a href="#cta" className="btn btn-primary">Book a demo</a>
        </div>
      </header>

      {/* Hero */}
      <section className="section container-1440">
        <div className="grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 md:col-span-7">
            <div className="badge mb-4">Early Detection</div>
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-balance mb-5">
              Smart Sensors That Detect Damp & Mould Weeks Before It’s Visible
            </h1>
            <p className="text-lg text-gray-600 max-w-[52ch] mb-8">
              Proactive alerts and analytics help you fix the root cause before damage spreads. Reduce call-outs, improve tenant health, and save on repairs.
            </p>
            <div className="flex gap-4">
              <a className="btn btn-primary" href="#cta">Get Started</a>
              <a className="btn" href="#how">How it Works</a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="aspect-[4/3] rounded-[16px] border shadow-2 bg-white" />
          </div>
        </div>
      </section>

      {/* Mini icon row */}
      <section className="section-tight container-1440">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center text-sm text-gray-600">
          <div className="p-4 rounded-md border bg-white shadow-1">Wireless</div>
          <div className="p-4 rounded-md border bg-white shadow-1">Long Battery</div>
          <div className="p-4 rounded-md border bg-white shadow-1">Fast Install</div>
          <div className="p-4 rounded-md border bg-white shadow-1">Live Dashboard</div>
          <div className="p-4 rounded-md border bg-white shadow-1">Smart Alerts</div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="section section-subtle">
        <div className="container-1440">
          <div className="grid grid-cols-12 gap-10 items-start">
            <div className="col-span-12 md:col-span-8">
              <h2 className="text-3xl font-semibold mb-3">Our mission is simple</h2>
              <p className="text-gray-600 max-w-[65ch]">
                Stop damp and mould early by combining accurate sensors with meaningful insights. We surface the problems that matter, not noise, and guide you to fix them quickly.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="rounded-[12px] border bg-white p-6 shadow-1">
                <ul className="space-y-3 text-sm">
                  <li>• Reduce repairs & complaints</li>
                  <li>• Protect properties & tenants</li>
                  <li>• Evidence compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Law + images */}
      <section className="section container-1440">
        <div className="grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 md:col-span-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-[4/3] rounded-lg border bg-white shadow-1" />
              <div className="aspect-[4/3] rounded-lg border bg-white shadow-1" />
              <div className="aspect-[4/3] rounded-lg border bg-white shadow-1" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <h3 className="text-2xl font-semibold mb-3">Amanda’s Law</h3>
            <p className="text-gray-600 mb-4">
              New standards require action on damp and mould. Our system provides the data trail and prioritised actions to meet obligations with confidence.
            </p>
            <div className="flex gap-8 text-sm">
              <div><div className="text-2xl font-semibold text-[var(--color-accent)]">1 in 5</div><div className="text-gray-600">homes affected</div></div>
              <div><div className="text-2xl font-semibold">50%</div><div className="text-gray-600">less call-outs</div></div>
              <div><div className="text-2xl font-semibold">£5,100</div><div className="text-gray-600">avg. repair saved</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section id="insights" className="section section-subtle">
        <div className="container-1440 text-center">
          <h3 className="text-3xl font-semibold mb-6">Live Home Health Dashboard</h3>
          <p className="text-gray-600 max-w-[70ch] mx-auto mb-10">
            Monitor humidity, temperature and ventilation across your stock. Spot risk early. Plan interventions with evidence.
          </p>
          <div className="mx-auto max-w-5xl aspect-[16/9] rounded-xl border bg-white shadow-2 mb-8" />
          <a className="btn btn-primary" href="#cta">See it in action</a>
        </div>
      </section>

      {/* Case Study */}
      <section className="section container-1440">
        <div className="grid grid-cols-12 gap-10 items-start">
          <div className="col-span-12 md:col-span-5">
            <h3 className="text-2xl font-semibold mb-4">Case Study: Leech</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• 300% ROI within 12 months</li>
              <li>• 50% fewer emergency visits</li>
              <li>• Tenants report better air quality</li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="aspect-[4/3] rounded-xl border bg-white shadow-2" />
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="section section-subtle">
        <div className="container-1440">
          <h3 className="text-3xl font-semibold mb-10">Implementation: 8 Weeks to Protection</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Survey", "Install", "Monitor", "Act"].map((step, i) => (
              <div key={i} className="rounded-xl border bg-white p-6 shadow-1">
                <div className="text-sm text-gray-500 mb-2">Week {i+1}</div>
                <div className="font-semibold mb-1">{step}</div>
                <p className="text-sm text-gray-600">Short description of the step and expected outcome.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Approach */}
      <section className="section container-1440">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-6">
            <h3 className="text-2xl font-semibold mb-5">Key Benefits</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Prioritised risk by property</li>
              <li>• Evidence for compliance</li>
              <li>• Predictive maintenance</li>
              <li>• Healthier, happier tenants</li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6">
            <h3 className="text-2xl font-semibold mb-5">Evidence-based Approach</h3>
            <div className="rounded-xl border bg-white p-6 shadow-1">
              <ul className="space-y-3 text-gray-700">
                <li>• Sensors + context = insight</li>
                <li>• Root-cause analysis</li>
                <li>• Actionable recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="section section-subtle">
        <div className="container-1440 text-center">
          <h3 className="text-3xl font-semibold mb-6">How it Works — 3 Simple Steps</h3>
          <div className="mx-auto max-w-4xl aspect-[16/9] rounded-xl border bg-white shadow-1" />
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section container-1440">
        <h3 className="text-3xl font-semibold mb-10 text-center">Protection Packages</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Prevention", "Protect", "Pro"].map((name, i) => (
            <div key={i} className="rounded-2xl border bg-white p-6 shadow-1">
              <div className="text-lg font-semibold mb-1">{name}</div>
              <div className="text-3xl font-bold mb-4">£{[75, 150, 200][i]}<span className="text-base font-medium">/month</span></div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• Feature A</li>
                <li>• Feature B</li>
                <li>• Feature C</li>
              </ul>
              <a className="btn btn-primary w-full" href="#cta">Choose plan</a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-subtle">
        <div className="container-1440">
          <h3 className="text-3xl font-semibold mb-8">Real Users, Real Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Array.from({length:4}).map((_,i) => (
              <div key={i} className="rounded-xl border bg-white p-4 shadow-1">
                <div className="aspect-[4/3] rounded-lg bg-gray-100 mb-3" />
                <div className="text-sm text-gray-700">“Great results quickly.”</div>
                <div className="text-xs text-gray-500 mt-1">Name, Role</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section container-1440">
        <h3 className="text-3xl font-semibold mb-8">FAQs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {["How accurate are the sensors?","What’s the battery life?","How long does installation take?","Do you integrate with existing systems?"].map((q,i)=>(
            <div key={i} className="rounded-xl border bg-white p-6 shadow-1">
              <div className="font-medium mb-2">{q}</div>
              <div className="text-sm text-gray-600">Short answer explaining the detail.</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="section section-subtle">
        <div className="container-1440 text-center">
          <h3 className="text-3xl font-semibold mb-3">Protect Your Tenants Today</h3>
          <p className="text-gray-600 mb-6">Start with a pilot and see results within weeks.</p>
          <a className="btn btn-primary" href="#">Book a Demo</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ background: '#0f172a', color: 'white' }}>
        <div className="container-1440 px-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="font-semibold">GeoSpaces</div>
            <nav className="flex gap-6 text-sm text-white/80">
              <a href="#mission">Mission</a>
              <a href="#how">How it Works</a>
              <a href="#pricing">Packages</a>
              <a href="#faq">FAQ</a>
            </nav>
          </div>
          <div className="text-xs text-white/60 mt-6">© {new Date().getFullYear()} GeoSpaces. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}

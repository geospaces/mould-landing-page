import Container from "../components/Container";
import OverlayCompare from "../components/OverlayCompare";

export default function Page() {
  return (
    <>
      <OverlayCompare />

      {/* Header / Top Nav */}
      <header className="border-b">
        <Container>
          <div className="px-20 py-5 flex items-center justify-between text-sm">
            <nav className="flex items-center gap-8">
              <span className="font-semibold">GEOSPACES</span>
              <a href="#problem">Home</a>
              <a href="#problem">Problem</a>
              <a href="#solution">Solution</a>
              <a href="#proof">Proof</a>
            </nav>
            <div className="flex items-center gap-6">
              <a href="#cta" className="btn">Get Started</a>
              <a href="#" className="">Log in</a>
              <a href="#" className="btn btn-primary">Sign up</a>
            </div>
          </div>
        </Container>
      </header>

      {/* HERO */}
      <section className="section">
        <Container>
          <div className="grid grid-cols-12 gap-10 items-center">
            <div className="col-span-12 md:col-span-7">
              <div className="badge mb-4">Connected Complient</div>
              <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-balance mb-5">
                Smart Sensors That Detect Damp & Mould Weeks Before It&apos;s Visible
              </h1>
              <p className="text-lg text-gray-700 mb-6">See Problems Before They Start</p>
              <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                <span className="rounded-full border px-3 py-1">BB101</span>
                <span className="rounded-full border px-3 py-1">Housing Act 2004</span>
                <span className="rounded-full border px-3 py-1">Awaab’s Law</span>
                <span className="rounded-full border px-3 py-1">BS EN 16798-1</span>
                <span className="rounded-full border px-3 py-1">BS 5250</span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5">
              <div className="aspect-[4/3] rounded-xl border bg-white shadow-2" />
            </div>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section id="mission" className="section section-subtle">
        <Container>
          <div className="grid grid-cols-12 gap-10 items-start">
            <div className="col-span-12 md:col-span-7">
              <h2 className="text-3xl font-semibold mb-4">Our mission is simple</h2>
              <p className="text-gray-700 max-w-[70ch]">
                Turn building data into early warnings that prevent mould before it starts. With properties monitored 24/7 and zero Awaab&apos;s Law breaches.
              </p>
              <p className="text-gray-700 max-w-[70ch] mt-4">
                Awaab&apos;s Law changed everything. We&apos;re technologists who understand buildings and data, using modern science, IoT and analytics to prevent
                the devastating impact of damp and mould — not just on buildings, but on lives.
              </p>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["21 Days","Early Detection"],
                  ["Zero","Awaab&apos;s Law Breaches"],
                  ["24/7","monitoring"],
                  ["90%","Fewer Mould Incidents"],
                  ["£4,000","Saved Per Property"],
                ].map(([big,small],i)=>(
                  <div key={i} className="rounded-xl border bg-white p-5 shadow-1 text-center">
                    <div className="text-2xl font-semibold">{big}</div>
                    <div className="text-xs text-gray-600">{small}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Awaab's Law explainer */}
      <section className="section">
        <Container>
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-6">
              <h3 className="text-2xl font-semibold mb-3">Awaab&apos;s Law</h3>
              <p className="text-gray-700 mb-3">
                Isn&apos;t just another regulation — it&apos;s a fundamental shift in landlord responsibility. You have just 14 days from a complaint to investigate and fix damp and mould.
                For vulnerable residents, it&apos;s even faster. The penalties? Unlimited fines and criminal prosecution.
              </p>
              <p className="text-gray-700">
                But with GeoSpaces, you&apos;ll know about problems 21 days before they&apos;re visible, giving you time to prevent, not panic.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  ["Day 0","Complaint"],
                  ["Day 14","Investigation deadline"],
                  ["Day 15","Repairs — Cat 1 hazard"],
                  ["Day 21","Repairs — Cat 2 hazard"],
                ].map(([t,s],i)=>(
                  <div key={i} className="rounded-lg border bg-white p-4 shadow-1">
                    <div className="font-medium">{t}</div>
                    <div className="text-gray-600">{s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem stats */}
      <section id="problem" className="section section-subtle">
        <Container>
          <h3 className="text-3xl font-semibold mb-8">Why Traditional Methods Fail to Protect Tenants</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              ["1 in 5","social homes affected by damp"],
              ["50%","higher risk for children under 5 years old"],
              ["£5,100","average emergency repair cost"],
              ["300%","increase in legal actions since Awaab&apos;s Law"],
            ].map(([big,small],i)=>(
              <div key={i} className="rounded-xl border bg-white p-6 shadow-1">
                <div className="text-2xl font-bold">{big}</div>
                <div className="text-sm text-gray-600 mt-1">{small}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Example timeline */}
      <section className="section">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            {[
              ["Week 1","Tiny leak in bathroom — spores spreading"],
              ["Week 3","Tenant feels unwell"],
              ["Week 4","Black spots appear"],
              ["Week 6","Hazardous condition"],
              ["Week 8","Repair £7,000"],
              ["Week 12","Legal action initiated"],
            ].map(([title,desc],i)=>(
              <div key={i} className="rounded-xl border bg-white p-5 shadow-1">
                <div className="font-semibold mb-1">{title}</div>
                <div className="text-gray-600">{desc}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Cost savings */}
      <section id="proof" className="section section-subtle">
        <Container>
          <h3 className="text-3xl font-semibold mb-6">Cost Savings</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border bg-white p-6 shadow-1">
              <div className="font-semibold mb-2">Cost Per Incident</div>
              <div className="text-sm text-gray-700">Reactive £5,700</div>
              <div className="text-sm text-gray-700">Preventive £515</div>
              <div className="mt-2 text-sm font-medium">Savings: £5,185 (91%)</div>
            </div>
            <div className="rounded-xl border bg-white p-6 shadow-1">
              <div className="font-semibold mb-2">Before</div>
              <div className="text-sm text-gray-700">Day 1: Tenant complaint</div>
              <div className="text-sm text-gray-700">Day 14: Emergency repair</div>
            </div>
            <div className="rounded-xl border bg-white p-6 shadow-1">
              <div className="font-semibold mb-2">After</div>
              <div className="text-sm text-gray-700">Day -21: Early alert</div>
              <div className="text-sm text-gray-700">Day -14: Preventive fix</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features / How it works */}
      <section id="solution" className="section">
        <Container>
          <h3 className="text-3xl font-semibold mb-6">How It Works — 3 Simple Steps</h3>
        </Container>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ["Sensors","Install sensors & monitor continuously"],
              ["Prevention","Predict, verify, prevent"],
              ["Dashboard → Survey","Use the dashboard to prioritise, then survey & fix root cause"],
            ].map(([title,desc],i)=>(
              <div key={i} className="rounded-xl border bg-white p-6 shadow-1">
                <div className="font-semibold mb-2">{title}</div>
                <div className="text-sm text-gray-700">{desc}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Implementation 8 weeks */}
      <section className="section section-subtle">
        <Container>
          <h3 className="text-3xl font-semibold mb-8">Implementation: 8 Weeks to Protection</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              ["Week 1–2","ASSESS","Identify highest-risk properties and vulnerable residents. Map mould history and create a targeted deployment plan."],
              ["Week 3–4","DEPLOY","Install sensors in priority properties — 15 minutes per unit. Instant monitoring starts with children’s bedrooms first."],
              ["Week 5–6","DETECT","First alerts prevent mould before it starts. Fix small issues for £200 instead of £5,000 emergencies."],
              ["Week 7–8","PROTECTED","All high-risk properties monitored 24/7. You’re Awaab’s Law compliant and ready to expand."],
            ].map(([w,tag,desc],i)=>(
              <div key={i} className="rounded-xl border bg-white p-6 shadow-1">
                <div className="text-xs text-gray-500">{w}</div>
                <div className="font-semibold mb-1">{tag}</div>
                <div className="text-sm text-gray-700">{desc}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section">
        <Container>
          <h3 className="text-3xl font-semibold mb-10 text-center">Protection Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ["Starter","Sensors & monitoring, Mould alerts, Property ranking, Risk Map","£10/mth Per Device"],
              ["Scale","Starter Plan — Plus: Inspector Jobs app, Site Survey App, Weekly Reports, Weekly Support Package","£15/mth Per Device"],
              ["Predict","Starter Plan — Plus: Predictive Modelling, EPC Prioritisation, Unlimited individual data, Personalised + priority service","£20/mth Per Device"],
            ].map(([name,features,price],i)=>(
              <div key={i} className="rounded-2xl border bg-white p-6 shadow-1">
                <div className="text-lg font-semibold mb-1">{name}</div>
                <div className="text-2xl font-bold mb-3">{price}</div>
                <p className="text-sm text-gray-700 whitespace-pre-line">{features}</p>
                <a className="btn btn-primary mt-6" href="#cta">Choose plan</a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="section section-subtle">
        <Container>
          <h3 className="text-3xl font-semibold mb-8">Real Users, Real Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ["“85% fewer emergencies”","Rich Wilson","Housing Officer"],
              ["“The problem was fixed before we knew we had a leak”","Smith Family","Tenant Family"],
              ["“Finally, I can sleep”","Roger Smith","CEO"],
            ].map(([quote,name,role],i)=>(
              <div key={i} className="rounded-xl border bg-white p-6 shadow-1">
                <div className="text-sm text-gray-800">{quote}</div>
                <div className="text-xs text-gray-500 mt-2">{name} — {role}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section id="faq" className="section">
        <Container>
          <h3 className="text-3xl font-semibold mb-8">FAQs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ["How long do sensors last?","Our LoRaWAN sensors have a 10-year battery life with zero maintenance required. Once installed, they’ll monitor continuously."],
              ["Can I access data on my phone?","Yes. Real-time alerts, property status, and compliance reports on mobile and desktop."],
              ["What about Awaab’s Law compliance?","Timestamped audit trails and automated reports show continuous monitoring and 21-day early warnings to meet the 14-day deadline."],
              ["How quickly can we install?","15 minutes per property, 100+ per week, protected within 8 weeks."],
              ["Is tenant data secure?","Encrypted, GDPR compliant. We only collect temperature and humidity; access is role-based and auditable."],
              ["What’s the return on investment?","Most landlords save £4,000+ per property annually by preventing mould rather than remediating."],
            ].map(([q,a],i)=>(
              <div key={i} className="rounded-xl border bg-white p-6 shadow-1">
                <div className="font-medium mb-2">{q}</div>
                <div className="text-sm text-gray-700">{a}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section id="cta" className="section section-subtle">
        <Container>
          <div className="text-center">
            <h3 className="text-3xl font-semibold mb-3">Protect Your Tenants Today</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <a className="btn btn-primary" href="#">Get Free Risk Assessment</a>
              <a className="btn" href="#">Calculate Your Savings</a>
              <a className="btn" href="#">Start 30-Day Trial</a>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <Container>
          <div className="px-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm">
            <div className="font-semibold">GEOSPACES</div>
            <nav className="flex gap-6 text-gray-600">
              <a href="#problem">Problem</a>
              <a href="#solution">Solution</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">Help</a>
              <a href="#">Privacy</a>
            </nav>
          </div>
          <div className="px-20 text-xs text-gray-500 mt-6">© {new Date().getFullYear()} GeoSpaces. All rights reserved.</div>
        </Container>
      </footer>
    </>
  );
}

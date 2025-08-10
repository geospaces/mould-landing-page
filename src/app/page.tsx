import Container from "../components/Container";
import OverlayCompare from "../components/OverlayCompare";

export default function Page() {
  return (
    <>
      <OverlayCompare />
      <Container>
        <header className="px-8 py-6 flex items-center justify-between border-b">
          <div className="text-xl font-semibold">Brand</div>
          <nav className="flex gap-8">
            <a className="hover:underline" href="#">Link A</a>
            <a className="hover:underline" href="#">Link B</a>
            <a className="hover:underline" href="#">Link C</a>
          </nav>
        </header>

        <main className="px-8 py-16">
          <section className="grid grid-cols-12 gap-8">
            <div className="col-span-7">
              <h1 className="text-5xl leading-tight mb-6 text-balance">Your Hero Headline</h1>
              <p className="text-lg leading-relaxed max-w-prose mb-8">
                Replace this layout with your Figma export. Typography, spacing, and grid are tuned for 1440.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 rounded-lg bg-[var(--color-brand)] text-white shadow-1">Primary</button>
                <button className="px-6 py-3 rounded-lg border">Secondary</button>
              </div>
            </div>
            <div className="col-span-5">
              <div className="aspect-[4/3] rounded-xl border shadow-2" />
            </div>
          </section>
        </main>

        <footer className="px-8 py-10 border-t text-sm">
          © {new Date().getFullYear()} Your Company
        </footer>
      </Container>
    </>
  );
}

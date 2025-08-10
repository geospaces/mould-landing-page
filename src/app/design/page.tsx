export const metadata = { title: "Design System" };
import Container from "../../components/Container";
import OverlayCompare from "../../components/OverlayCompare";

const Color = ({ name, value }: { name: string, value: string }) => (
  <div className="p-4 rounded-xl border">
    <div className="w-full h-16 rounded-md mb-2" style={{ background: `var(${value})` }} />
    <div className="text-sm">{name}</div>
    <code className="text-xs opacity-70">{value}</code>
  </div>
);

export default function Design() {
  const spacers = Array.from({ length: 12 }, (_, i) => (i+1)*4);

  return (
    <>
      <OverlayCompare />
      <Container>
        <div className="px-8 py-10 space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <Color name="Background" value="--color-bg" />
              <Color name="Foreground" value="--color-fg" />
              <Color name="Brand" value="--color-brand" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Typography</h2>
            <div className="space-y-4">
              <div>
                <div className="text-xs uppercase opacity-60">Display</div>
                <div className="text-6xl tracking-tight">The quick brown fox</div>
              </div>
              <div>
                <div className="text-xs uppercase opacity-60">H1</div>
                <div className="text-4xl leading-snug">The quick brown fox</div>
              </div>
              <div>
                <div className="text-xs uppercase opacity-60">Body</div>
                <div className="text-base" style={{ lineHeight: "var(--lh-body)" }}>
                  The quick brown fox jumps over the lazy dog. 0123456789.
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Spacing scale (4px grid)</h2>
            <div className="flex flex-wrap gap-6">
              {spacers.map(s => (
                <div key={s} className="text-center">
                  <div className="rounded-md border bg-white shadow-1" style={{ width: 56, height: 56 }}>
                    <div className="mx-auto my-2 rounded" style={{ width: s, height: 8, background: 'black' }} />
                    <div className="text-xs">{s}px</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-lg bg-[var(--color-brand)] text-white shadow-1">Primary</button>
              <button className="px-6 py-3 rounded-lg border">Secondary</button>
              <button className="px-6 py-3 rounded-lg border bg-black text-white">Contrast</button>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}

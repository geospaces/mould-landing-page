# Figma Pixel-Perfect Next.js Starter (1440)

A minimal Next.js + Tailwind setup aimed at reproducing a 1440px Figma artboard *exactly*.

## Quick Start
```bash
pnpm i # or npm i / yarn
pnpm dev # http://localhost:3000
```

## Key Ideas
- **Container locked to 1440px** via `.container-1440` so layout matches the artboard 1:1.
- **CSS Variables** in `globals.css` for tokens — copy/paste values from Figma (colors, radii, shadows, type).
- **OverlayCompare** lets you drop a PNG/JPG export (1440 wide) on top of the live UI for pixel checking.
- **/design** route to verify tokens and spacing before building pages.

## Mapping tokens from Figma
1. In Figma Dev Mode, copy token values (color hex, radii px, shadow CSS) and paste into `:root` in `globals.css`.
2. Mirror the 4/8pt spacing in `tailwind.config.ts` under `theme.extend.spacing` if you need custom steps.
3. Import fonts (local or Google) and update `--font-sans` and any text styles to match line-height and tracking.

## Tips
- Export hero/section reference images at 1440 width from Figma and test with the overlay tool.
- Always check at browser zoom 100% and OS scaling 100% when verifying pixels.
- Use Flex/Grid with explicit `gap-*` values that match Figma's Auto Layout.

## Next Steps
- Replace `app/page.tsx` with the real layout.
- Add components under `src/components` and keep them token-driven.
- Create pages as needed; the container will stay at 1440 for desktop.

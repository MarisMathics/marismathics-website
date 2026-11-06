# MarisMathics website

The digital home of **MarisMathics — Making Math Fun**.

Built with Next.js, React/TypeScript and Tailwind CSS. Intended hosting: Vercel (domain marismathics.com via Cloudflare DNS).

## Structure

| Where | What |
|---|---|
| `app/page.tsx` | Homepage (Navigation, Hero, Worlds, Footer) |
| `app/layout.tsx` | Fonts (Montserrat, Libre Baskerville) and page title |
| `app/globals.css` | Brand colours and fonts as Tailwind tokens |
| `components/Worlds.tsx` | Texts, colours and previews of the three World cards |
| `components/WorldCard.tsx` | Layout of one World card |
| `components/Compass.tsx` | Round GO button |
| `components/ExploreCarousel.tsx` | Rotating images on the Explore Math card |
| `public/branding/` | Logo and brand graphics |
| `public/worlds/` | Previews per World (`btl`, `explore`, `more`) |

## Brand

- Turquoise `#19e0f8` · Light blue `#e8fafd` · Blue `#1376fd` · Dark blue `#1201a4`
- Tailwind classes: `bg-mm-dark`, `text-mm-turquoise`, `font-math`, …

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

# The Door's Family Hotel — Project Spec

Source of truth for rebuilding this site (currently static HTML/CSS/JS on GitHub Pages)
as a NestJS project. Everything below was extracted directly from the live
`index.html` / `css/style.css` / `js/main.js` on 2026-08-26 — nothing here is invented.

Where a fact needed for a "complete" spec (exact opening hours, real Google review
count) isn't present anywhere in the current site, it's called out explicitly under
**Known Gaps** rather than guessed.

---

## 0. Working Agreement (AI Assistant Rules)

- **Never run `git commit` or `git push` on your own initiative** — not even after a
  change is finished, built, and verified locally. Pushing to `master` also
  auto-deploys to production via GitHub Actions, so an unrequested push ships
  straight to the live site.
- Finish the change, build it, and verify it (typecheck, local dev server, static
  export, curl checks — whatever applies), then stop and report what changed and
  that it's ready. Wait for the user to explicitly ask for a commit and/or push.
- If the user says "commit" or "push" (or similar) without it being obvious the
  request already covers both steps, **ask for permission before running either
  command** rather than assuming — confirm scope (which files, commit vs. push vs.
  both) before acting.

## 1. Business Profile

| Field | Value |
|---|---|
| Name | The Door's Family Hotel |
| Type | Rock 'n' roll themed garden restaurant + bar (not overnight lodging, despite "Hotel" in the name — "cottages" are private outdoor dining nooks, not guest rooms) |
| Established | 2018 |
| Address | Hetauda - 5, Ranga Marg, Hetauda 44100, Nepal |
| Coordinates | 27.4175402, 85.0443936 |
| Phone / WhatsApp | +977 9864671482 |
| Price range | $$ |
| Cuisine | Nepali, Continental, Bar & Grill |
| Google Place CID | `0x39eb49602e945b3b:0x15b090b920ce9c3d` |
| Google Maps listing | 5.0 ★★★★★ (displayed on-site; underlying review count unknown — see Known Gaps) |
| Hours | "Open every day" / "Live music on weekends" — no specific opening/closing times published anywhere on the site |
| Facebook | https://www.facebook.com/share/1Dozy64Mpo/?mibextid=wwXIfr |
| Instagram | https://www.instagram.com/thedoorsfamilyhotel/ |
| TikTok | https://www.tiktok.com/@the_doors_family_hotel |
| WhatsApp deep link | https://wa.me/9779864671482 |
| Domain | thedoorsfamily.com.np (GitHub Pages origin, Cloudflare-proxied) |

**Brand identity:** named in tribute to classic rock acts (The Doors, Led Zeppelin,
Pink Floyd). On-site "Rock 'n' Roll Zone" with band art/memorabilia and an iconic red
telephone booth photo spot. Mascot: a lizard graphic ("the Lizard King" — Jim Morrison
reference), used as a recurring low-opacity background decoration across sections and
in the footer.

---

## 2. Site Structure (page sections, in order)

This structure is rendered twice: **`/`** (English, `lang="en"`) and **`/ne`** (Nepali,
`lang="ne"`) — same sections/order/images, translated copy and a Devanagari menu. There is
no language-switcher UI; `/ne` is reachable only by typing/linking the URL directly, and
each page carries an `hreflang` alternate pointing at the other (see §6).

1. **Nav** — fixed top bar: logo + wordmark, links to Rock 'n' Roll Zone / Beer Zone / About / Experience / Menu / Live Music / Events / Gallery / Guests / Team / Visit Us / Map. Mobile: hamburger toggle, slide-down menu.
2. **Sticky social rail** — fixed bottom-right, vertical stack: WhatsApp, Facebook, Instagram, TikTok. Auto-hides while the Menu section is in viewport (see §4).
3. **Hero** (`#home`) — full-viewport looping background video (falls back to a static image if `prefers-reduced-motion`), badge logo, quote ("Show me the way to the next whiskey bar"; Nepali page uses an adapted line, not a literal translation), tag line ("Outdoor Seating · Cozy Cottages · Live Music"), 3 CTAs: **View Menu** (`#menu`), **Rate Us** (Google review deep link), **Call Us** (`tel:`). The scroll-down arrow (`.hero-scroll`) points at whatever section comes right after Hero — currently `#rockzone` — keep it in sync if the lead section changes again.
4. **Rock 'n' Roll Zone** (`#rockzone`) — first section after Hero: intro copy + a "merch & memorabilia in partnership with [@riff_volt](https://www.instagram.com/riff_volt/)" credit badge, then a 5-photo auto-moving carousel with lightbox — real venue photos (`rockzone_exterior/sign/wall/pose/corner.jpg`): the kiosk lit up at night, the "ROCK 'N' ROLL ZONE" sign, the band-art-and-tee wall, a guest posing at it, and a quiet corner — same carousel component as Gallery (§10 below). Replaced an earlier placeholder set of stock-ish photos once real venue photos came in.
5. **Beer Zone** (`#beerzone`) — "The Beer Zone", right after Rock 'n' Roll Zone. **No badge logo** (removed — the badge is used on Hero/Live/footer but not here). Full-bleed background kiosk photo (`assets/img/beer_zone.jpg`) — fixed/parallax on desktop (`.live`'s pattern; `center top` position so the "BEER ZONE" sign near the top of the photo doesn't get cropped by a wide-short section), **static** `background-size:contain; background-position:center` (no crop, no motion) on mobile — see §4 for why this section deliberately never gets a moving background, unlike Live. On mobile the contained photo's sign sits *behind* the heading/paragraph text (measured: contained photo is ~293px tall, centered in a much taller section) — a known, accepted imperfection; a fix that gave the photo a dedicated top strip (extra `padding-top`) was tried and explicitly rejected as looking worse, so don't re-attempt that without being asked again. Plus a small gold-framed, slightly tilted video card (`.beerzone-clip`) of a draft pour looping at its own native 9:16 aspect ratio, sized down on mobile (`width:130px` vs desktop's `180px`) — autoplay-on-scroll like the Video Reel clips (not eager like the Hero). "Grab A Pint" CTA (`tel:`). Merch credit reads "Merch in partnership with @riff_volt" (not "Merch & memorabilia").
6. **About** (`#about`) — "A Rock 'n' Roll Garden": 3 paragraphs of brand story + one photo. Used to be the first section after Hero; moved after Rock 'n' Roll Zone + Beer Zone.
7. **Highlights** (`#highlights`) — "What Awaits You": 5 auto-rotating photo cards — Cozy Cottages, Live Music, Match Days on the Big Screen, Open-Air Dining, Large Parking. (Rock 'n' Roll Zone used to be a 6th card here; it's now its own section, see #4.)
8. **Menu** (`#menu`) — 3-tab switcher (Food / Café & Mocktails / Bar), full item+price listing (§3), download links for Food/Bar menu PDFs. Deep-linkable via `?menu=food|cafe|bar` + `#menu` (see §4).
9. **Live strip** (`#live`) — "Live Music Every Weekend", fixed-background (parallax) band photo — disabled on mobile via `background-attachment:scroll` since `fixed` is unreliably janky on mobile browsers — "Book a Table" CTA (`tel:`).
10. **Events** (`#events`) — "Events & Parties": New Year celebrations, birthdays, anniversaries, private parties; photo slider + "Plan Your Event" CTA (`tel:`).
11. **Gallery** (`#gallery`) — "Around The Garden": 9-photo auto-moving carousel with lightbox.
12. **Happy Guests** (`#guests`) — 6-photo auto-moving carousel, guest candids.
13. **Team** (`#team`) — 3-photo auto-moving carousel of staff + caption.
14. **Video Reel** (`#reel`) — 3 short looping vertical video clips (live stage, aerial night, neon rain), autoplay-on-scroll-into-view via IntersectionObserver.
15. **Visit Us** (`#visit`) — address / phone / hours summary in 3 columns + "Reserve Your Table" CTA.
16. **Location** (`#location`) — full-width embedded Google Map iframe with a floating Google-Maps-style info card (name, address, 5★ rating, open-in-maps / directions buttons).
17. **Footer** — logo lockup, name, quote (repeated), copyright line, small "Created & maintained by Ramesh Sharma" credit link (→ https://sharma-ramesh.com.np).

Section order has moved twice this session (Rock 'n' Roll Zone/Beer Zone went from after
Events, to right after About, to ahead of About entirely) — if it's likely to move again,
confirm the intended final order before re-numbering this list a third time.

**Page-load overlay** — a full-screen `#loader` (dark bg, live percentage counted off `document.images` load/error events) covers the page until the native `window.load` event fires, so nothing is visible mid-load. Applies to both `/` and `/ne`.

---

## 3. Menu Data

All prices in NPR. This is the full current menu content — the largest single chunk
of business data and the part most worth modeling as real backend records (rather
than hardcoded template content) in the NestJS rewrite, since prices/items change.

### 3.1 Food

**Starters**
| Item | Price |
|---|---|
| French Fries | 200 |
| Chilli Chips | 245 |
| Honey Chilli Potato | 275 |
| Kaju Fry | 295 |
| Veg Pakauda | 185 |
| Onion Garam Pakauda | 185 |
| Paneer Pakauda | 345 |
| Paneer Chilli | 345 |
| Sweet Corn Salt / Pepper | 195 / 245 |
| Boiled Veg | 245 |
| Onion Rings | 245 |
| Aloo Timmur / Thicheko Aloo | 195 |
| Aloo Jeera | 150 |
| Crispy Fried Chicken | 345 |
| Chicken Roast | 375 |
| Chicken Lollipop | 295 |
| Chicken Chilli | 345 |
| Chicken Drumstick | 295 |
| Chicken Tawa | 295 |
| Hot Wings | 375 |
| Buff Chilli | 345 |
| Buff Sukuti | 295 |
| Sausage (per plate) | 295 |

**Chowmein**
| Item | Price |
|---|---|
| Veg Chowmein | 165 |
| Egg Chowmein | 180 |
| Chicken / Buff Chowmein | 200 |
| Mix Chicken Chowmein | 275 |
| Mix Non-Veg Chowmein | 345 |

**Rice**
| Item | Price |
|---|---|
| Veg Fried Rice | 175 |
| Chicken / Buff Fried Rice | 245 |
| Egg Rice | 195 |
| Chicken Mix Fried Rice | 295 |
| Mix Non-Veg Fried Rice | 345 |

**Biryani**
| Item | Price |
|---|---|
| Veg Biryani | 345 |
| Egg Biryani | 395 |
| Chicken Biryani | 445 |

**Curry**
| Item | Price |
|---|---|
| Veg Mix Curry | 275 |
| Chicken Curry | 345 |

**Sadeko Items**
| Item | Price |
|---|---|
| Aloo Sadeko | 150 |
| Peanuts Sadeko | 150 |
| Bhatmas Sadeko | 150 |
| Sweet Corn Sadeko | 195 |
| Veg Momo Sadeko | 185 |
| Wai Wai Sadeko (Plain) | 145 |
| Wai Wai Sadeko (Buff / Chicken) | 245 |
| Chicken Boiled / Fried Sadeko | 345 |
| Chicken Momo Sadeko | 225 |
| Buff Sadeko | 295 |
| Buff Sadeko Momo | 225 |
| Sausage Sadeko | 195 |

**Breads**
| Item | Price |
|---|---|
| Tawa Roti | 30 |
| Aloo Paratha | 95 |
| Paneer Paratha | 145 |
| Cheese Aloo Paratha | 195 |
| Egg Paratha | 145 |
| Chicken Paratha | 225 |

**Egg Items**
| Item | Price |
|---|---|
| Plain Omelette (2 pcs) | 95 |
| Sunny Side Up (2 pcs) | 95 |
| Masala Omelette (2 pcs) | 115 |

**Burger**
| Item | Price |
|---|---|
| Veg Burger | 245 |
| Chicken Grilled Burger | 275 |
| Chicken Crunchy Burger | 295 |

**Rolls**
| Item | Price |
|---|---|
| Paneer Kathi Roll | 250 |
| Egg Roll | 195 |
| Chicken Kathi Roll | 275 |

**Choila Items**
| Item | Price |
|---|---|
| Veg Choila Pakauda | 245 |
| Paneer Choila | 295 |
| Chicken Choila | 295 |
| Buff Choila | 295 |

**Grilled Items**
| Item | Price |
|---|---|
| Veg Grill | 295 |
| Whole Grilled Fish | 600 |

**Combo & Khaja**
| Item | Price |
|---|---|
| Mo:Mo Platter (Veg) | 275 |
| Mo:Mo Platter (Chicken / Buff) | 325 |
| Door's Combo Set (Chicken) | 595 |
| Veg Khaja Set | 350 |
| Chicken Khaja Set | 450 |
| Chicken Tawa Set | 345 |
| Buff Khaja Set | 400 |

**Mo:Mo** (Type × Style pricing grid)
| Type | Steam | Jhol | Fry | Kothey | Choila | Chilli | C | Crunchy |
|---|---|---|---|---|---|---|---|---|
| Veg | 120 | 140 | 145 | 175 | 180 | 185 | 185 | 195 |
| Chicken | 160 | 175 | 185 | 195 | 195 | 225 | 225 | 245 |
| Buff | 160 | 175 | 185 | 195 | 195 | 225 | 225 | 245 |

### 3.2 Café & Mocktails

**Refreshing Drinks**
| Item | Price |
|---|---|
| Mint Lime Refresher | 95 |
| Lemon Soda | 95 |
| Lemon Water | 75 |

**Lemonade**
| Item | Price |
|---|---|
| Mint Lemonade | 160 |
| Plain Lemonade | 125 |
| Watermelon Lemonade | 175 |

**Mojito**
| Item | Price |
|---|---|
| Virgin Mojito | 245 |
| Watermelon Mojito | 275 |
| Red Bull Mojito | 275 |

**Angels**
| Item | Price |
|---|---|
| Red Angel | 245 |
| Blue Angel | 245 |

**Mocktails**
| Item | Price |
|---|---|
| Sunset | 245 |
| Sunrise | 245 |
| Black Ocean Sea | 245 |

**Cold Drinks**
| Item | Price |
|---|---|
| Coke / Masala | 80 / 120 |
| Sprite / Masala / Lemon | 80 / 120 |
| Fanta | 80 |
| Real Juice | 150 |

**Coffee & Tea**
| Item | Price |
|---|---|
| Milk Tea | 50 |
| Black Tea / Masala | 30 / 35 |
| Lemon Tea | 35 |
| Hot Lemon (Sugar) | 65 |
| Hot Lemon (Honey-Ginger) | 125 |
| Peach Tea | 85 |
| Peach Ice Tea | 145 |
| Lemon Ice Tea | 95 |
| Hot Chocolate | 225 |

**Milk Shakes**
| Item | Price |
|---|---|
| Chocolate Milk Shake | 245 |

**Lassi**
| Item | Price |
|---|---|
| Plain Lassi | 120 |
| Sweet Lassi | 140 |
| Chocolate Lassi | 160 |

**Hookah**
| Item | Price |
|---|---|
| Mint Hookah | 500 |

### 3.3 Bar

**Shots**
| Item | Price |
|---|---|
| Jägermeister | 450 |
| Jägerbomb | 600 |
| Tequila | 575 |

**Cocktails**
| Item | Price |
|---|---|
| Vodka Mojito | 595 |
| Hot Rum Punch | 450 |
| Sunset Cocktail | 625 |
| Sunrise Cocktail | 625 |
| Black Ocean Sea Cocktail | 595 |

**Wine**
| Item | Price |
|---|---|
| Big Master (Red / White) | 1,400 |
| J.P. Chenet (R / W) | 3,100 |
| Robertson | 2,600 |

**Beer**
| Item | Price |
|---|---|
| Gorkha | 475 |
| Tuborg | 575 |
| Barahsinghe Pilsner | 575 |
| Barahsinghe Hazy | 600 |
| Barahsinghe Draught (Pilsner) per 🍺 | 400 |
| Carlsberg | 675 |

**Vodka** (Label × pour size)
| Label | 30 ml | 60 ml | 90 ml | 180 ml | Half | Full |
|---|---|---|---|---|---|---|
| 8848 | 145 | 290 | 435 | 850 | 1,700 | 3,400 |
| Absolut Vodka | 335 | 670 | 1,000 | 2,000 | 4,000 | 10,000 (1L) |

**Whiskey** (Label × pour size)
| Label | 30 ml | 60 ml | 90 ml | 180 ml | Half | Full |
|---|---|---|---|---|---|---|
| Old Durbar | 175 | 350 | 525 | 1,050 | 2,100 | 4,200 |
| Old Durbar Black | 200 | 400 | 600 | 1,200 | 2,400 | 4,800 |
| Himalayan Reserve | 200 | 400 | 600 | 1,200 | 2,400 | 4,800 |
| Jack Daniel's | 400 | 800 | 1,190 | 2,375 | 4,750 | 9,500 |
| Black Label | 425 | 850 | 1,250 | 2,500 | 5,000 | 10,000 |
| Double Black Label | 485 | 970 | 1,450 | 2,900 | 5,800 | 14,500 |

Footer note under the menu: *"All prices in NPR. Please drink responsibly."*
Downloadable PDFs also exist: `assets/menu/food_menu.pdf`, `assets/menu/bar_menu.pdf`, `assets/menu/menu_cover.pdf`.

---

## 4. Interactive Features (functional spec)

- **Menu tabs** — 3 buttons (Food default-active / Café / Bar) toggle `.active` on matching button + panel. Clicking a tab sets `?menu=<key>` in the URL via `history.replaceState` (no reload/navigation).
- **Menu deep-linking** — On page load, reads `?menu=food|cafe|bar` from the query string and activates that tab. If the URL also lacks `#menu` in the hash, JS scrolls to the menu section itself once the page has fully loaded (`window.load` + `requestAnimationFrame`), because on mobile a same-tick `scrollIntoView()` can land off-target if images/video are still reflowing the layout. QR codes encode the hash directly (`?menu=food#menu`) so the browser's native anchor-scroll handles it before JS even runs, which is more reliable on mobile than the JS fallback.
- **Query-string cleanup** — Any in-page anchor click *other than* the menu tabs strips `?menu=...` back off the URL via `history.replaceState`, so it doesn't linger into unrelated sections (e.g. `?menu=food#about`).
- **Sticky social rail visibility** — `IntersectionObserver` on the `#menu` section toggles an `.is-hidden` class on the rail (opacity 0, `pointer-events:none`) whenever `#menu` is in view, because in its bottom-right position it would otherwise sit on top of the mobile price list.
- **Mobile nav** — hamburger button toggles `.open` on the nav-links list; any link click closes it again.
- **Lightbox** — clicking any gallery/carousel image opens a full-screen overlay with that image; closes on click-anywhere or `Escape`.
- **Card sliders** (Highlights cards) — each card cycles through 2–3 photos automatically every 3.8s, with dot indicators.
- **Auto-moving carousels** (Gallery / Rock 'n' Roll Zone / Happy Guests / Team) — generic carousel component: 1/2/3 visible slides depending on viewport width and a `v2`/`v3` modifier class, auto-advances every 3.5s, pauses on pointer-hover, dot navigation, recalculates on window resize.
- **Video reel autoplay** — the hero video, the Beer Zone video, and the reel/team clips each `play()` independently once ≥40% visible in viewport (`IntersectionObserver`), and `pause()` when scrolled away — avoids autoplaying offscreen video. (No cross-video concurrency cap — tried once for a suspected mobile decode-stutter issue, reverted because it made a multi-video grid like the reel only ever play one clip at a time.) The hero video also has the HTML `autoplay` attribute (plays immediately on load); Beer Zone doesn't, so it only starts once scrolled into view.
- **Background-video-over-photo layering** (Hero only) — the CSS background photo is the instant-paint layer, the `<video>` sits on top at full opacity once it loads, and a separate real overlay element (not a `::before`) handles the dark dimming — a pseudo-element painting *before* the video in DOM order would render underneath it, not over it. Giving the video partial opacity (rather than keeping it fully opaque) lets the photo bleed through and double-expose with it. Beer Zone tried this same pattern first (full-bleed video over the kiosk photo) and hit exactly that double-exposure bug, but the deeper problem was that a 9:16 clip force-cropped to cover a wide landscape strip was also too zoomed in to read — so it moved to a different pattern entirely: fixed-background photo (`.live`'s treatment) plus a small separate video card sized to its own native aspect ratio (§2 #5), not the video-over-photo layering.
- **Mobile parallax** (`.parallax-img`, Live only — see below for why Beer Zone doesn't get it) — `background-attachment:fixed` is disabled below 720px (mobile browsers render it janky/unreliably, the reason it was already off there before this existed). Below 720px, a real `<img class="parallax-img">` (oversized to 120% height, `object-fit:cover`) takes over instead, and `main.js` translates it via `transform: translate3d(0, npx, 0)` on scroll (rAF-throttled, skips offscreen sections) — `transform` stays on the compositor thread and doesn't repaint every frame the way animating `background-position` would. Desktop is untouched (plain CSS `background-attachment:fixed`, `.parallax-img` stays `display:none`). Stacking needs explicit `z-index` on all three layers (`.parallax-img`:1, the section's `::before` dark overlay:2, `.section-inner`:3) — a `::before` pseudo-element paints *before* real DOM children by default regardless of source order, so without this the overlay would render invisibly underneath the image instead of dimming it.
- **Beer Zone's background is static on mobile — deliberately, permanently, don't re-add `.parallax-img` to it.** Two different moving treatments were tried and both were reverted after actually looking wrong on screen: (1) plain `.parallax-img` (`object-fit:cover`) zoomed in far enough that the "BEER ZONE" sign board — the photo's dominant subject — rendered oversized and overlapping the badge/heading; (2) a stretch-based variant (`width:100%; height:135%; object-fit:fill`, zero side crop, mild vertical stretch instead) fixed *that* problem, but a moving photo with its own readable sign text will always eventually drift underneath the static overlaid heading text at some scroll position regardless of how the crop/stretch is tuned — that's a structural conflict between "background has its own text" and "moves under overlaid text," not a tuning problem. `background-size:contain` (see §2 #5) is the stable, final answer: nothing moves, so the sign and the heading never collide, at any scroll position. Live's photo has no such competing text, so its `.parallax-img` motion stays.
- **Lesson, still worth restating** — for any section whose photo has text/signage as the dominant subject, take an actual screenshot at a real mobile viewport before trusting a crop/zoom/stretch treatment, and check it at more than one scroll position (including the scroll-range extremes, where a parallax buffer is most likely to run out and reveal a gap). Do this *before* calling the work done, not after the user reports it's still broken.
- **Smooth/inertial scroll** — [Lenis](https://github.com/darkroomengineering/lenis) (vendored at `public/js/vendor/lenis.min.js`, no npm dependency since the site has no JS bundler), `new Lenis({ anchors: true, autoRaf: true })`. Native `scroll-behavior` is set to `auto` (not `smooth`) so it doesn't race Lenis for the same scroll target; the one place that scrolls programmatically (`?menu=` deep-link) calls `lenis.scrollTo()` instead of `scrollIntoView`, falling back to native scroll if the vendor script fails to load.
- **Cache-busting** — CSS/JS are loaded with a `?v=YYYYMMDD[letter]` query string (`site.assetVersion`) that's bumped on each deploy, so CDN/browser caches don't serve stale assets after an update. Bump it any time `style.css`/`main.js` content changes.

---

## 5. External Integrations / Links

| Purpose | Link pattern |
|---|---|
| Call | `tel:+9779864671482` |
| WhatsApp | `https://wa.me/9779864671482` |
| Rock 'n' Roll Zone merch/memorabilia partner | `https://www.instagram.com/riff_volt/` (@riff_volt) |
| Rate Us (opens Google's review composer directly) | `https://www.google.com/maps/place/THE+DOOR%27S+FAMILY+HOTEL/data=!4m3!3m2!1s0x39eb49602e945b3b:0x15b090b920ce9c3d!12e1` — note this is Google's `writeAReviewUri` pattern using the raw hex **CID**, not a `ChIJ`-format Place ID; `search.google.com/local/writereview?placeid=` 404s with this business's CID format. |
| View on Maps | `https://www.google.com/maps/place/THE+DOOR'S+FAMILY+HOTEL/@27.4175072,85.0443358,20.93z/data=!4m6!3m5!1s0x39eb49602e945b3b:0x15b090b920ce9c3d!8m2!3d27.4175402!4d85.0443936!16s%2Fg%2F11p13j2p6m` |
| Directions | `https://www.google.com/maps/dir/?api=1&destination=27.4175402,85.0443936` |
| Embedded map | `https://maps.google.com/maps?q=27.4175402,85.0443936&z=16&output=embed` |

**Printable QR codes** (NOT embedded on the site itself — standalone print assets, gitignored from the repo): three separate codes for Food/Café/Bar, each themed with an illustrated icon frame (chef hat / coffee cup / cocktail glass) and a centered logo, encoding `https://thedoorsfamily.com.np/?menu=food#menu` (and `cafe`/`bar` variants).

---

## 6. SEO / Metadata

- **Title:** "The Door's Family Hotel — Hetauda | Live Music, Cozy Cottages, Food & Bar"
- **Meta description, keywords, geo tags** (`geo.region=NP-P3`, `geo.placename=Hetauda`, `geo.position`, `ICBM`) — targets Hetauda local search broadly (not Google-only: robots/canonical/hreflang written to be crawler-agnostic for Bing, Yandex, Baidu, DuckDuckGo, Applebot, etc.)
- **Open Graph** (`og:type=restaurant.restaurant`, title, description, image 1200×630, url, locale) + **Twitter Card** (`summary_large_image`).
- **Favicons:** multi-size PNG set + `.ico` + Apple touch icon + Android chrome icons + web manifest + MS tile meta.
- **JSON-LD structured data** (`@type: ["Restaurant","BarOrPub"]`) — name, image, url, inLanguage, telephone, servesCuisine, priceRange, address, geo, hasMap, sameAs (FB/IG/TikTok), amenityFeature (Live Music, Outdoor Seating, Parking, Cottages).
  - **Known incomplete vs. actual site content** (flagged in a prior review, not yet applied): missing `foundingDate` (site says "Est. 2018" three times), missing `hasMenu` (site has full on-page menu + PDF downloads), missing `acceptsReservations` (site has explicit "Reserve Your Table"/"Book a Table" CTAs), `amenityFeature` list omits "Big Screen / Match Day Screening" and "Hookah" even though both have dedicated content on the page.
- **robots.txt:** `Allow: /` for all user-agents + sitemap reference.
- **sitemap.xml:** two URL entries (`/` and `/ne`) with `<lastmod>`.
- **hreflang:** each page declares `<link rel="alternate" hreflang="en|ne" href=...>` plus `x-default` → `/`, so search engines can offer the right language — pure `<head>` metadata, no visible switcher UI on either page.
- **Google Search Console verification:** `<meta name="google-site-verification" content="Cdy23THu17vkId4RkwVTrE0BJL-8b6ixW_9ujOP7bYk">` hardcoded in both `views/index.hbs` and `views/index-ne.hbs` (HTML-tag method, resource `https://thedoorsfamily.com.np/`). Don't remove it even after verification succeeds — Search Console re-checks it stays present to keep ownership verified.

---

## 7. Design System

**Identity:** vintage rock 'n' roll — dark stage backgrounds + aged-paper light sections.

**Color tokens** (CSS custom properties):
| Token | Value | Use |
|---|---|---|
| `--ink` | `#16120d` | primary dark / text |
| `--ink-soft` | `#241d15` | card backgrounds on dark sections |
| `--paper` | `#efe6d3` | light background / light text-on-dark |
| `--paper-2` | `#e6dbc4` | secondary light background |
| `--red` | `#8e2318` | accent / solid CTA |
| `--gold` | `#c8a86a` | accent, hover states |
| `--muted` | `#bfb49d` | secondary text on dark |

**Typography** (self-hosted `.woff2`, `font-display:swap`):
- **Cinzel** (600/700) — all-caps display type: nav, buttons, section titles, menu category headers, prices.
- **IM Fell English** (400, italic) — quotes, story copy accents.
- **Cormorant Garamond** (500/600) — body text, menu item names.

**Layout conventions:** `max-width:1180px` centered content column, generous section padding (`5rem` desktop / `3.4rem` mobile), thin bordered/outlined photo frames (double border + offset outline) as a recurring motif, low-opacity rotated lizard-mascot decorations layered behind section content, dotted-leader price rows (classic menu typesetting), animated conic-gradient rotating border on the active/hovered menu tab.

**Responsive breakpoints:** 900px (tablet: multi-col grids collapse to 2 or 1 col), 720px (mobile: nav becomes hamburger, tabs go full-width, tables become horizontally scrollable), 400px (brand wordmark hides, CTA buttons stack full-width).

**Buttons:** outlined by default (`border:1.6px solid var(--paper)`), invert to filled on hover; `.solid` variant is red-filled by default (primary CTA); `.dark-btn` variant for light-background sections.

---

## 8. Asset Inventory

| Folder | Contents |
|---|---|
| `assets/img/` | 39 photos (garden/cottages, stage/live music, events, gallery candids, guests, team, parking, Rock 'n' Roll Zone, Beer Zone, misc brand moments) |
| `assets/video/` | 6 clips: `hero_garden.mp4` (hero bg), `clip_live.mp4`, `clip_aerial.mp4`, `clip_neon.mp4` (reel), `team_intro.mp4` (Team carousel), `clip_beer.mp4` (Beer Zone bg) |
| `assets/logo/` | Brand badge, lizard mascot (2 color variants), full favicon set (16/32/48/96/180/192/512), plain logo files |
| `assets/icons/` | `facebook.svg`, `instagram.svg`, `tiktok.svg`, `whatsapp.svg` — all `viewBox="0 0 24 24"`, `fill="#efe6d3"`, used only by the sticky social rail (footer no longer duplicates these) |
| `assets/fonts/` | Cinzel 600/700, Cormorant Garamond 500/600, IM Fell English 400 — all `.woff2` (Latin only). Plus one Devanagari variable `.woff2` (Noto Serif Devanagari) registered under the *same* three family names via `unicode-range`, so `/ne` picks the right glyphs per-character automatically, including mixed Latin+Devanagari text. `/ne` also resets `letter-spacing` to normal site-wide — the site's wide small-caps tracking visually breaks Devanagari conjunct clusters. |
| `assets/menu/` | `food_menu.pdf`, `bar_menu.pdf`, `menu_cover.pdf` — user-downloadable |
| `assets/qr/` | 3 printable QR codes (gitignored, not deployed as part of the site — see §5) |

---

## 9. Known Gaps (cannot be filled from current site content — need real data from the owner)

1. **Exact opening/closing hours** — only "Open every day" is published; no `openingHoursSpecification` possible without real hours.
2. **Real aggregate review count** for `aggregateRating` — the 5★ rating shown in the map card isn't backed by a review count anywhere on-site; don't fabricate one.
3. **No dedicated events calendar/data** — Events section is evergreen marketing copy, not a structured list of actual upcoming dates.

---

## 10. Current Implementation Notes

The NestJS rewrite this section used to plan for is done — this is now how it's built:

- **Routing:** `AppController` has two routes, `GET /` → `views/index.hbs` (`SITE` from `src/content/site.config.ts`) and `GET /ne` → `views/index-ne.hbs` (`SITE_NE` from `src/content/site.ne.config.ts`). `MenuService.getPanels(locale)` switches between `menu.data.ts` (English) and `menu.ne.data.ts` (Nepali) — the menu did become data-driven records as planned, one file per locale rather than a DB table (no admin/editing need has come up yet).
- **Static export:** `scripts/export-static.ts` boots the Nest app, fetches every route in its `ROUTES` array (currently `['/', '/ne']`) over HTTP, writes each to a flat `docs/*.html` file, then copies `public/` alongside — because the deployed site (GitHub Pages) is plain static files. **Adding a new locale or page means adding its route to both `AppController` and `ROUTES`.**
- **Dev loop:** `npm run dev` (`ts-node -T src/main.ts`) serves everything live on `:3000`, including `public/` assets directly — CSS/JS edits show up on refresh, no restart needed; `.ts`/`.hbs` changes need the dev server restarted. `npm run build:static` produces the same `docs/` output the live site ships.
- The deep-link contract (`?menu=<key>#menu`) is still depended on externally by the three printed QR codes already in circulation — preserved exactly as the old static site had it.
- The Google review CID link (§5) and WhatsApp link are still hardcoded business identifiers in `site.config.ts`, reused as-is in `site.ne.config.ts` (`contact`/`social` fields aren't re-declared per locale, just imported from the English config) — they don't change by language.

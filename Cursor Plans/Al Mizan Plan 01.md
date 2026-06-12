Al Mizan Landing Page: Go-Live Fix Plan

Context

Static bilingual (Arabic-default RTL / English) single-page site for an Oman money-transfer company. Stack: index.html, styles.css, script.js. Language is swapped via a data-key dictionary in JS that also toggles dir on <body>/<html>.

Scope decisions: content stays as demo (no real assets needed — placeholders must look intentional, not broken); plan stored in Cursor only; add a real, modern, animated About section.

Technical Approach





Keep the vanilla HTML/CSS/JS architecture (no framework). 



Fix structural CSS bugs first so layout is sane, then complete the missing rules, then layer in the About section + animations, then do a dedicated RTL + responsive + go-live pass.



All new CSS must be authored RTL-aware (prefer logical properties like margin-inline-start, padding-inline, inset-inline-start over left/right) to avoid the brittle body[dir="rtl"] override sprawl that currently exists.



Replace broken [IMAGE] placeholders with styled placeholder blocks (CSS gradients + inline SVG / labels) so the demo looks complete without real assets.

Phase 1 - Critical structural fixes





Hero overlay bug: #hero currently has class background-overlay which is position:absolute (styles.css:144-151), pulling the hero out of flow. Make the overlay a separate layer: keep #hero as a normal position:relative flex section and apply the dark overlay via #hero::before (absolutely positioned inside hero). Update index.html:118 accordingly. Replace the invalid url('[IMAGE_PLACEHOLDER: Hero Background]') (styles.css:135) with a brand gradient (teal -> charcoal) as the demo hero background.



FOUC / initial direction: set <body dir="rtl" lang="ar"> directly in index.html:97 (matching <html dir="rtl">) and remove the unused/misleading ltr-mode class. This makes RTL rules apply before JS runs.



Cyclic CSS variable bug: in body[dir="rtl"] (styles.css:438-439) replace --font-heading: 'Cairo', var(--font-heading) / --font-body: 'Cairo', var(--font-body) (self-referencing -> invalid) with concrete stacks, e.g. --font-heading: 'Cairo', sans-serif.



Font loading: either load Montserrat in the Google Fonts link (index.html:48) or change --font-heading (styles.css:13) to a font that is actually imported (Inter/Cairo). Pick one and make heading font consistent.



Fix .sub-headline color (styles.css:169) from near-black #1a1401 to a light color readable on the dark hero.

Phase 2 - Complete the missing/unfinished CSS

Add the rules for classes referenced in HTML but absent from CSS (the stylesheet has an explicit unfinished-paste note at styles.css:426-427):





Stats section: .stats-grid (responsive grid), .stat-item, .stat-number (large brand-colored), .stat-label.



.subtitle (muted intro paragraph under H2s), .hero-cta-group and .cta-group (flex, gap, wrap, centered), base .logo and .lang-switcher styles.



.bg-primary-teal, .portfolio-view-btn spacing, and a distinct green .whatsapp-btn.



Fix .icon (styles.css:217-224) so it is a centered circular badge, not a full-width teal bar.



Replace broken portfolio/problem-solution image placeholders (index.html:206,231-247) with styled placeholder blocks (gradient + label) and add meaningful alt text.

Phase 3 - New About section + modern animated design





Add a real <section id="about"> (fixes broken #about nav/footer links at index.html:106,283) placed logically (e.g. after Stats or Problem/Solution). Content: company story / mission / Oman-focused trust points, consistent with the money-transfer brand and existing demo copy. Add matching data-key entries (EN + AR) to contentMap in script.js.



Modern + animated polish (CSS-first, performance-friendly):





Scroll-reveal animations via IntersectionObserver in script.js adding an .in-view class (fade/slide-up). Respect @media (prefers-reduced-motion: reduce).



Smooth hover/transition refinements on cards, buttons, stats; animated count-up for stat numbers (optional, JS).



Sticky-header subtle shadow/scroll state.



Ensure all new markup/animations work in both dir modes (animate translate using logical/transform that is direction-agnostic).

Phase 4 - RTL/Arabic correctness + responsiveness





Audit RTL: replace ad-hoc body[dir="rtl"] margin/!important overrides (styles.css:454-484) with logical properties where feasible; verify nav (logo at start), trust bar, problem/solution row-reverse, footer alignment in Arabic.



Mobile: add a proper hamburger toggle for .nav-links (JS + CSS) instead of relying on flex-wrap; verify stats/services/portfolio/footer grids and the new About section at <=768px and <=480px in both languages.



script.js fixes: correct the Twitter meta branch (script.js:259-265) so twitter:title/twitter:description localize (use the attribute value, not the literal string 'name'); persist language choice in localStorage and read it on load (default Arabic if unset).

Phase 5 - Go-live polish & QA





Demo contact consistency: keep demo phone/WhatsApp/email but ensure links are well-formed and consistent across hero, final CTA, and footer; provide a single place/comment to swap real values later. Add a real social/OG/structured-data note (logo ./logo.png referenced in JSON-LD at index.html:58 is missing -> use the inline SVG favicon or add a placeholder asset).



Accessibility: alt text on all images, focus states on interactive elements, aria-labels on icon links, color-contrast check.



Final QA checklist: toggle EN/AR, reload persistence, mobile/desktop layout, no console errors, no broken anchors/images, Lighthouse pass.

Risks





RTL refactor to logical properties can shift existing layout; do it incrementally and verify both languages after each change.



Count-up / scroll animations must honor prefers-reduced-motion and not block render.



Demo placeholders must be visually intentional so the page does not look broken at go-live.


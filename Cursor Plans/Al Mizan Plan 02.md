Problem
The services grid uses grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) 1. Inside the 1200px container this fits 3 columns, so the 4 .service-cards render as 3 in row 1 + 1 in row 2. Goal: exactly 2 cards per row (2x2) on desktop/tablet, gracefully collapsing on small screens.

Relevant markup: 4 .service-card elements inside .service-grid in index.html (Services section). No HTML changes are required.

Phase 1 - Force 2 columns (desktop/tablet default)
In #services .service-grid 1, replace:
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
with: grid-template-columns: repeat(2, 1fr);
Keep display: grid; and gap: 40px;.
Result: 4 cards become a balanced 2x2 grid on screens wide enough for the container.
Phase 2 - Responsive breakpoints
Tablet (existing @media (max-width: 768px) block, styles.css:773-833): keep 2 columns (each card stays comfortably wide at this size) but reduce crowding by adding #services .service-grid { gap: 24px; }.
Phone: add a single-column rule so cards do not get cramped. Add a new @media (max-width: 600px) rule (or extend the existing @media (max-width: 480px) block at styles.css:835-840) with #services .service-grid { grid-template-columns: 1fr; }.
Large screens: no change needed; the 1200px .container keeps the 2-column cards a sensible width.
Phase 3 - QA across all sizes and both languages
Verify the 2x2 layout at desktop (>=1024px), tablet (768px), and the single-column stack on phones (<=600px and 480px).
Confirm equal card heights, consistent gaps, and that the hover lift + scroll-reveal animations on .service-card still work.
Test in both Arabic (RTL) and English (LTR) via the language switcher to confirm the grid stays symmetric in both directions (grid columns are direction-agnostic, so this should hold).
Check there is no leftover/orphan card and no horizontal scrollbar at any width.
Notes
Pure CSS change; no edits to index.html or script.js.
repeat(2, 1fr) (not auto-fit) is the key change that guarantees exactly two per row regardless of card min-width.
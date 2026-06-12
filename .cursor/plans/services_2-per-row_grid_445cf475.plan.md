---
name: Services 2-Per-Row Grid
overview: "Change the #services grid from the current auto-fit layout (3 cards in row 1, 1 card in row 2) to a fixed 2-cards-per-row layout, and make it responsive across all screen sizes."
todos:
  - id: grid-2col
    content: "In #services .service-grid (styles.css:445-449), change grid-template-columns from repeat(auto-fit, minmax(300px, 1fr)) to repeat(2, 1fr); keep gap: 40px."
    status: pending
  - id: responsive
    content: "Add responsive rules: in @media (max-width:768px) reduce #services .service-grid gap to 24px (keep 2 cols); add a <=600px (or extend <=480px) rule setting #services .service-grid to grid-template-columns: 1fr (single column)."
    status: pending
  - id: qa
    content: "QA the 2x2 layout at desktop/tablet/phone widths in both Arabic (RTL) and English (LTR): equal card heights, consistent gaps, working hover/reveal animations, no orphan card or horizontal scroll."
    status: pending
isProject: false
---


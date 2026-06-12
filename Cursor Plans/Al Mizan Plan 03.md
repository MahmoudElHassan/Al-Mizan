Reorder Navbar to Match Section Order

Problem

The navbar link order does not follow the page's section (scroll) order.





Actual section order in index.html: #hero -> #stats (line 153) -> #about (line 177) -> #services (line 213) -> #problem-solution (line 248) -> #portfolio (line 269) -> #contact (line 302).



Current navbar order (index.html:113-117): Services (#services) -> Stats (#stats) -> Portfolio (#portfolio) -> About (#about) -> Contact (#contact).

So the nav jumps around instead of matching the natural scroll flow. This is a pure markup reordering; no CSS or JS (data-key) changes are needed since each link already has its correct text and key.

Phase 1 - Reorder navbar links





In .nav-links (index.html:113-117), reorder the five <a> elements to match the on-page section order:





<a href="#stats" data-key="nav_stats"> (أرقامنا)



<a href="#about" data-key="nav_about"> (من نحن)



<a href="#services" data-key="nav_services"> (الخدمات)



<a href="#portfolio" data-key="nav_portfolio"> (أعمالنا)



<a href="#contact" data-key="nav_contact"> (تواصل معنا)



Keep each anchor's existing href, data-key, and text intact - only the line order changes.

Phase 2 - Align footer Quick Links (consistency)





In the footer Quick Links list (index.html:326-329), apply the same order for consistency: About (#about) -> Services (#services) -> Portfolio (#portfolio) -> Contact (#contact). (Stats is currently not in the footer; leave it out unless you want it added.)

Phase 3 - QA





Verify in both Arabic (RTL) and English (LTR) that the nav reads in the correct order (right-to-left in Arabic, left-to-right in English) and each link scrolls to the matching section.



Confirm no broken anchors and that the mobile hamburger menu shows the same new order.

Notes





#problem-solution has no nav link by design; this plan does not add one (leave as-is unless requested).



No changes to styles.css or script.js are required.


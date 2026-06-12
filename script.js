// ============================================================
// Al Mizan Modern Investment — Bilingual Landing Page
// SEO-optimized Arabic + English content for Omani money transfer
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    const langSwitcher = document.getElementById('lang-switcher');
    const bodyTag = document.body;
    let currentLang = 'ar'; // Default: Arabic (RTL) for Omani audience

    // --- 📚 LANGUAGE CONTENT DICTIONARY ---
    // Every data-key in index.html has matching EN + AR entries.
    // Keywords are embedded naturally for Google SEO (EN + AR).
    const contentMap = {
        // --- <head> / <title> ---
        site_title: {
            en: "Al Mizan Modern Investment | Best Money Transfer & Exchange Rates in Oman",
            ar: "الميزان العصري للاستثمار | أفضل تحويلات مالية وأسعار صرف في عُمان"
        },
        meta_description: {
            en: "Al Mizan Modern Investment offers the cheapest international money transfers from Oman with the best exchange rates. Send money to India, Philippines, Pakistan, Bangladesh, Egypt & more. Licensed by the Central Bank of Oman.",
            ar: "الميزان العصري للاستثمار — أرخص أسعار تحويلات الأموال من عُمان بأفضل أسعار الصرف. حوّل إلى الهند والفلبين وباكستان وبنغلاديش ومصر والمزيد. مرخصة من البنك المركزي العُماني."
        },
        og_title: {
            en: "Al Mizan Modern Investment | Best Money Transfer & Exchange Rates in Oman",
            ar: "الميزان العصري للاستثمار | أفضل تحويلات مالية وأسعار صرف في عُمان"
        },
        og_description: {
            en: "Send money abroad from Oman with the lowest fees and best exchange rates. Licensed by the Central Bank of Oman. Trusted by 100,000+ customers across 50+ countries.",
            ar: "أرسل أموالك للخارج من عُمان بأقل الرسوم وأفضل سعر صرف. مرخصة من البنك المركزي العُماني. يثق بنا أكثر من 100,000 عميل في 50+ دولة."
        },
        twitter_title: {
            en: "Al Mizan Modern Investment | Best Money Transfer in Oman",
            ar: "الميزان العصري للاستثمار | أفضل تحويلات مالية في عُمان"
        },
        twitter_description: {
            en: "Cheapest international money transfers from Oman. Best OMR exchange rates. Licensed by the Central Bank of Oman.",
            ar: "أرخص تحويلات مالية دولية من عُمان. أفضل أسعار صرف للريال العُماني. مرخصة من البنك المركزي العُماني."
        },

        // --- Language Switcher Button ---
        lang_switcher_text: {
            en: "العربية / English",
            ar: "English / العربية"
        },

        // --- Navigation ---
        nav_services:  { en: "Services",  ar: "الخدمات" },
        nav_stats:     { en: "Our Numbers", ar: "أرقامنا" },
        nav_portfolio: { en: "Portfolio", ar: "أعمالنا" },
        nav_about:     { en: "About Us",  ar: "من نحن" },
        nav_contact:   { en: "Contact",   ar: "تواصل معنا" },

        // --- Hero ---
        hero_headline: {
            en: "Send Money Abroad from Oman at the Best Exchange Rate & Lowest Fees",
            ar: "أرسل أموالك للخارج من عُمان بأفضل سعر صرف وأقل رسوم"
        },
        hero_subtitle: {
            en: "Al Mizan Modern Investment — international & local remittances, currency exchange, and corporate payment solutions. Licensed by the Central Bank of Oman.",
            ar: "الميزان العصري للاستثمار — خدمات تحويلات مالية دولية ومحلية، صرف عملات، وتحويلات الشركات. مرخصة من البنك المركزي العُماني."
        },
        hero_cta_primary: {
            en: "Start Your Transfer Now",
            ar: "ابدأ تحويلك الآن"
        },
        hero_cta_secondary: {
            en: "Get a Free Consultation →",
            ar: "احصل على استشارة مجانية ←"
        },

        // --- Trust Bar ---
        trust_text: {
            en: "Trusted by leaders and residents across the Sultanate of Oman:",
            ar: "موثوق بنا من قِبل رواد الأعمال والمقيمين في سلطنة عُمان:"
        },
        client_a: { en: "Central Bank of Oman",         ar: "البنك المركزي العُماني" },
        client_b: { en: "Oman Chamber of Commerce",     ar: "غُرفة تجارة عُمان" },
        client_c: { en: "Bank Muscat",                  ar: "بنك مسقط" },
        client_d: { en: "Capital Market Authority",     ar: "الهيئة العامة لسوق المال" },

        // --- Stats Strip ---
        stat_transactions: { en: "10,000+",  ar: "+10,000" },
        stat_transactions_label: { en: "Daily Transfers",       ar: "تحويلة يومياً" },
        stat_countries:    { en: "50+",      ar: "+50" },
        stat_countries_label:    { en: "Destination Countries", ar: "دولة وجهة" },
        stat_customers:    { en: "100K+",    ar: "+100K" },
        stat_customers_label:    { en: "Happy Customers",       ar: "عميل سعيد" },
        stat_rating:       { en: "4.9★",     ar: "4.9★" },
        stat_rating_label:       { en: "Customer Rating",      ar: "تقييم العملاء" },

        // --- About Section ---
        about_heading: {
            en: "About Al Mizan",
            ar: "من نحن"
        },
        about_lead: {
            en: "A leading Omani company in money-transfer and currency-exchange solutions, founded in 2015 to serve individuals and businesses across the Sultanate of Oman.",
            ar: "شركة عُمانية رائدة في حلول التحويلات المالية وصرف العملات، تأسست عام 2015 لخدمة الأفراد والشركات في سلطنة عُمان."
        },
        about_paragraph1: {
            en: "We started in Muscat with a clear vision: fast, secure remittance services and competitive exchange rates that meet the needs of Omani citizens and residents alike. Today, we serve over 100,000 customers and remit to 50+ destinations worldwide.",
            ar: "انطلقنا من مسقط برؤية واضحة: تقديم خدمات تحويل أموال سريعة، آمنة، وبأسعار صرف تنافسية تلبي احتياجات الجالية العُمانية والمقيمين على حدٍ سواء. اليوم، نخدم أكثر من 100,000 عميل ونُحوّل إلى أكثر من 50 وجهة حول العالم."
        },
        about_paragraph2: {
            en: "We operate under the supervision of the Central Bank of Oman and adhere to the highest AML/CFT compliance standards to ensure your money is always in safe hands.",
            ar: "نعمل تحت إشراف البنك المركزي العُماني، ونلتزم بأعلى معايير الامتثال ومكافحة غسل الأموال (AML/CFT) لنضمن أن أموالك في أيدٍ أمينة."
        },
        about_value1_title: {
            en: "Licensed & Trusted",
            ar: "مرخصة وموثوقة"
        },
        about_value1_text: {
            en: "Licensed by the Central Bank of Oman, fully committed to the highest security and compliance standards.",
            ar: "مرخصة من البنك المركزي العُماني، مع التزام كامل بأعلى معايير الأمان والامتثال."
        },
        about_value2_title: {
            en: "Fast Execution",
            ar: "سرعة في التنفيذ"
        },
        about_value2_text: {
            en: "Most transfers complete within minutes thanks to our extensive global partner network.",
            ar: "معظم التحويلات تكتمل في دقائق بفضل شبكتنا الواسعة من الشركاء العالميين."
        },
        about_value3_title: {
            en: "Transparent Pricing",
            ar: "أسعار شفافة"
        },
        about_value3_text: {
            en: "No hidden fees. Best exchange rates in the Omani market with competitive transfer fees.",
            ar: "لا رسوم خفية. أفضل أسعار صرف في السوق العُماني ورسوم تنافسية."
        },
        about_value4_title: {
            en: "Local Support 24/7",
            ar: "دعم محلي 24/7"
        },
        about_value4_text: {
            en: "A dedicated support team fluent in Arabic and English, available by phone or WhatsApp anytime.",
            ar: "فريق دعم يتحدث العربية والإنجليزية لمساعدتك في أي وقت عبر الهاتف أو واتساب."
        },

        // --- Services ---
        service_heading: {
            en: "Money Transfer Services in Oman",
            ar: "خدمات تحويل الأموال في عُمان"
        },
        service_subtitle: {
            en: "End-to-end solutions for individuals and businesses — international and local remittances, currency exchange, and corporate banking services at the best rates.",
            ar: "نوفر حلولاً متكاملة للأفراد والشركات — تحويلات دولية ومحلية، صرف عملات، وخدمات مصرفية للشركات بأفضل الأسعار."
        },
        service_intl_title: {
            en: "International Money Transfers",
            ar: "تحويلات مالية دولية"
        },
        service_intl_text: {
            en: "Send money safely and quickly to India, Philippines, Pakistan, Bangladesh, Egypt, Jordan and 50+ other countries at the best exchange rate and lowest fees in Oman.",
            ar: "حوّل أموالك بأمان وسرعة إلى الهند والفلبين وباكستان وبنغلاديش ومصر والأردن و50+ دولة أخرى بأفضل سعر صرف وأقل رسوم."
        },
        service_local_title: {
            en: "Local Transfers Across Oman",
            ar: "تحويلات داخل سلطنة عُمان"
        },
        service_local_text: {
            en: "Instant transfers between bank accounts and e-wallets across all governorates of the Sultanate, with support for every Omani bank.",
            ar: "تحويلات فورية بين الحسابات البنكية والمحافظ الإلكترونية في جميع محافظات السلطنة، مع دعم جميع البنوك العُمانية."
        },
        service_corp_title: {
            en: "Corporate & Business Transfers",
            ar: "تحويلات الشركات والأعمال"
        },
        service_corp_text: {
            en: "Tailored B2B payment solutions — international supplier invoices, payroll, and commercial payments with competitive exchange rates.",
            ar: "حلول دفع مخصصة للشركات وB2B، فواتير الموردين الدوليين، الرواتب، والمدفوعات التجارية مع أسعار صرف تنافسية."
        },
        service_fx_title: {
            en: "Currency Exchange & Forex",
            ar: "صرف العملات والصرافة"
        },
        service_fx_text: {
            en: "Competitive rates for Omani Rial, US Dollar, Euro, British Pound, Indian Rupee and more. Live rate updates throughout the day.",
            ar: "أسعار صرف تنافسية للريال العُماني والدولار الأمريكي واليورو والجنيه الإسترليني والروبية الهندية وغيرها. تحديث الأسعار لحظياً."
        },

        // --- Problem / Solution ---
        problem_solution_heading: {
            en: "Best Exchange Rates in Oman with Transparent Fees",
            ar: "أفضل أسعار صرف في عُمان برسوم شفافة"
        },
        problem_solution_text: {
            en: "Oman's remittance market is fast-growing and demands a partner who understands both the local market and global standards. At Al Mizan Modern Investment, we offer competitive exchange rates and lower fees than traditional banks — fully licensed by the Central Bank of Oman.",
            ar: "سوق التحويلات المالية في عُمان سريع النمو ويتطلب شريكاً يفهم السوق المحلي والمعايير العالمية. نحن في الميزان العصري نوفر لك أسعار صرف تنافسية ورسوماً منخفضة مقارنة بالبنوك التقليدية، مع ترخيص رسمي من البنك المركزي العُماني."
        },
        methodology_heading: {
            en: "Why Al Mizan?",
            ar: "لماذا الميزان؟"
        },
        approach_list: {
            en: "approach_list_en",
            ar: "approach_list_ar"
        },
        approach_item1: {
            en: "✅ Best exchange rate in the Omani market",
            ar: "✅ أفضل سعر صرف في السوق العُماني"
        },
        approach_item2: {
            en: "✅ Low, transparent fees with no hidden charges",
            ar: "✅ رسوم منخفضة وشفافة بدون مفاجآت"
        },
        approach_item3: {
            en: "✅ Fast execution to global standards",
            ar: "✅ تنفيذ سريع وفق المعايير العالمية"
        },
        approach_item4: {
            en: "✅ Licensed by the Central Bank of Oman",
            ar: "✅ مرخصة من البنك المركزي العُماني"
        },
        learn_methodology_cta: {
            en: "Learn More About Our Methodology",
            ar: "اعرف المزيد عن منهجيتنا"
        },

        // --- Portfolio ---
        portfolio_heading: {
            en: "Success Stories from Oman to the World",
            ar: "قصص نجاح من عُمان إلى العالم"
        },
        portfolio_subtitle: {
            en: "Discover how we serve individuals and businesses across Oman with cutting-edge financial solutions.",
            ar: "اكتشف كيف نخدم الأفراد والشركات في عُمان بأحدث الحلول المالية."
        },
        project_fig1: { en: "Muscat–Mumbai Remittance Corridor",  ar: "ممر مسقط–مومباي للتحويلات" },
        project_cat1: { en: "International Transfers",           ar: "تحويلات دولية" },
        project_fig2: { en: "Salalah Remittance Hub",            ar: "مركز تحويلات صلالة" },
        project_cat2: { en: "Local Branches",                    ar: "فروع محلية" },
        project_fig3: { en: "Cairo Express Channel",             ar: "قناة القاهرة السريعة" },
        project_cat3: { en: "Egypt Transfers",                   ar: "تحويلات مصر" },
        project_fig4: { en: "Dhaka Bank Wire Service",           ar: "خدمة دكا للتحويلات البنكية" },
        project_cat4: { en: "Bangladesh Transfers",              ar: "تحويلات بنغلاديش" },
        view_all_projects_cta: {
            en: "View All Projects",
            ar: "شاهد جميع المشاريع"
        },

        // --- Final CTA ---
        final_cta_heading: {
            en: "Ready to transfer money at the best rate in Oman?",
            ar: "هل أنت مستعد لتحويل أموالك بأفضل سعر في عُمان؟"
        },
        final_cta_text: {
            en: "Let's discuss how our services can give you the best exchange rate and lowest fees — whether sending money inside Oman or anywhere in the world.",
            ar: "دعنا نناقش كيف يمكن لخدماتنا أن توفر لك أفضل سعر صرف وأقل رسوم لتحويل أموالك داخل عُمان أو إلى أي مكان في العالم."
        },
        consultation_cta: {
            en: "Schedule Your Free Consultation",
            ar: "احجز استشارتك المجانية"
        },
        whatsapp_cta: {
            en: "Chat on WhatsApp",
            ar: "تواصل عبر واتساب"
        },

        // --- Footer ---
        company_logo:  { en: "[Al Mizan Logo]", ar: "[شعار الميزان]" },
        company_name: {
            en: "Al Mizan Modern Investment",
            ar: "الميزان العصري للاستثمار"
        },
        company_mission: {
            en: "Pioneers in money transfers and currency exchange in the Sultanate of Oman since 2015. Licensed by the Central Bank of Oman.",
            ar: "رواد التحويلات المالية وصرف العملات في سلطنة عُمان منذ عام 2015. مرخصة من البنك المركزي العُماني."
        },
        company_address: {
            en: "📍 Al Khuwair, Muscat, Sultanate of Oman",
            ar: "📍 الخوير، مسقط، سلطنة عُمان"
        },
        quick_links_title: { en: "Quick Links",        ar: "روابط سريعة" },
        link_service_name:  { en: "Services",          ar: "خدماتنا" },
        link_portfolio:     { en: "Portfolio",         ar: "أعمالنا" },
        link_about:         { en: "About Us",          ar: "من نحن" },
        link_contact:       { en: "Contact Us",        ar: "تواصل معنا" },
        contact_title:      { en: "Contact Us",        ar: "تواصل معنا" },
        company_email:      { en: "📧 info@almizan.om",            ar: "info@almizan.om 📧" },
        company_phone:      { en: "📞 +968 2412 3456",            ar: "+968 2412 3456 📞" },
        company_whatsapp:   { en: "💬 WhatsApp: +968 2412 3456",  ar: "💬 واتساب: +968 2412 3456" },
        follow_us_title:    { en: "Follow Us",         ar: "تابعنا" },
        copyright_text: {
            en: "© 2026 Al Mizan Modern Investment. All Rights Reserved.",
            ar: "© 2026 الميزان العصري للاستثمار. جميع الحقوق محفوظة."
        }
    };

    /**
     * Updates all text content on the page based on the current language.
     * @param {string} lang - 'en' or 'ar'.
     */
    function updateContent(lang) {
        const elementsToUpdate = document.querySelectorAll('[data-key]');
        elementsToUpdate.forEach(el => {
            const key = el.getAttribute('data-key');
            if (!contentMap[key] || !contentMap[key][lang]) return;

            // <title> tag (lives in <head>, special-case it)
            if (key === 'site_title') {
                document.title = contentMap[key][lang];
                return;
            }

            // <meta> tags — update via attribute
            if (el.tagName === 'META') {
                // Twitter cards use `name="twitter:..."`, OG uses `property="og:..."`,
                // description uses `name="description"`. Read whichever attribute is
                // actually present and match against that value (not the literal "name").
                const ogProp = el.getAttribute('property');
                const nameAttr = el.getAttribute('name');
                const isOg = ogProp && ogProp.startsWith('og:');
                const isTwitter = nameAttr && nameAttr.startsWith('twitter:');
                const isDescription = nameAttr === 'description';

                if (isOg || isTwitter || isDescription) {
                    el.setAttribute('content', contentMap[key][lang]);
                }
                return;
            }

            // <button> / <input> — set text directly
            if (el.tagName === 'INPUT' || el.tagName === 'BUTTON') {
                el.textContent = contentMap[key][lang];
                return;
            }

            // Everything else — replace inner HTML
            el.innerHTML = contentMap[key][lang];
        });

        // 1. Update document directionality & language
        bodyTag.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        bodyTag.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', lang);

        // 2. Refresh the language switcher button text
        if (langSwitcher) {
            langSwitcher.textContent = contentMap['lang_switcher_text'][lang];
        }

        currentLang = lang;
    }

    // --- 🖱️ EVENT LISTENERS & INITIALIZATION ---

    if (langSwitcher) {
        langSwitcher.addEventListener('click', () => {
            const nextLang = currentLang === 'en' ? 'ar' : 'en';
            updateContent(nextLang);
            // Persist the choice so future visits honor it
            try { localStorage.setItem('almizan_lang', nextLang); } catch (e) { /* storage unavailable */ }
        });
    }

    // Initial load: Arabic (RTL) is the default for the Omani audience.
    // Honor a previously saved language choice if present.
    const savedLang = (() => {
        try { return localStorage.getItem('almizan_lang'); } catch (e) { return null; }
    })();
    updateContent(savedLang === 'en' ? 'en' : 'ar');

    // --- 📱 HAMBURGER MENU (mobile nav toggle) ---
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
        // Close menu after clicking a nav link (mobile UX)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // --- 🎯 SCROLL-REVEAL ANIMATIONS ---
    // Add an .in-view class to .reveal elements when they enter the viewport.
    // Respects prefers-reduced-motion (in that case, reveal immediately).
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const revealTargets = document.querySelectorAll(
        '.service-card, .stat-item, .project-card, .value-card, .content-block, .image-block, #about .about-text, .final-cta .contact-content'
    );
    revealTargets.forEach(el => el.classList.add('reveal'));

    if (motionQuery.matches || !('IntersectionObserver' in window)) {
        // Reduced motion OR no IO support → show everything immediately
        revealTargets.forEach(el => el.classList.add('in-view'));
    } else {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        revealTargets.forEach(el => observer.observe(el));
    }

    // --- 🔢 ANIMATED COUNT-UP for .stat-number ---
    // Only numbers (with optional +, K, M, ★) are animated; text stays static.
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateCount = (el) => {
        const original = el.textContent.trim();
        // Skip if it's not primarily numeric (e.g. "4.9★")
        const match = original.match(/^([\d,.]+)(.*)$/);
        if (!match) return;
        const targetNumStr = match[1];
        const suffix = match[2] || '';
        const target = parseFloat(targetNumStr.replace(/,/g, ''));
        if (isNaN(target)) return;

        const hasDecimal = targetNumStr.includes('.');
        const duration = 1400;
        const start = performance.now();

        const step = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
            const current = target * eased;
            let display;
            if (hasDecimal) display = current.toFixed(1);
            else display = Math.floor(current).toLocaleString();
            el.textContent = display + suffix;
            if (t < 1) requestAnimationFrame(step);
            else el.textContent = original; // restore exact original at the end
        };
        requestAnimationFrame(step);
    };

    if (!motionQuery.matches && 'IntersectionObserver' in window) {
        const countObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCount(entry.target);
                    countObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        statNumbers.forEach(el => countObserver.observe(el));
    }

    // --- 📌 STICKY HEADER scroll state ---
    const navbar = document.getElementById('navbar');
    if (navbar) {
        const onScroll = () => {
            if (window.scrollY > 12) navbar.classList.add('scrolled');
            else navbar.classList.remove('scrolled');
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }
});

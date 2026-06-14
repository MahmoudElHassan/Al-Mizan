// ============================================================
// Al Mizan Modern Investment — Bilingual Landing Page
// Arabic (default, RTL) / English. Legal debt-collection firm.
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
    const STORAGE_KEY = 'almizan_lang';
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reduceMotion = motionQuery.matches;

    // ------------------------------------------------------------
    // 📚 LANGUAGE CONTENT DICTIONARY
    // Every data-key in index.html has matching EN + AR entries.
    // ------------------------------------------------------------
    const contentMap = {
        // --- <head> ---
        site_title: {
            ar: "الميزان العصري للاستثمار | شركة تحصيل ديون معتمدة في سلطنة عُمان — الأفراد، الشركات والبنوك",
            en: "Al Mizan Modern Investment | Licensed Debt Collection Agency in Oman — Individuals, Corporates & Banks"
        },
        meta_description: {
            ar: "الميزان العصري للاستثمار شركة عُمانية رائدة في تحصيل الديون. نقدم خدمات احترافية لتحصيل ديون الأفراد والشركات والبنوك وشركات التمويل، بالطرق الرضائية ثم القانونية، وبمعايير سرية تامة وامتثال كامل. مكتبنا في مسقط، الخوير.",
            en: "Al Mizan Modern Investment is Oman's leading debt collection agency. We recover outstanding debts for individuals, corporates, banks, and finance companies — first amicably, then legally — under strict confidentiality and full regulatory compliance. Muscat, Al Khuwair."
        },
        og_title: {
            ar: "الميزان العصري للاستثمار | شركة تحصيل ديون معتمدة في سلطنة عُمان",
            en: "Al Mizan Modern Investment | Licensed Debt Collection Agency in Oman"
        },
        og_description: {
            ar: "الميزان العصري للاستثمار شركة عُمانية رائدة في تحصيل الديون للأفراد والشركات والبنوك، بالطرق الرضائية ثم القانونية، وبمعايير سرية تامة وامتثال كامل.",
            en: "Al Mizan Modern Investment is Oman's leading debt collection agency. We recover outstanding debts for individuals, corporates, banks, and finance companies — amicably first, then legally — under strict confidentiality and full regulatory compliance."
        },
        twitter_title: {
            ar: "الميزان العصري للاستثمار | تحصيل ديون معتمد في عُمان",
            en: "Al Mizan Modern Investment | Licensed Debt Collection in Oman"
        },
        twitter_description: {
            ar: "تحصيل ديون احترافي للأفراد والشركات والبنوك في سلطنة عُمان، بالطرق الرضائية أولاً ثم القانونية، وبسرية تامة وامتثال كامل.",
            en: "Professional debt collection for individuals, corporates, banks, and finance companies in Oman — amicably first, then legally — with full confidentiality and compliance."
        },

        // --- Language Switcher ---
        lang_switcher_text: {
            ar: "English / العربية",
            en: "العربية / English"
        },

        // --- Navigation ---
        nav_stats:        { ar: "أرقامنا",       en: "Our Numbers" },
        nav_about:        { ar: "من نحن",        en: "About" },
        nav_services:     { ar: "خدماتنا",       en: "Services" },
        nav_methodology:  { ar: "منهجيتنا",      en: "Methodology" },
        nav_contact:      { ar: "تواصل معنا",     en: "Contact" },

        // --- Hero ---
        hero_eyebrow: {
            ar: "شركة عُمانية معتمدة في تحصيل الديون",
            en: "Oman's trusted debt recovery firm"
        },
        hero_headline: {
            ar: "نستعيد لك مستحقاتك… باحتراف، وسرية، وامتثال كامل",
            en: "We recover what you are owed — professionally, confidentially, and in full compliance."
        },
        hero_subtitle: {
            ar: "منذ تأسيسنا ونحن من أوائل الشركات المتخصصة في مجال تحصيل الديون في سلطنة عُمان. نخدم الأفراد، الشركات، البنوك، وشركات التمويل عبر حلول رضائية أولاً، وقضائية عند الحاجة، وبأحدث معايير السرية المعلوماتية.",
            en: "Among the first firms in the Sultanate of Oman specialized in debt recovery, we serve individuals, corporates, banks, and finance companies — amicable methods first, legal action when required — under the latest information-confidentiality standards."
        },
        hero_tagline: {
            ar: "«توازن اليوم … لنستعصر في الغد»",
            en: "“Balance today ... to prosper tomorrow.”"
        },
        hero_cta_primary: {
            ar: "اطلب استشارة قانونية مجانية",
            en: "Request a Free Legal Consultation"
        },
        hero_cta_secondary: {
            ar: "تواصل عبر واتساب",
            en: "Chat on WhatsApp"
        },

        // --- Trust Bar ---
        trust_text: {
            ar: "موثوقون من قِبل أفراد، شركات، ومصارف في سلطنة عُمان:",
            en: "Trusted by individuals, corporates, and banks across the Sultanate of Oman:"
        },
        client_a: { ar: "محكمة عُمان العليا",       en: "Oman Supreme Court" },
        client_b: { ar: "الغرفة التجارية العُمانية", en: "Oman Chamber of Commerce" },
        client_c: { ar: "البنك المركزي العُماني",   en: "Central Bank of Oman" },
        client_d: { ar: "هيئة سوق المال",           en: "Capital Market Authority" },
        client_e: { ar: "نقابة المحامين العُمانية",  en: "Oman Lawyers Bar Association" },

        // --- Stats Strip (3 stats — no rating) ---
        stat_recovered:        { ar: "+5,000", en: "5,000+" },
        stat_recovered_label:  { ar: "ملف تعافٍ ناجح",         en: "Successful Recoveries" },
        stat_amicable:         { ar: "95%",    en: "95%" },
        stat_amicable_label:   { ar: "نسبة التحصيل الودّي",    en: "Amicable Recovery Rate" },
        stat_destinations:     { ar: "+30",    en: "30+" },
        stat_destinations_label: { ar: "وجهة خليجية ودولية", en: "GCC & International Destinations" },

        // --- About ---
        about_heading: {
            ar: "من نحن — روّاد تحصيل الديون في عُمان",
            en: "About Us — Pioneers of Debt Recovery in Oman"
        },
        about_lead: {
            ar: "الميزان العصري للاستثمار شركة قانونية عُمانية، من أوائل الشركات المتخصصة في تحصيل الديون في السلطنة، نعمل بخبرات قانونية متراكمة وكوادر بشرية متخصصة لنحقّق أفضل النتائج لعملائنا.",
            en: "Al Mizan Modern Investment is an Omani legal firm and one of the first in the Sultanate specialized in debt recovery. We combine deep legal expertise with a specialized team to deliver the best outcomes for our clients."
        },
        about_paragraph1: {
            ar: "انطلقنا برؤية واضحة: توفير الجهد والوقت والمال على الدائن، وتوثيق كل إجراء وخطوة في ملف التحصيل، وتطبيق أحدث معايير السرية المعلوماتية في كل عملية.",
            en: "We started with a clear vision: save our creditors' time, effort, and money, document every step of the recovery file, and apply the latest information-confidentiality standards to every case."
        },
        about_paragraph2: {
            ar: "نخدم الأفراد ممن يواجهون صعوبة في استرداد مستحقاتهم لدى الغير، والشركات والمؤسسات التي تسعى لتحصيل ديونها المتعثرة أو المستجدة أو حتى المعدومة، إضافةً إلى البنوك وشركات التمويل في تحصيل المستحقات من أسهم وأوراق مالية وقروض وتسهيلات ائتمانية.",
            en: "We serve individuals struggling to recover amounts owed to them, corporates and institutions looking to recover non-performing, recent, or even written-off debts, and banks and finance companies recovering shares, securities, loans, and credit facilities."
        },
        about_paragraph3: {
            ar: "هدفنا أن نكون الخيار الأول في تقديم خدمات تحصيل الديون بجودة عالية في سلطنة عُمان وكافة دول مجلس التعاون.",
            en: "Our goal is to be the first choice for high-quality debt-recovery services in the Sultanate of Oman and across the GCC."
        },
        about_value1_title: { ar: "خبرة قانونية متخصصة", en: "Specialized Legal Expertise" },
        about_value1_text:  {
            ar: "فريق من المحامين والمستشارين القانونيين ذوي الخبرة في التحصيل والامتثال.",
            en: "A team of lawyers and legal consultants with deep experience in recovery and compliance."
        },
        about_value2_title: { ar: "سرية تامة", en: "Strict Confidentiality" },
        about_value2_text:  {
            ar: "نطبّق أحدث معايير السرية المعلوماتية في كل ملف، مع اتفاقية عدم إفصاح مدمجة.",
            en: "We apply the latest information-confidentiality standards to every file, with an NDA built in."
        },
        about_value3_title: { ar: "طرق رضائية أولاً", en: "Amicable Methods First" },
        about_value3_text:  {
            ar: "نصل إلى حلول مرضية تحافظ على العلاقة التجارية بين الدائن والمدين.",
            en: "We reach satisfactory solutions that preserve the commercial relationship between creditor and debtor."
        },
        about_value4_title: { ar: "حلول مخصصة", en: "Tailored Strategies" },
        about_value4_text:  {
            ar: "خطة تحصيل مرنة تناسب حجم الدَّين وطبيعة المدين والقطاع.",
            en: "A flexible recovery plan tailored to the debt size, debtor profile, and industry."
        },

        // --- Services ---
        service_heading: {
            ar: "خدماتنا في تحصيل الديون",
            en: "Our Debt-Recovery Services"
        },
        service_subtitle: {
            ar: "حلول احترافية للأفراد والشركات والبنوك، عبر فريق قانوني متخصص وبمعايير سرية تامة وامتثال كامل.",
            en: "Professional recovery solutions for individuals, corporates, and banks, delivered by a specialized legal team under strict confidentiality and full compliance."
        },
        service_individual_title: { ar: "تحصيل ديون الأفراد", en: "Individual Debt Collection" },
        service_individual_text:  {
            ar: "متابعة وتحصيل المستحقات المالية الخاصة بالأفراد لدى الغير، مع فريق احترافي متخصص يضمن استرداد أموالك بأسرع وقت وبأعلى نسبة نجاح، مع توثيق كامل لكل الإجراءات.",
            en: "We pursue and recover amounts owed to individuals by third parties, with a professional team ensuring the fastest possible recovery at the highest success rate, and full documentation of every step."
        },
        service_corporate_title: { ar: "تحصيل ديون الشركات", en: "Corporate Debt Collection" },
        service_corporate_text:  {
            ar: "حلول فعّالة وسريعة للشركات والمؤسسات في تحصيل ديونها المتعثرة، المستجدة، وحتى المعدومة، بما يقلّل العبء التشغيلي والمالي على فريقك الداخلي.",
            en: "Effective and fast solutions for corporates and institutions recovering non-performing, recent, or even written-off debts — reducing the operational and financial load on your internal team."
        },
        service_bank_title: { ar: "تحصيل ديون البنوك وشركات التمويل", en: "Bank & Finance-Company Debt" },
        service_bank_text:  {
            ar: "نتولى نيابةً عن المصارف وشركات التمويل تحصيل المستحقات من أسهم وأوراق مالية وقروض وتسهيلات ائتمانية، مع توفير أفضل الحلول لإعادة جدولة مديونيات المتعثرين.",
            en: "Acting on behalf of banks and finance companies, we recover shares, securities, loans, and credit facilities — and offer the best restructuring solutions for distressed debtors."
        },
        service_methods_title: { ar: "طرق التحصيل — الرضائية والقانونية", en: "Recovery Methods — Amicable & Legal" },
        service_methods_text:  {
            ar: "نبدأ بالطرق الرضائية للوصول إلى حلول مرضية تحافظ على العلاقة التجارية بين الدائن والمدين، ثم نلجأ عند الحاجة إلى المسار القانوني عبر المحاكم العُمانية المختصة، بما يشمل سندات الأمر والشيكات المرتجعة وأوامر الأداء.",
            en: "We start with amicable methods to reach a satisfactory resolution that preserves the commercial relationship, and turn to legal action when needed through the competent Omani courts — including order bills, bounced cheques, and performance orders."
        },

        // --- Methodology ---
        methodology_heading: {
            ar: "منهجيتنا في العمل",
            en: "Our Methodology"
        },
        methodology_subtitle: {
            ar: "منهجية علمية قائمة على أربع ركائز:",
            en: "A scientific methodology built on four pillars:"
        },
        method1_title: { ar: "التحليل والتوثيق", en: "Analyze & Document" },
        method1_text:  {
            ar: "دراسة الملف بالكامل وتوثيق المستندات والأدلة قبل أي إجراء.",
            en: "We study the case in full and document all evidence before any action is taken."
        },
        method2_title: { ar: "الحلول الرضائية", en: "Amicable Resolution" },
        method2_text:  {
            ar: "مفاوضات مهنية للوصول إلى تسوية مرضية للطرفين دون إضرار بالعلاقات التجارية.",
            en: "Professional negotiation to reach a settlement that works for both sides and preserves the commercial relationship."
        },
        method3_title: { ar: "المسار القانوني", en: "Legal Action" },
        method3_text:  {
            ar: "رفع الدعاوى، أوامر الأداء، التنفيذ الجبري، وكل الإجراءات أمام المحاكم العُمانية المختصة.",
            en: "Filing claims, performance orders, forced execution, and all proceedings before the competent Omani courts."
        },
        method4_title: { ar: "إعادة الجدولة والمتابعة", en: "Restructure & Follow-up" },
        method4_text:  {
            ar: "حلول مرنة لإعادة هيكلة المديونية مع متابعة دورية حتى إغلاق الملف.",
            en: "Flexible debt restructuring with regular follow-up until the case is closed."
        },
        compliance_banner: {
            ar: "نعمل وفق أعلى معايير الامتثال لمكافحة غسل الأموال وتمويل الإرهاب (AML/CFT) وطبقاً للقانون المدني والتجاري العُماني.",
            en: "We operate in full compliance with AML/CFT standards and Omani civil and commercial law."
        },

        // --- Process (5-step timeline) ---
        process_heading:  { ar: "كيف نعمل — خطوتك معنا", en: "How We Work — Your Path With Us" },
        process_subtitle: {
            ar: "خمس خطوات واضحة من أول تواصل حتى إغلاق الملف.",
            en: "Five clear steps from your first contact to closing the file."
        },
        process1_title: { ar: "الاستشارة المجانية", en: "Free Consultation" },
        process1_text:  {
            ar: "تواصل معنا عبر الهاتف أو واتساب، ونناقش ملفك بسرية تامة.",
            en: "Reach us by phone or WhatsApp and we discuss your case in full confidence."
        },
        process2_title: { ar: "تحليل الملف", en: "Case Analysis" },
        process2_text:  {
            ar: "فريقنا القانوني يدرس المستندات ويحدد أفضل مسار للتحصيل.",
            en: "Our legal team studies the documents and identifies the best recovery path."
        },
        process3_title: { ar: "المفاوضات الرضائية", en: "Amicable Negotiation" },
        process3_text:  {
            ar: "نتواصل مع المدين بشكل مهني ونسعى لتسوية مرضية للطرفين.",
            en: "We contact the debtor professionally and seek a settlement that works for both sides."
        },
        process4_title: { ar: "الإجراءات القانونية عند الحاجة", en: "Legal Action When Needed" },
        process4_text:  {
            ar: "إذا تعذّرت التسوية، نرفع الإجراء أمام المحاكم العُمانية المختصة.",
            en: "If settlement fails, we file the case before the competent Omani courts."
        },
        process5_title: { ar: "إغلاق الملف وتسلُّم المبلغ", en: "File Closure & Payout" },
        process5_text:  {
            ar: "بعد التحصيل أو التنفيذ، نُسلِّمك مستحقاتك كاملةً مع تقرير ختامي.",
            en: "After recovery or execution, we hand over your full amount along with a closing report."
        },

        // --- FAQ ---
        faq_heading:  { ar: "أسئلة شائعة",   en: "Frequently Asked Questions" },
        faq_subtitle: {
            ar: "إجابات مباشرة لأكثر الأسئلة التي تردنا من عملائنا.",
            en: "Direct answers to the most common questions we receive."
        },
        faq1_q: { ar: "هل الخدمة متاحة للأفراد في عُمان فقط؟", en: "Is the service only for individuals in Oman?" },
        faq1_a: {
            ar: "نخدم الأفراد والشركات داخل سلطنة عُمان، ولدينا شبكة شركاء تمكّننا من متابعة الملفات في دول مجلس التعاون ودولياً عند الحاجة.",
            en: "We serve individuals and corporates in the Sultanate of Oman, and our partner network allows us to pursue cases across the GCC and internationally when needed."
        },
        faq2_q: { ar: "كم تستغرق عملية التحصيل عادةً؟", en: "How long does a recovery usually take?" },
        faq2_a: {
            ar: "يعتمد ذلك على حجم الملف وتعقيده. أغلب الملفات الودية تُغلق خلال أسابيع قليلة، أما الملفات القضائية فقد تستغرق أشهراً وفق إجراءات المحكمة.",
            en: "It depends on the size and complexity. Most amicable cases close within a few weeks; judicial cases may take months depending on court procedure."
        },
        faq3_q: { ar: "هل تتعاملون بسرية تامة؟", en: "Is everything handled in strict confidence?" },
        faq3_a: {
            ar: "نعم. نوقّع اتفاقية عدم إفصاح (NDA) عند الطلب، ونطبّق أحدث معايير السرية المعلوماتية في كل ملف.",
            en: "Yes. We sign an NDA on request and apply the latest information-confidentiality standards to every file."
        },
        faq4_q: { ar: "هل أنتم محامون معتمدون في عُمان؟", en: "Are you licensed lawyers in Oman?" },
        faq4_a: {
            ar: "نعم، يعمل معنا محامون ومستشارون قانونيون مسجّلون لدى نقابة المحامين العُمانية، ولدينا الحق في المرافعة أمام المحاكم العُمانية.",
            en: "Yes — we work with lawyers and legal consultants registered with the Oman Lawyers Bar Association, with full right of audience before Omani courts."
        },
        faq5_q: { ar: "هل الاستشارة الأولى مجانية؟", en: "Is the first consultation free?" },
        faq5_a: {
            ar: "بالتأكيد. الاستشارة الأولى مجانية تماماً، وتهدف إلى فهم ملفك وتقدير المسار الأمثل للتحصيل قبل أي التزام.",
            en: "Absolutely. The first consultation is completely free — we use it to understand your case and recommend the best path forward before any commitment."
        },

        // --- Final CTA ---
        final_cta_heading: {
            ar: "هل تبحث عن طريقة موثوقة لتحصيل مستحقاتك؟",
            en: "Looking for a reliable way to recover what's owed to you?"
        },
        final_cta_text: {
            ar: "دعنا نتولّى ملفك بكل احترافية وسرية. استشارتنا الأولى مجانية.",
            en: "Let us handle your case with full professionalism and confidentiality. Your first consultation is free."
        },
        consultation_cta: {
            ar: "احجز استشارتك القانونية المجانية",
            en: "Book Your Free Legal Consultation"
        },
        whatsapp_cta: {
            ar: "تواصل عبر واتساب",
            en: "Chat on WhatsApp"
        },

        // --- Footer ---
        company_name: {
            ar: "الميزان العصري للاستثمار",
            en: "Al Mizan Modern Investment"
        },
        company_mission: {
            ar: "روّاد تحصيل الديون في سلطنة عُمان، نخدم الأفراد والشركات والبنوك بالطرق الرضائية ثم القانونية، وبمعايير سرية تامة وامتثال كامل.",
            en: "Pioneers of debt recovery in Oman — individuals, corporates, and banks served first amicably, then legally, under strict confidentiality and full compliance."
        },
        company_address: {
            ar: "📍 الخوير، مسقط، سلطنة عُمان",
            en: "📍 Al Khuwair, Muscat, Sultanate of Oman"
        },
        quick_links_title: { ar: "روابط سريعة",     en: "Quick Links" },
        link_about:         { ar: "من نحن",          en: "About" },
        link_service_name:  { ar: "خدماتنا",         en: "Services" },
        link_methodology:   { ar: "منهجيتنا",        en: "Methodology" },
        link_contact:       { ar: "تواصل معنا",       en: "Contact" },
        contact_title:      { ar: "تواصل معنا",       en: "Contact" },
        company_email:      { ar: "📧 info@almizan.om",            en: "📧 info@almizan.om" },
        company_phone:      { ar: "📞 +968 2412 3456",            en: "📞 +968 2412 3456" },
        company_whatsapp:   { ar: "💬 واتساب: +968 2412 3456",  en: "💬 WhatsApp: +968 2412 3456" },
        follow_us_title:    { ar: "تابعنا",           en: "Follow Us" },
        copyright_text: {
            ar: "© 2026 الميزان العصري للاستثمار. جميع الحقوق محفوظة.",
            en: "© 2026 Al Mizan Modern Investment. All Rights Reserved."
        }
    };

    // ------------------------------------------------------------
    // 🔧 Helpers
    // ------------------------------------------------------------
    const bodyTag = document.body;
    const htmlTag = document.documentElement;
    const langSwitcher = document.getElementById('lang-switcher');

    /** Read a previously-saved language (defaults to 'ar'). */
    function getSavedLang() {
        try {
            const v = localStorage.getItem(STORAGE_KEY);
            return v === 'en' ? 'en' : 'ar';
        } catch (e) {
            return 'ar';
        }
    }

    /** Persist the chosen language. */
    function saveLang(lang) {
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* noop */ }
    }

    // ------------------------------------------------------------
    // 🌐 Apply a language to the page
    // ------------------------------------------------------------
    function applyLang(lang) {
        // 1. Text + meta content
        document.querySelectorAll('[data-key]').forEach(function (el) {
            const key = el.getAttribute('data-key');
            const entry = contentMap[key];
            if (!entry || !entry[lang]) return;

            // <title>
            if (key === 'site_title') {
                document.title = entry[lang];
                return;
            }

            // <meta> — match by attribute, not by literal "name"
            if (el.tagName === 'META') {
                const ogProp  = el.getAttribute('property');
                const nameAttr = el.getAttribute('name');
                const isOg        = ogProp && ogProp.indexOf('og:') === 0;
                const isTwitter   = nameAttr && nameAttr.indexOf('twitter:') === 0;
                const isDesc      = nameAttr === 'description';
                if (isOg || isTwitter || isDesc) {
                    el.setAttribute('content', entry[lang]);
                }
                return;
            }

            // <button> / <input>
            if (el.tagName === 'INPUT' || el.tagName === 'BUTTON') {
                el.textContent = entry[lang];
                return;
            }

            // Default: replace inner HTML
            el.innerHTML = entry[lang];
        });

        // 2. Directionality + lang attribute
        const dir = (lang === 'ar') ? 'rtl' : 'ltr';
        bodyTag.setAttribute('dir', dir);
        bodyTag.setAttribute('lang', lang);
        htmlTag.setAttribute('dir', dir);
        htmlTag.setAttribute('lang', lang);

        // 3. Re-render the stat numbers for the new language
        // (the count-up is keyed off the data-* attrs, not the text)
        renderStatNumbers(lang);
    }

    // ------------------------------------------------------------
    // 🔢 Stat count-up
    // ------------------------------------------------------------
    /** Render the stat-number text content for a given language.
     *  Uses the language-specific contentMap text (the same source the rest
     *  of the page uses) so the numbers always reflect the active language.
     *  If a stat is currently animating, cancel the animation and snap to the
     *  localized text — otherwise the in-flight tick would overwrite the
     *  new language's text with the captured data-* prefix/suffix. */
    function renderStatNumbers(lang) {
        document.querySelectorAll('.stat-number').forEach(function (el) {
            // Cancel any in-flight count-up so it can't overwrite our write.
            if (el._almCancel) el._almCancel();

            const key = el.getAttribute('data-key');
            const entry = key && contentMap[key];
            if (entry && entry[lang]) {
                el.textContent = entry[lang];
            } else {
                // Fallback: build from data-* attrs
                const target = parseFloat(el.getAttribute('data-target') || '0');
                const prefix = el.getAttribute('data-prefix') || '';
                const suffix = el.getAttribute('data-suffix') || '';
                const hasDecimal = String(target).indexOf('.') !== -1;
                const formatted = hasDecimal
                    ? target.toFixed(0)
                    : Math.floor(target).toLocaleString('en-US');
                el.textContent = prefix + formatted + suffix;
            }
        });
    }

    /** Animate a single .stat-number from 0 to its data-target. */
    function animateCountUp(el) {
        if (el.dataset.animated === '1') return;
        el.dataset.animated = '1';

        const target = parseFloat(el.getAttribute('data-target') || '0');
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1600;
        const start = performance.now();
        let cancelled = false;
        let rafId = 0;

        // Expose a cancel handle so renderStatNumbers can stop the animation
        // cleanly when the language is switched mid-flight.
        el._almCancel = function () {
            cancelled = true;
            if (rafId) cancelAnimationFrame(rafId);
            el._almCancel = null;
        };

        // AR-style large numbers (e.g. +5,000) need Arabic-friendly thousands;
        // we keep simple en-US formatting during animation and finalize using
        // the language-specific data-key text for AR.
        function step(now) {
            if (cancelled) return;
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
            const current = target * eased;
            el.textContent = prefix + Math.floor(current).toLocaleString('en-US') + suffix;
            if (t < 1) {
                rafId = requestAnimationFrame(step);
            } else {
                // Final value: honor the data-key text in the active language
                const key = el.getAttribute('data-key');
                const entry = contentMap[key];
                const lang = (htmlTag.getAttribute('lang') === 'en') ? 'en' : 'ar';
                if (entry && entry[lang]) {
                    el.textContent = entry[lang];
                } else {
                    el.textContent = prefix + Math.floor(target).toLocaleString('en-US') + suffix;
                }
                el._almCancel = null;
            }
        }
        rafId = requestAnimationFrame(step);
    }

    // ------------------------------------------------------------
    // 🪟 Language switcher button
    // ------------------------------------------------------------
    if (langSwitcher) {
        langSwitcher.addEventListener('click', function () {
            const next = (htmlTag.getAttribute('lang') === 'en') ? 'ar' : 'en';
            applyLang(next);
            saveLang(next);
        });
    }

    // ------------------------------------------------------------
    // 🍔 Hamburger menu
    // ------------------------------------------------------------
    const navToggle = document.getElementById('nav-toggle');
    const navLinks  = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            const isOpen = navLinks.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ------------------------------------------------------------
    // 🪄 Scroll-reveal via IntersectionObserver
    // ------------------------------------------------------------
    const revealTargets = document.querySelectorAll('.reveal');
    if (reduceMotion || !('IntersectionObserver' in window)) {
        // Skip animation — show everything immediately
        revealTargets.forEach(function (el) { el.classList.add('in-view'); });
    } else {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        revealTargets.forEach(function (el) { observer.observe(el); });
    }

    // ------------------------------------------------------------
    // 🔢 Count-up observer
    // ------------------------------------------------------------
    if (!reduceMotion && 'IntersectionObserver' in window) {
        const statObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCountUp(entry.target);
                    statObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.45 });
        document.querySelectorAll('.stat-number').forEach(function (el) {
            statObserver.observe(el);
        });
    }

    // ------------------------------------------------------------
    // 📌 Sticky-header scroll state
    // ------------------------------------------------------------
    const navbar = document.getElementById('navbar');
    if (navbar) {
        const onScroll = function () {
            if (window.scrollY > 8) navbar.classList.add('scrolled');
            else navbar.classList.remove('scrolled');
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // ------------------------------------------------------------
    // ❓ FAQ accordion (single-open behaviour)
    // ------------------------------------------------------------
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
        const summary = item.querySelector('.faq-question');
        if (!summary) return;
        summary.addEventListener('click', function (e) {
            e.preventDefault();
            const wasOpen = item.classList.contains('is-open');
            // Close all
            faqItems.forEach(function (other) {
                other.classList.remove('is-open');
                other.removeAttribute('open');
                const s = other.querySelector('.faq-question');
                if (s) s.setAttribute('aria-expanded', 'false');
            });
            // Open the clicked one (unless it was already open → leave closed)
            if (!wasOpen) {
                item.classList.add('is-open');
                item.setAttribute('open', '');
                summary.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Open the first FAQ by default (already has `open` in HTML — sync class)
    faqItems.forEach(function (item) {
        if (item.hasAttribute('open')) {
            item.classList.add('is-open');
            const s = item.querySelector('.faq-question');
            if (s) s.setAttribute('aria-expanded', 'true');
        }
    });

    // ------------------------------------------------------------
    // 🚀 Init
    // ------------------------------------------------------------
    applyLang(getSavedLang());
});

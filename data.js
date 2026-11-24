/**
 * Portfolio Content Configuration — Madhur Shukla
 * Edit this file to update projects, skills, certifications, experience, or links
 * without touching index.html or script.js.
 */

const PORTFOLIO_DATA = {
    meta: {
        name: "Madhur Shukla",
        shortName: "Madhur Shukla",
        monogram: "MS",
        headline: "Computer Science Student | Data Science & AI",
        description:
            "B.Tech Computer Science student specializing in Data Science & AI. Focused on data analytics, machine learning, and transforming raw datasets into clear insights and practical, decision-ready solutions.",
        focusAreas: [
            "Data Analytics",
            "Machine Learning",
            "SQL & BI Dashboards",
            "Python Engineering"
        ],
        location: "Lucknow, India",
        email: "madhurshukla23@gmail.com",
        github: "https://github.com/Katsu6969",
        linkedin: "https://www.linkedin.com/in/madhur-shukla-0601bb293",
        credly: "https://www.credly.com/badges/6353235e-21c9-43c8-a3b6-466c7b84471f",
        resumePath: "./assets/Madhur_Shukla_Resume.pdf",
        availability: "Open to Data Analyst & Data Science Internships",
        /**
         * Optional Formspree / Web3Forms endpoint for silent form submission.
         * Example: "https://formspree.io/f/your-form-id"
         * When left empty, the form validates input and launches a pre-filled
         * email draft so the Send button is always 100% functional.
         */
        formEndpoint: ""
    },

    about: {
        paragraphs: [
            "I am a B.Tech Computer Science & Engineering student at Shri Ramswaroop Memorial University specializing in Data Science and Artificial Intelligence. My primary focus lies in exploratory data analysis, statistical reasoning, SQL querying, and building interpretable machine learning workflows that answer real business questions.",
            "I approach data problems methodically—starting with data quality and cleaning, uncovering patterns through clear visualizations, and validating assumptions with measurable metrics. Beyond coursework in algorithms, databases, and machine learning, I sharpen my problem-solving through national hackathons such as Convolve 4.0 and Smart India Hackathon.",
            "I am actively looking for Data Analyst and Data Science internship opportunities where I can contribute to analytical pipelines, BI reporting, and applied ML systems."
        ],
        highlights: [
            {
                label: "Primary Focus",
                value: "Data Analytics, EDA & Applied ML"
            },
            {
                label: "Specialization",
                value: "B.Tech CSE — Data Science & AI"
            },
            {
                label: "Currently Exploring",
                value: "Predictive Modeling, SQL Optimization & Power BI"
            },
            {
                label: "Career Goal",
                value: "Data Analyst / Junior Data Scientist"
            }
        ]
    },

    skills: {
        categories: [
            {
                name: "Programming",
                icon: "fa-solid fa-code",
                items: [
                    { name: "Python", icon: "devicon-python-plain" },
                    { name: "SQL", icon: "fa-solid fa-database" },
                    { name: "Java", icon: "devicon-java-plain" },
                    { name: "JavaScript", icon: "devicon-javascript-plain" },
                    { name: "HTML5 & CSS3", icon: "devicon-html5-plain" }
                ]
            },
            {
                name: "Data Manipulation & Statistics",
                icon: "fa-solid fa-table",
                items: [
                    { name: "Pandas", icon: "devicon-pandas-plain" },
                    { name: "NumPy", icon: "devicon-numpy-plain" },
                    { name: "Exploratory Data Analysis", icon: "fa-solid fa-magnifying-glass-chart" },
                    { name: "Data Cleaning & Wrangling", icon: "fa-solid fa-filter" },
                    { name: "Descriptive & Inferential Stats", icon: "fa-solid fa-square-root-variable" }
                ]
            },
            {
                name: "Databases",
                icon: "fa-solid fa-server",
                items: [
                    { name: "MySQL", icon: "devicon-mysql-plain" },
                    { name: "Relational Modeling", icon: "fa-solid fa-diagram-project" },
                    { name: "Joins, CTEs & Window Functions", icon: "fa-solid fa-layer-group" }
                ]
            },
            {
                name: "Data Visualization & BI",
                icon: "fa-solid fa-chart-line",
                items: [
                    { name: "Matplotlib", icon: "devicon-matplotlib-plain" },
                    { name: "Seaborn", icon: "fa-solid fa-chart-area" },
                    { name: "Power BI", icon: "fa-solid fa-chart-column" },
                    { name: "Microsoft Excel", icon: "fa-solid fa-file-excel" }
                ]
            },
            {
                name: "Machine Learning",
                icon: "fa-solid fa-brain",
                items: [
                    { name: "Scikit-learn", icon: "devicon-scikitlearn-plain" },
                    { name: "Regression & Classification", icon: "fa-solid fa-wave-square" },
                    { name: "Feature Engineering", icon: "fa-solid fa-sliders" },
                    { name: "Model Evaluation & Validation", icon: "fa-solid fa-bullseye" }
                ]
            },
            {
                name: "Development & Workflow",
                icon: "fa-solid fa-toolbox",
                items: [
                    { name: "Git", icon: "devicon-git-plain" },
                    { name: "GitHub", icon: "devicon-github-original" },
                    { name: "Jupyter Notebook", icon: "devicon-jupyter-plain" },
                    { name: "VS Code", icon: "devicon-vscode-plain" }
                ]
            }
        ],
        currentlyLearning: [
            "Deep Learning Foundations",
            "AWS Cloud for Data",
            "End-to-End ML Deployment",
            "A/B Testing & Experimentation"
        ]
    },

    projects: [
        {
            id: "bmw-sales-analysis",
            title: "BMW Global Sales & Market Trend Analysis (2014–2020)",
            shortDescription:
                "End-to-end exploratory analysis of seven years of BMW automotive sales data to uncover revenue drivers, model-level demand patterns, pricing dynamics, and regional performance.",
            categories: ["Data Analytics", "Data Visualization", "Python"],
            primaryCategory: "Data Analytics",
            tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Excel"],
            visualType: "bmw-sales",
            metricBadge: "7-Year Trend EDA",
            github: "https://github.com/Katsu6969",
            demo: "",
            caseStudy: {
                overview:
                    "An analytical study examining BMW vehicle sales from 2014 to 2020 using Python and Excel. The project translates multi-year transactional and model-level records into structured visual comparisons across fuel types, transmission preferences, mileage brackets, and pricing segments.",
                problemStatement:
                    "Automotive sales teams and dealers face fluctuating demand across vehicle classes, fuel transitions, and model depreciation curves. Without structured trend analysis across multi-year records, identifying high-margin models and shifting customer preferences remains largely reactive.",
                objectives: [
                    "Clean, standardize, and validate multi-year BMW sales records spanning 2014–2020.",
                    "Quantify year-over-year sales volume, average selling price, and mileage distribution by model series.",
                    "Compare performance across fuel types (Petrol, Diesel, Hybrid/Electric) and transmission segments.",
                    "Surface clear visual takeaways to inform inventory mix and pricing strategy."
                ],
                dataset:
                    "BMW Automotive Sales Dataset (2014–2020) exported and audited in Excel and processed via Pandas DataFrames—containing model series, registration year, price, transmission type, mileage, fuel type, tax, MPG, and engine size.",
                preprocessing: [
                    "Audited raw Excel sheets for missing entries, duplicate listings, inconsistent string casing, and impossible numeric outliers (negative mileage or zero engine size).",
                    "Standardized categorical labels for fuel types and transmission classes, and engineered derived columns including vehicle age, price-per-mile depreciation bands, and year-over-year growth rates.",
                    "Used NumPy vectorized filtering and interquartile range (IQR) checks to isolate extreme luxury outliers without distorting mainstream trend averages."
                ],
                eda: [
                    "Computed summary statistics (mean, median, IQR, skewness) across model families to distinguish mass-market volume drivers from premium low-volume trims.",
                    "Evaluated correlation between vehicle age, mileage, engine size, and resale price to map depreciation velocity.",
                    "Segmented annual registrations by fuel type to observe the gradual decline in diesel share alongside rising petrol and hybrid adoption between 2017 and 2020."
                ],
                methodology:
                    "Structured a reproducible Jupyter Notebook workflow combining Excel data validation, Pandas groupby/pivot aggregations, NumPy statistical summaries, and multi-panel Matplotlib charts with consistent typography, annotations, and direct data labels.",
                visualHighlights: [
                    "Year-over-year BMW unit volume and median price trajectory (2014–2020).",
                    "Model-wise market share comparison highlighting top-performing series (3 Series, 1 Series, X Series).",
                    "Fuel-type mix shift and mileage-vs-price depreciation scatter profiles."
                ],
                modelPerformance:
                    "Not applicable — this project is focused on descriptive and diagnostic exploratory data analysis rather than predictive modeling.",
                findings: [
                    "Core executive and compact models (3 Series, 1 Series, 2 Series) accounted for the largest share of consistent sales volume across the 2014–2020 window.",
                    "Automatic and semi-automatic transmissions steadily outpaced manual variants in both unit demand and retained resale price.",
                    "Hybrid and petrol segments showed strong late-period momentum (2018–2020) as diesel share narrowed.",
                    "Mileage crossed steep depreciation inflection thresholds around 30k and 60k miles, creating distinct value tiers."
                ],
                limitations: [
                    "Dataset captures historical records through 2020 and does not include post-2021 EV lineup launches or macroeconomic inflation adjustments.",
                    "Lacks dealership-level geographic granularity and customer demographic attributes."
                ],
                futureImprovements: [
                    "Build an interactive Power BI dashboard with dynamic slicers for model, fuel type, and price tier.",
                    "Train a regression model (Random Forest / Gradient Boosting) to predict fair resale prices from vehicle features."
                ]
            }
        },
        {
            id: "customer-churn-prediction",
            title: "Customer Churn Prediction & Retention Analytics",
            shortDescription:
                "Supervised machine learning pipeline that identifies high-risk telecom/subscription customers early, explains churn drivers, and segments accounts for targeted retention campaigns.",
            categories: ["Machine Learning", "Data Analytics", "Python"],
            primaryCategory: "Machine Learning",
            tools: ["Python", "Scikit-learn", "Pandas", "NumPy", "Seaborn"],
            visualType: "churn-ml",
            metricBadge: "ROC-AUC 0.85+",
            github: "https://github.com/Katsu6969",
            demo: "",
            caseStudy: {
                overview:
                    "An end-to-end classification and customer analytics project designed to predict subscription churn before cancellation occurs, pairing Scikit-learn modeling with business-facing risk tiers and actionable retention insights.",
                problemStatement:
                    "Acquiring new customers costs significantly more than retaining existing subscribers. Subscription businesses lose recurring revenue when at-risk users disengage silently without early warning signals for retention teams.",
                objectives: [
                    "Identify behavioral, billing, and contract features most strongly associated with customer churn.",
                    "Handle class imbalance cleanly and compare baseline vs. ensemble classifiers using business-aligned metrics (Recall, F1, ROC-AUC).",
                    "Translate model probabilities into Low, Medium, and High churn-risk cohorts for targeted intervention."
                ],
                dataset:
                    "Public Telco Customer Churn benchmark dataset (~7,043 customer records, 21 attributes covering tenure, contract type, monthly charges, payment method, add-on services, and churn label).",
                preprocessing: [
                    "Converted non-numeric TotalCharges strings, imputed zero-tenure edge cases, and removed identifier columns.",
                    "Engineered domain features including average monthly spend ratio, total active add-on count, tenure buckets, and auto-pay indicator.",
                    "Applied ColumnTransformer pipelines (OneHotEncoder + StandardScaler) inside cross-validation folds to eliminate data leakage."
                ],
                eda: [
                    "Measured churn rate across contract horizons—revealing sharply elevated churn in month-to-month contracts compared to one- and two-year plans.",
                    "Analyzed tenure and monthly charge distributions using Seaborn KDE and boxplots to locate the highest-risk first-12-month onboarding window.",
                    "Examined service bundle adoption (tech support, online security) to quantify retention lift."
                ],
                methodology:
                    "Benchmarked Logistic Regression, Random Forest, and Gradient Boosting classifiers using stratified 5-fold cross-validation, class-weight balancing, hyperparameter tuning via GridSearchCV, and probability threshold optimization aligned with retention cost vs. customer lifetime value.",
                visualHighlights: [
                    "Churn rate breakdown by contract length and tenure cohort.",
                    "ROC & Precision-Recall curves comparing Logistic Regression, Random Forest, and Gradient Boosting.",
                    "Top feature importance chart highlighting contract type, tenure, and monthly charge drivers."
                ],
                modelPerformance:
                    "Target benchmark: Gradient Boosting & Logistic Regression models evaluated via Stratified 5-Fold CV achieving ~0.85 ROC-AUC and ~78–80% recall on the churn class after threshold tuning.",
                findings: [
                    "Month-to-month subscribers with tenure under 12 months represent the highest-risk segment, driving a disproportionate share of total churn.",
                    "Electronic check billing and absence of security/tech-support add-ons strongly correlate with early cancellation.",
                    "Targeted retention offers focused on the top 20% predicted risk decile capture the majority of preventable revenue loss."
                ],
                limitations: [
                    "Static snapshot dataset lacks longitudinal usage logs (monthly ticket volume, app activity decay) that further sharpen real-time predictions.",
                    "Retention campaign uplift assumptions require live A/B testing to validate ROI."
                ],
                futureImprovements: [
                    "Add SHAP explainability plots to expose per-customer churn reasons for account managers.",
                    "Deploy an interactive Streamlit scoring app with batch CSV upload support."
                ]
            }
        },
        {
            id: "ecommerce-revenue-sql-bi",
            title: "E-Commerce Revenue, Cohort & SQL KPI Analytics",
            shortDescription:
                "Relational SQL analytics layer and executive BI dashboard tracking revenue growth, RFM customer segmentation, repeat purchase cohorts, and product category margins.",
            categories: ["SQL / Database", "Data Visualization", "Data Analytics"],
            primaryCategory: "SQL / Database",
            tools: ["MySQL", "SQL", "Power BI", "Excel", "Python"],
            visualType: "ecommerce-bi",
            metricBadge: "SQL + Power BI",
            github: "https://github.com/Katsu6969",
            demo: "",
            caseStudy: {
                overview:
                    "A business intelligence and SQL analytics project modeling multi-table e-commerce transactions (orders, customers, products, payments) into clean analytical views and an executive-ready KPI reporting suite.",
                problemStatement:
                    "Raw transactional order tables make it difficult for stakeholders to monitor net revenue retention, identify high-value repeat buyers, or spot margin leakage across product categories and shipping regions.",
                objectives: [
                    "Design normalized relational SQL queries and analytical views for orders, line items, and customer lifecycles.",
                    "Compute core e-commerce KPIs: GMV, AOV, repeat purchase rate, monthly cohort retention, and category contribution.",
                    "Build an RFM (Recency, Frequency, Monetary) segmentation model to prioritize VIP and at-risk customer segments."
                ],
                dataset:
                    "Multi-table relational e-commerce retail dataset (~100k order records across orders, order_items, customers, products, and payments tables) loaded into MySQL.",
                preprocessing: [
                    "Validated primary/foreign key integrity, filtered cancelled and returned orders from net revenue metrics, and normalized timestamps for cohort grouping.",
                    "Resolved missing product category translations and standardized currency precision across payment records.",
                    "Created indexed MySQL views for repeatable BI consumption."
                ],
                eda: [
                    "Used SQL CTEs and window functions (ROW_NUMBER, LAG, DENSE_RANK, NTILE) to measure month-over-month revenue growth and top SKUs per category.",
                    "Constructed customer acquisition cohorts to track 30-, 60-, and 90-day repeat purchase decay.",
                    "Segmented buyers via NTILE(5) RFM scoring into Champions, Loyal, Promising, and Hibernating groups."
                ],
                methodology:
                    "Implemented a layered SQL architecture (raw staging → cleaned views → KPI & RFM summary tables) in MySQL, connected directly to Power BI data models with DAX measures for YoY growth, rolling 30-day revenue, and interactive cross-filtering.",
                visualHighlights: [
                    "Executive KPI overview: Revenue, Order Volume, Average Order Value, and MoM Growth.",
                    "Cohort retention heatmap and RFM customer value distribution.",
                    "Category revenue vs. order-share Pareto analysis."
                ],
                modelPerformance:
                    "Rule-based RFM quantile segmentation evaluated by revenue concentration—identifying top 20% Champions contributing >50% of repeat net revenue.",
                findings: [
                    "A concentrated set of top product categories drives the majority of net revenue, while long-tail categories carry higher fulfillment drag.",
                    "First-to-second order conversion within 45 days is the strongest predictor of long-term customer value.",
                    "Clear seasonal peaks in Q4 require inventory pre-staging and targeted re-engagement of high-monetary hibernating customers."
                ],
                limitations: [
                    "Dataset does not include marketing channel spend (CAC) or unit COGS for full contribution-margin calculation.",
                    "Batch-refreshed MySQL views rather than real-time streaming ingestion."
                ],
                futureImprovements: [
                    "Automate ETL refresh with scheduled Python scripts and data quality assertions.",
                    "Add time-series revenue forecasting (Prophet / SARIMA) alongside historical BI dashboards."
                ]
            }
        }
    ],

    experience: [
        {
            role: "AI / ML Hackathon Participant — Convolve 4.0",
            organization: "Pan-IIT AI/ML Hackathon (IIT Guwahati, IIT Madras, IIT Kanpur & 6 Partner IITs)",
            type: "Hackathon & Applied ML",
            responsibilities: [
                "Competed in the preliminary round of the national pan-IIT AI/ML hackathon tackling real-world analytical and machine learning problem statements.",
                "Collaborated on data exploration, feature selection, and rapid prototyping under strict submission deadlines.",
                "Documented analytical assumptions, evaluation trade-offs, and structured presentation deliverables."
            ],
            technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "EDA"],
            result: "Completed preliminary round with verified participation across 9 organizing IITs."
        },
        {
            role: "Team Participant — Smart India Hackathon (2×)",
            organization: "Ministry of Education's Innovation Cell (MoE) & SRMU",
            type: "National Innovation Hackathon",
            responsibilities: [
                "Participated twice (2025 & 2026) in internal institutional rounds of Smart India Hackathon, solving structured engineering and data-driven problem statements.",
                "Contributed to problem scoping, data workflow architecture, feasibility analysis, and technical pitch decks in a cross-functional student team.",
                "Translated domain constraints into modular prototypes and clear evaluation criteria."
            ],
            technologies: ["Python", "SQL", "Data Analytics", "Web Tech", "Git"],
            result: "Delivered end-to-end solution prototypes across two consecutive SIH cycles."
        },
        {
            role: "Independent Data Analytics & ML Builder",
            organization: "Self-Directed Technical Portfolio",
            type: "Practical Project Work",
            responsibilities: [
                "Executing structured end-to-end analytics projects spanning data cleaning, exploratory data analysis, SQL querying, BI dashboards, and predictive modeling.",
                "Maintaining clean, reproducible notebooks and well-documented repositories on GitHub following industry standards."
            ],
            technologies: ["Python", "Pandas", "SQL", "Matplotlib", "Power BI", "Excel"],
            result: "Actively expanding production-quality case studies; open to Data Analyst & Data Science internships."
        }
    ],

    education: {
        institutions: [
            {
                degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
                specialization: "Specialization: Data Science & Artificial Intelligence",
                institution: "Shri Ramswaroop Memorial University (SRMU)",
                location: "Lucknow, India",
                badge: "Undergraduate"
            },
            {
                degree: "Higher Secondary Education (ISC / Class XII)",
                specialization: "Science & Mathematics Stream",
                institution: "Spring Dale College",
                location: "Lucknow, India",
                badge: "Secondary"
            }
        ],
        coursework: [
            "Data Structures & Algorithms (DSA)",
            "Design & Analysis of Algorithms (DAA)",
            "Artificial Intelligence (AI)",
            "Machine Learning (ML)",
            "Data Science (DS)",
            "Database Management Systems (DBMS)",
            "Operating Systems (OS)",
            "Probability & Statistics"
        ]
    },

    certifications: [
        {
            title: "Python for Data Science",
            issuer: "IBM (IBM Skills Network)",
            date: "Feb 13, 2026",
            credentialId: "6353235e-21c9-43c8-a3b6-466c7b84471f",
            verifyUrl: "https://www.credly.com/badges/6353235e-21c9-43c8-a3b6-466c7b84471f",
            certificatePdf: "",
            category: "Python & Data Science"
        },
        {
            title: "Data Fundamentals",
            issuer: "IBM SkillsBuild",
            date: "Sep 07, 2025",
            credentialId: "9224b96d-c231-4918-9b5c-6cb9aa886e77",
            verifyUrl: "https://www.credly.com/badges/9224b96d-c231-4918-9b5c-6cb9aa886e77",
            certificatePdf: "",
            category: "Data Analytics"
        },
        {
            title: "Web Development Fundamentals",
            issuer: "IBM SkillsBuild",
            date: "Sep 07, 2025",
            credentialId: "4acdd93c-2c4a-49b8-8c98-c423bc34999b",
            verifyUrl: "https://www.credly.com/badges/4acdd93c-2c4a-49b8-8c98-c423bc34999b",
            certificatePdf: "",
            category: "Web Engineering"
        }
    ],

    achievements: [
        {
            title: "Convolve 4.0 — Pan-IIT AI/ML Hackathon",
            issuer: "IIT Guwahati, IIT Madras, IIT Kanpur, IIT Bombay, IIT Delhi, IIT Roorkee, IIT Kharagpur, IIT (BHU) & IIT Hyderabad",
            date: "Jan – Feb 2026",
            description:
                "Participated in the preliminary round of Convolve 4.0, a joint national AI/ML hackathon hosted by nine IIT analytics and AI clubs.",
            certificatePdf: "",
            icon: "fa-solid fa-microchip"
        },
        {
            title: "Smart India Hackathon (SIH) — 2× Participant",
            issuer: "Ministry of Education's Innovation Cell (MoE) / AICTE & SRMU",
            date: "2025 & 2026",
            description:
                "Selected to compete in two editions of the institutional internal round of Smart India Hackathon, building team-based technical solutions for real-world problem statements.",
            certificatePdf: "",
            icon: "fa-solid fa-lightbulb"
        },
        {
            title: "Regional Level Volleyball Representation",
            issuer: "ICSE / ISC National Sports",
            date: "2022",
            description:
                "Represented at the ICSE/ISC Regional Level Volleyball tournament—building high-pressure teamwork, communication, and consistency.",
            certificatePdf: "",
            icon: "fa-solid fa-medal"
        }
    ],

    profiles: [
        {
            name: "GitHub",
            handle: "@Katsu6969",
            description: "Source code, data analytics notebooks, SQL scripts, and portfolio repositories.",
            url: "https://github.com/Katsu6969",
            icon: "fa-brands fa-github"
        },
        {
            name: "LinkedIn",
            handle: "Madhur Shukla",
            description: "Professional background, certifications, academic milestones, and career updates.",
            url: "https://www.linkedin.com/in/madhur-shukla-0601bb293",
            icon: "fa-brands fa-linkedin-in"
        },
        {
            name: "Credly Badges",
            handle: "IBM Verified Credentials",
            description: "Publicly verifiable digital credentials for Python for Data Science, Data Fundamentals, and Web Dev.",
            url: "https://www.credly.com/badges/6353235e-21c9-43c8-a3b6-466c7b84471f",
            icon: "fa-solid fa-certificate"
        }
    ]
};

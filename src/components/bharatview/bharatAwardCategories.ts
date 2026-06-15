export interface BharatAwardSubcategory {
  title: string
  awards: string[]
}

export interface BharatAwardCategory {
  id: number
  title: string
  subcategories?: BharatAwardSubcategory[]
}

export const BHARAT_AWARD_CATEGORIES: BharatAwardCategory[] = 
[
  {
    "id": 1,
    "title": "Advertising & Marketing Excellence Awards",
    "subcategories": [
      {
        "title": "Agency & Campaign Awards",
        "awards": [
          "Advertising Agency of the Year",
          "Marketing Company of the Year",
          "Excellence in Brand Building",
          "Creative Agency of the Year",
          "Digital Marketing Agency of the Year",
          "Media Agency of the Year",
          "Integrated Marketing Agency of the Year",
          "Emerging Agency of the Year",
          "Social Media Agency of the Year",
          "Best Integrated Marketing Campaign of the Year",
          "Best Advertising Campaign of the Year",
          "Best Brand Launch Campaign",
          "Best Rebranding Campaign",
          "Best Product Marketing Campaign",
          "Best Influencer Marketing Campaign",
          "Best Public Awareness Campaign",
          "Best Corporate Branding Campaign",
          "Best Social Media Campaign",
          "Best Content Marketing Campaign",
          "Best SEO Strategy",
          "Best Search Marketing Campaign",
          "Best Email Marketing Campaign",
          "Best Mobile Marketing Campaign",
          "Best Outdoor Advertising Campaign",
          "Best Print Advertising Campaign",
          "Best Television Advertising Campaign",
          "Best Radio Advertising Campaign",
          "Best Digital Video Campaign",
          "Best AI-Driven Marketing Campaign",
          "Excellence in Marketing Automation",
          "Excellence in Media Planning",
          "Excellence in Media Buying",
          "Excellence in Digital Marketing",
          "Excellence in Performance Marketing",
          "Excellence in Corporate Communications"
        ]
      },
      {
        "title": "",
        "awards": [
          "Marketing Leader of the Year",
          "Advertising Leader of the Year",
          "Chief Marketing Officer (CMO) of the Year",
          "Brand Leader of the Year",
          "Woman Marketing Leader of the Year",
          "Emerging Marketing Leader of the Year",
          "Young Advertising Professional of the Year",
          "Best Brand Strategist of the Year",
          "Best Digital Marketer of the Year",
          "Best Media Planner of the Year",
          "Best Creative Director of the Year",
          "Best Marketing Consultant of the Year",
          "Best Influencer Marketing Professional",
          "Best PR & Communications Professional",
          "Rising Star in Advertising & Marketing",
          "CEO of the Year"
        ]
      }
    ]
  },
  {
    "id": 2,
    "title": "BFSI Excellence Awards",
    "subcategories": [
      {
        "title": "Banking Awards",
        "awards": [
          "Best Bank of the Year",
          "Best Digital Banking Initiative",
          "Best Customer-Centric Bank",
          "Best Private Sector Bank",
          "Best Public Sector Bank",
          "Best SME Banking Solution",
          "Best Banking Innovation Award",
          "Best Financial Inclusion Initiative",
          "Fastest Growing Bank of the Year",
          "Excellence in Rural Banking",
          "Excellence in Retail Banking",
          "Excellence in Corporate Banking"
        ]
      },
      {
        "title": "NBFC Awards",
        "awards": [
          "Best NBFC of the Year",
          "Best Housing Finance Company",
          "Best Consumer Finance Company",
          "Best MSME Lending Institution",
          "Fastest Growing NBFC",
          "Excellence in Lending Solutions",
          "Innovation in Credit & Financing",
          "Customer Excellence in NBFC Services"
        ]
      },
      {
        "title": "Insurance Awards",
        "awards": [
          "Insurance Company of the Year",
          "Best Life Insurance Provider",
          "Best General Insurance Provider",
          "Best Health Insurance Provider",
          "Best Claims Management Initiative",
          "Best Customer Service in Insurance",
          "Best InsurTech Solution",
          "Excellence in Risk Management",
          "Excellence in Insurance Innovation"
        ]
      },
      {
        "title": "FinTech Awards",
        "awards": [
          "FinTech Company of the Year",
          "Best Digital Payments Platform",
          "Best LendingTech Solution",
          "Best AI-Powered Financial Solution",
          "Best Embedded Finance Platform",
          "Best Financial Inclusion FinTech",
          "Most Innovative FinTech Startup",
          "Excellence in Financial Technology"
        ]
      },
      {
        "title": "Technology & Innovation Awards",
        "awards": [
          "Digital Transformation Award",
          "Excellence in Cybersecurity",
          "Best Use of Artificial Intelligence",
          "Excellence in Data Analytics",
          "Best Customer Experience Initiative",
          "Innovation in Financial Inclusion",
          "Best Mobile Banking Experience",
          "Best Digital Insurance Platform"
        ]
      },
      {
        "title": "Sustainability & Governance",
        "awards": [
          "ESG Excellence in BFSI",
          "Sustainable Finance Initiative of the Year",
          "Excellence in Corporate Governance",
          "Best CSR Initiative in BFSI",
          "Responsible Lending Award",
          "Diversity & Inclusion Champion – BFSI"
        ]
      },
      {
        "title": "Leadership Awards",
        "awards": [
          "BFSI Leader of the Year",
          "Emerging Leader of the Year - BFSI",
          "CEO of the Year – BFSI",
          "Woman Leader in BFSI",
          "Emerging Leader in BFSI",
          "CXO of the Year – Banking",
          "CXO of the Year – Insurance",
          "CXO of the Year – FinTech",
          "Lifetime Achievement Award – BFSI",
          "Young Achiever in Financial Services"
        ]
      }
    ]
  },
  {
    "id": 3,
    "title": "Business Excellence Awards",
    "subcategories": [
      {
        "title": "Award Categories",
        "awards": [
          "Business Excellence Company of the Year",
          "Emerging Business of the Year",
          "Fastest Growing Company of the Year",
          "Most Admired Company of the Year",
          "Brand of the Year",
          "Excellence in Innovation & Growth",
          "Excellence in Customer Experience",
          "Excellence in Manufacturing MSME",
          "Excellence in Service Industry MSME",
          "Excellence in Sustainability",
          "Excellence in Employee Engagement",
          "Excellence in Talent Development",
          "Best Workplace Culture Award",
          "Startup of the Year",
          "MSME of the Year",
          "HR Leader of the Year",
          "Best Employer of the Year",
          "Emerging Entrepreneur of the Year",
          "Women Entrepreneur of the Year",
          "Young Entrepreneur of the Year",
          "Business Leader of the Year",
          "CEO of the Year"
        ]
      }
    ]
  },
  {
    "id": 4,
    "title": "Education & Skill Development Excellence Awards",
    "subcategories": [
      {
        "title": "Schools & Higher Education",
        "awards": [
          "School of the Year",
          "Best International School",
          "Best CBSE School",
          "Best State Board School",
          "Excellence in K-12 Education",
          "Excellence in Higher Education",
          "Excellence in Academic Innovation",
          "Excellence in Student Development",
          "Excellence in Holistic Education",
          "Excellence in STEM Education"
        ]
      },
      {
        "title": "Colleges & Universities",
        "awards": [
          "University of the Year",
          "Excellence in Research & Innovation",
          "Excellence in Industry-Academia Collaboration",
          "Excellence in Professional Education",
          "Excellence in Management Education",
          "Excellence in Engineering Education",
          "Excellence in Medical Education",
          "Excellence in Employability & Career Development"
        ]
      },
      {
        "title": "Skill Development & Training",
        "awards": [
          "Skill Development Institute of the Year",
          "Excellence in Vocational Training",
          "Excellence in Workforce Development",
          "Excellence in Professional Training",
          "Excellence in Corporate Learning & Development",
          "Excellence in Employability Skills Training",
          "Best Skill Development Initiative",
          "Excellence in Youth Empowerment Through Skills",
          "Excellence in Digital Skills Training",
          "Excellence in Future-Ready Workforce Development"
        ]
      },
      {
        "title": "CSR & Social Impact Awards",
        "awards": [
          "Excellence in Inclusive Education",
          "Excellence in Rural Education Development",
          "Excellence in Women Skill Empowerment",
          "Excellence in Community Education Initiatives",
          "Excellence in Educational Social Impact",
          "Excellence in Special Education",
          "Excellence in Lifelong Learning Initiatives"
        ]
      },
      {
        "title": "Leadership Awards",
        "awards": [
          "Education Leader of the Year",
          "Educator of the Year",
          "Academic Excellence Leader Award",
          "Principal of the Year",
          "Chancellor/Vice Chancellor of the Year",
          "Skill Development Leader of the Year",
          "Young Leader in Education",
          "Women Leader in Education",
          "Young Education Leader Award"
        ]
      },
      {
        "title": "Individual Excellence Awards",
        "awards": [
          "Outstanding Teacher of the Year",
          "Outstanding Professor of the Year",
          "Excellence in Teaching Award",
          "Excellence in Educational Leadership",
          "Excellence in Student Mentorship",
          "Excellence in Career Guidance & Counseling",
          "Excellence in Training & Facilitation",
          "Excellence in Research & Academic Contribution"
        ]
      }
    ]
  },
  {
    "id": 5,
    "title": "E-Learning Excellence Awards",
    "subcategories": [
      {
        "title": "General Awards",
        "awards": [
          "E-Learning Company of the Year",
          "Digital Learning Platform of the Year",
          "Online Education Provider of the Year",
          "Most Innovative E-Learning Solution",
          "Excellence in Digital Education"
        ]
      },
      {
        "title": "Platform & Technology Awards",
        "awards": [
          "Best E-Learning Platform",
          "Best Learning Management System (LMS)",
          "Excellence in Virtual Learning Solutions",
          "Excellence in AI-Powered Learning",
          "Excellence in Mobile Learning",
          "Excellence in Learning Experience Design",
          "Best SaaS Solution for Education",
          "Excellence in Adaptive Learning Technology"
        ]
      },
      {
        "title": "Content & Course Excellence Awards",
        "awards": [
          "Best Online Certification Program",
          "Excellence in Digital Course Development",
          "Excellence in Skill-Based Learning Programs",
          "Best Professional Development Course",
          "Excellence in Microlearning Solutions",
          "Excellence in Interactive Learning Content",
          "Best Corporate Training Content",
          "Excellence in Industry-Oriented Learning"
        ]
      },
      {
        "title": "EdTech Innovation Awards",
        "awards": [
          "EdTech Startup of the Year",
          "Excellence in Educational Technology Innovation",
          "Excellence in Gamified Learning",
          "Excellence in AR/VR-Based Learning Solutions",
          "Excellence in Personalized Learning",
          "Excellence in Data-Driven Learning Solutions",
          "Excellence in AI & Emerging Technologies Education"
        ]
      },
      {
        "title": "Corporate Learning & Training Awards",
        "awards": [
          "Excellence in Corporate E-Learning",
          "Best Employee Learning & Development Platform",
          "Excellence in Workforce Upskilling",
          "Excellence in Digital Corporate Training",
          "Excellence in Leadership Development Programs",
          "Excellence in Professional Skills Training"
        ]
      },
      {
        "title": "Sector-Specific E-Learning Awards",
        "awards": [
          "Excellence in K-12 Digital Learning",
          "Excellence in Higher Education E-Learning",
          "Excellence in Healthcare Learning Solutions",
          "Excellence in Financial Education Platforms",
          "Excellence in Technology & IT Training",
          "Excellence in Vocational & Skill Development Learning"
        ]
      },
      {
        "title": "Leadership & Individual Awards",
        "awards": [
          "E-Learning Leader of the Year",
          "EdTech Entrepreneur of the Year",
          "Digital Educator of the Year",
          "Learning & Development Leader of the Year",
          "Instructional Designer of the Year",
          "Women Leader in E-Learning",
          "Emerging Leader in Digital Education",
          "Lifetime Achievement in Digital Learning"
        ]
      }
    ]
  },
  {
    "id": 6,
    "title": "E-Mobility Excellence Awards"
  },
  {
    "id": 7,
    "title": "Employment & Workplace Excellence Awards"
  },
  {
    "id": 8,
    "title": "Fleet Excellence Awards"
  },
  {
    "id": 9,
    "title": "Gems & Jewellery Excellence Awards"
  },
  {
    "id": 10,
    "title": "HealthCare & Life Sciences Excellence Awards"
  },
  {
    "id": 11,
    "title": "Hospitality, Travel & Tourism Awards"
  },
  {
    "id": 12,
    "title": "IT & Governance Excellence Awards"
  },
  {
    "id": 13,
    "title": "Logistic & Supply Chain Awards"
  },
  {
    "id": 14,
    "title": "Manufacturing & Industrial Excellence Awards"
  },
  {
    "id": 15,
    "title": "Media & Entertainment Awards"
  },
  {
    "id": 16,
    "title": "Multiplex & Shopping Mall Excellence Awards"
  },
  {
    "id": 17,
    "title": "Oil & Gas Excellence Awards"
  },
  {
    "id": 18,
    "title": "Procurement Excellence Awards"
  },
  {
    "id": 19,
    "title": "Real Estate Excellence Awards"
  },
  {
    "id": 20,
    "title": "Retail Excellence Awards"
  },
  {
    "id": 21,
    "title": "Retail, E-Commerce & Consumer Brands Awards"
  },
  {
    "id": 22,
    "title": "Solar Energy & Sustainability Excellence Awards"
  },
  {
    "id": 23,
    "title": "Wind Energy Excellence Awards"
  }
]

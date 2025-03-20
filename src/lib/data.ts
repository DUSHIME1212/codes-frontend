
// Course categories
export const categories = [
    "Development",
    "Business",
    "Finance & Accounting",
    "IT & Software",
    "Office Productivity",
    "Personal Development",
    "Design",
    "Marketing",
    "Lifestyle",
    "Photography & Video",
    "Health & Fitness",
    "Music",
    "Teaching & Academics"
  ];
  
  // Course levels
  export const levels = ["Beginner", "Intermediate", "Advanced", "All Levels"];
  
  // Course interface
  export interface Course {
    id: string;
    title: string;
    slug: string;
    instructor: string;
    instructorImage?: string;
    instructorTitle: string;
    description: string;
    category: string;
    level: string;
    rating: number;
    reviewCount: number;
    studentsCount: number;
    duration: string;
    lastUpdated: string;
    thumbnail: string;
    price: number;
    discountPrice?: number;
    featured: boolean;
    popular: boolean;
    bestseller: boolean;
    new: boolean;
    curriculum: {
      section: string;
      lectures: {
        title: string;
        duration: string;
        preview: boolean;
      }[];
    }[];
    learningOutcomes: string[];
    requirements: string[];
  }
  
  // Mock courses data
  export const courses: Course[] = [
    {
      id: "1",
      title: "Complete Web Development Bootcamp",
      slug: "complete-web-development-bootcamp",
      instructor: "Dr. Angela Yu",
      instructorTitle: "Developer & Lead Instructor",
      instructorImage: "https://i.pinimg.com/736x/4b/d1/df/4bd1df1b12f5e5627d1e578a211de89f.jpg",
      description: "Become a full-stack web developer with just one course. This complete course teaches you HTML, CSS, JavaScript, Node.js, React, MongoDB and more!",
      category: "Development",
      level: "All Levels",
      rating: 4.8,
      reviewCount: 58642,
      studentsCount: 224350,
      duration: "65h 30m",
      lastUpdated: "2023-08",
      thumbnail: "https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 94.99,
      discountPrice: 15.99,
      featured: true,
      popular: true,
      bestseller: true,
      new: false,
      curriculum: [
        {
          section: "Introduction to Web Development",
          lectures: [
            {
              title: "How to Get the Most Out of This Course",
              duration: "5:10",
              preview: true
            },
            {
              title: "Download the Course Resources",
              duration: "3:22",
              preview: true
            },
            {
              title: "Web Development Course Curriculum Overview",
              duration: "8:45",
              preview: false
            }
          ]
        },
        {
          section: "HTML Fundamentals",
          lectures: [
            {
              title: "Introduction to HTML",
              duration: "12:35",
              preview: false
            },
            {
              title: "HTML Document Structure",
              duration: "15:22",
              preview: false
            },
            {
              title: "HTML Text Elements",
              duration: "18:15",
              preview: false
            }
          ]
        },
        {
          section: "CSS Fundamentals",
          lectures: [
            {
              title: "Introduction to CSS",
              duration: "14:10",
              preview: false
            },
            {
              title: "Selectors and Properties",
              duration: "20:45",
              preview: false
            },
            {
              title: "Box Model Explained",
              duration: "25:18",
              preview: false
            }
          ]
        }
      ],
      learningOutcomes: [
        "Build 16 web development projects for your portfolio, ready to apply for junior developer jobs",
        "Learn the latest technologies, including Javascript, React, Node and MongoDB",
        "Build fully-fledged websites and web apps",
        "Work as a freelance web developer",
        "Master frontend development with React",
        "Master backend development with Node"
      ],
      requirements: [
        "No programming experience needed - I'll teach you everything you need to know",
        "A computer with access to the internet",
        "No paid software required",
        "I'll walk you through installing all the free software you need"
      ]
    },
    {
      id: "2",
      title: "Machine Learning A-Z: Hands-On Python & R",
      slug: "machine-learning-a-z",
      instructor: "Kirill Eremenko",
      instructorTitle: "Data Scientist & AI Expert",
      instructorImage: "https://i.pinimg.com/736x/4b/d1/df/4bd1df1b12f5e5627d1e578a211de89f.jpg",
      description: "Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.",
      category: "IT & Software",
      level: "Intermediate",
      rating: 4.5,
      reviewCount: 157984,
      studentsCount: 819350,
      duration: "44h 15m",
      lastUpdated: "2023-09",
      thumbnail: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 89.99,
      discountPrice: 13.99,
      featured: true,
      popular: true,
      bestseller: false,
      new: false,
      curriculum: [
        {
          section: "Data Preprocessing",
          lectures: [
            {
              title: "The Dataset",
              duration: "5:10",
              preview: true
            },
            {
              title: "Importing Libraries",
              duration: "7:22",
              preview: false
            },
            {
              title: "Handling Missing Data",
              duration: "12:45",
              preview: false
            }
          ]
        },
        {
          section: "Regression",
          lectures: [
            {
              title: "Simple Linear Regression",
              duration: "18:35",
              preview: false
            },
            {
              title: "Multiple Linear Regression",
              duration: "25:22",
              preview: false
            },
            {
              title: "Polynomial Regression",
              duration: "20:15",
              preview: false
            }
          ]
        }
      ],
      learningOutcomes: [
        "Master Machine Learning on Python & R",
        "Have a great intuition of many Machine Learning models",
        "Make accurate predictions",
        "Make robust Machine Learning models",
        "Use Machine Learning for personal purpose",
        "Handle specific topics like Reinforcement Learning, NLP and Deep Learning"
      ],
      requirements: [
        "Just some high school mathematics level",
        "Basic Python or R programming knowledge"
      ]
    },
    {
      id: "3",
      title: "Financial Analysis for Business Decisions",
      slug: "financial-analysis",
      instructor: "Chris Haroun",
      instructorTitle: "MBA Professor & Venture Capitalist",
      instructorImage: "https://i.pinimg.com/736x/4b/d1/df/4bd1df1b12f5e5627d1e578a211de89f.jpg",
      description: "Complete Financial Analysis course: Financial Statement Analysis, Ratio Analysis, Financial Modeling & Business Decision Making",
      category: "Finance & Accounting",
      level: "Beginner",
      rating: 4.7,
      reviewCount: 32541,
      studentsCount: 125840,
      duration: "32h 10m",
      lastUpdated: "2023-10",
      thumbnail: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 79.99,
      discountPrice: 12.99,
      featured: false,
      popular: true,
      bestseller: false,
      new: true,
      curriculum: [
        {
          section: "Introduction to Financial Analysis",
          lectures: [
            {
              title: "Course Overview",
              duration: "8:10",
              preview: true
            },
            {
              title: "Financial Statements Overview",
              duration: "15:22",
              preview: false
            }
          ]
        },
        {
          section: "Ratio Analysis",
          lectures: [
            {
              title: "Liquidity Ratios",
              duration: "18:35",
              preview: false
            },
            {
              title: "Profitability Ratios",
              duration: "22:22",
              preview: false
            }
          ]
        }
      ],
      learningOutcomes: [
        "Read and interpret financial statements",
        "Perform ratio analysis to assess company's financial health",
        "Create financial models for business decision making",
        "Evaluate investment opportunities",
        "Understand company valuation techniques"
      ],
      requirements: [
        "No prior financial knowledge required",
        "Microsoft Excel (any version)"
      ]
    },
    {
      id: "4",
      title: "UX/UI Design Masterclass",
      slug: "ux-ui-design-masterclass",
      instructor: "Daniel Walter Scott",
      instructorTitle: "Adobe Certified Instructor",
      instructorImage: "https://i.pinimg.com/736x/4b/d1/df/4bd1df1b12f5e5627d1e578a211de89f.jpg",
      description: "Learn UX/UI design, Figma, Webflow. Build a UX portfolio and design system. Start a career in UX and UI design.",
      category: "Design",
      level: "All Levels",
      rating: 4.9,
      reviewCount: 12458,
      studentsCount: 45720,
      duration: "38h 45m",
      lastUpdated: "2023-11",
      thumbnail: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 84.99,
      discountPrice: 14.99,
      featured: true,
      popular: false,
      bestseller: true,
      new: false,
      curriculum: [
        {
          section: "UX Design Fundamentals",
          lectures: [
            {
              title: "Introduction to UX Design",
              duration: "10:10",
              preview: true
            },
            {
              title: "User Research Methods",
              duration: "22:22",
              preview: false
            }
          ]
        },
        {
          section: "UI Design Essentials",
          lectures: [
            {
              title: "Color Theory for UI",
              duration: "18:35",
              preview: false
            },
            {
              title: "Typography in UI Design",
              duration: "15:22",
              preview: false
            }
          ]
        }
      ],
      learningOutcomes: [
        "Design beautiful user interfaces from scratch",
        "Conduct effective user research",
        "Create interactive prototypes with Figma",
        "Build portfolio-ready UX/UI projects",
        "Understand design systems and component libraries",
        "Design accessible interfaces for all users"
      ],
      requirements: [
        "No design experience required - suitable for complete beginners",
        "A computer (Mac or PC) with internet connection",
        "No paid software required to start"
      ]
    },
    {
      id: "5",
      title: "Digital Marketing Strategy",
      slug: "digital-marketing-strategy",
      instructor: "Megan Adams",
      instructorTitle: "Digital Marketing Consultant",
      instructorImage: "https://i.pinimg.com/736x/4b/d1/df/4bd1df1b12f5e5627d1e578a211de89f.jpg",
      description: "Learn to create comprehensive digital marketing strategies. Covers SEO, social media, email marketing, and PPC advertising.",
      category: "Marketing",
      level: "Intermediate",
      rating: 4.6,
      reviewCount: 8752,
      studentsCount: 35640,
      duration: "28h 20m",
      lastUpdated: "2023-12",
      thumbnail: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 74.99,
      discountPrice: 11.99,
      featured: false,
      popular: false,
      bestseller: false,
      new: true,
      curriculum: [
        {
          section: "Digital Marketing Foundations",
          lectures: [
            {
              title: "The Digital Marketing Landscape",
              duration: "12:10",
              preview: true
            },
            {
              title: "Setting Marketing Objectives",
              duration: "18:22",
              preview: false
            }
          ]
        },
        {
          section: "Search Engine Optimization",
          lectures: [
            {
              title: "SEO Fundamentals",
              duration: "25:35",
              preview: false
            },
            {
              title: "Keyword Research",
              duration: "30:22",
              preview: false
            }
          ]
        }
      ],
      learningOutcomes: [
        "Create comprehensive digital marketing strategies",
        "Optimize websites for search engines (SEO)",
        "Develop effective social media campaigns",
        "Create and optimize Google Ads campaigns",
        "Track and analyze marketing performance",
        "Build effective email marketing funnels"
      ],
      requirements: [
        "Basic understanding of marketing concepts",
        "No technical experience required",
        "Willingness to learn and apply new concepts"
      ]
    },
    {
      id: "6",
      title: "Personal Development Masterclass",
      slug: "personal-development-masterclass",
      instructor: "Scott Paton",
      instructorTitle: "Executive Coach",
      instructorImage: "https://i.pinimg.com/736x/4b/d1/df/4bd1df1b12f5e5627d1e578a211de89f.jpg",
      description: "Master goal-setting, time management, emotional intelligence, and productivity. Transform your life and achieve your dreams.",
      category: "Personal Development",
      level: "All Levels",
      rating: 4.7,
      reviewCount: 15784,
      studentsCount: 68920,
      duration: "22h 30m",
      lastUpdated: "2023-12",
      thumbnail: "https://plus.unsplash.com/premium_photo-1705091981021-67316d06ef72?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 69.99,
      discountPrice: 10.99,
      featured: false,
      popular: true,
      bestseller: false,
      new: false,
      curriculum: [
        {
          section: "Goal Setting",
          lectures: [
            {
              title: "The Science of Goal Setting",
              duration: "15:10",
              preview: true
            },
            {
              title: "SMART Goals Framework",
              duration: "18:22",
              preview: false
            }
          ]
        },
        {
          section: "Time Management",
          lectures: [
            {
              title: "Productivity Systems",
              duration: "22:35",
              preview: false
            },
            {
              title: "The Pomodoro Technique",
              duration: "12:22",
              preview: false
            }
          ]
        }
      ],
      learningOutcomes: [
        "Set and achieve meaningful goals",
        "Develop effective time management systems",
        "Build emotional intelligence and resilience",
        "Create productive daily routines",
        "Overcome procrastination and build discipline",
        "Make better decisions through critical thinking"
      ],
      requirements: [
        "No prerequisites - open to everyone",
        "A desire to improve yourself and your life",
        "Willingness to practice and apply techniques"
      ]
    }
  ];
  
  // Get featured courses
  export const getFeaturedCourses = () => courses.filter(course => course.featured);
  
  // Get popular courses
  export const getPopularCourses = () => courses.filter(course => course.popular);
  
  // Get new courses
  export const getNewCourses = () => courses.filter(course => course.new);
  
  // Get bestseller courses
  export const getBestsellerCourses = () => courses.filter(course => course.bestseller);
  
  // Get course by slug
  export const getCourseBySlug = (slug: string) => courses.find(course => course.slug === slug);
  
  // Get courses by category
  export const getCoursesByCategory = (category: string) => 
    courses.filter(course => course.category.toLowerCase() === category.toLowerCase());
  
  // Get courses by level
  export const getCoursesByLevel = (level: string) => 
    courses.filter(course => course.level.toLowerCase() === level.toLowerCase());
  
  // Get courses by instructor
  export const getCoursesByInstructor = (instructor: string) => 
    courses.filter(course => course.instructor.toLowerCase() === instructor.toLowerCase());
  
  // Filter courses by search term
  export const filterCoursesBySearch = (searchTerm: string) => 
    courses.filter(course => 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
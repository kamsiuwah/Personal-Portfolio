/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kamsiyochukwu Uwah",
  title: "Hi all, I'm Kamsi",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink: "./containers/greeting/resume", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kamsiuwah",
  linkedin: "https://www.linkedin.com/in/kamsiuwah/",
  gmail: "uwahkamsi12@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Build and optimize serverless architectures on AWS (Lambda, DynamoDB, SES), automating large-scale data processing and onboarding workflows"
    ),
    emoji(
      "⚡ Develop data-centric solutions using Python, SQL, and Java for analytics, real-time monitoring, and custom dashboards"
    ),
    emoji(
      "⚡ Create engaging user interfaces and robust backend APIs with frameworks like React, Node.js, and Flask for end-to-end solutions"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Texas Tech University",
      logo: require("./assets/images/TTuLogo.png"),
      subHeader: "Master of Science in Computer Science, Minor in Mathematics",
      duration: "August 2023- December 2024",
      desc: "GPA: 3.81",
      descBullets: [
        "Relevant Coursework: Software Engineering, Computer Architecture, Operating Systems, Computer Networks etc."
      ]
    },
    {
      schoolName: "McNeese State University",
      logo: require("./assets/images/MsuLogo.png"),
      subHeader:
        "Bachelor of Science in Computer Science, Minor in Mathematics",
      duration: "August 2021 - May 2023",
      desc: "GPA: 3.64",
      descBullets: [
        "Relevant Coursework: OOP, Discrete Math, Data Structures, etc."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show the Proficiency Section
  experience: [
    {
      Stack: "Frontend (React, Next.js, Tailwind CSS)",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend (Node.js, Express/NestJS, GraphQL)",
      progressPercentage: "80%"
    },
    {
      Stack: "Databases (MongoDB, PostgreSQL)",
      progressPercentage: "75%"
    },
    {
      Stack: "DevOps (Docker, Kubernetes, CI/CD)",
      progressPercentage: "70%"
    },
    {
      Stack: "Cloud Services (AWS/GCP)",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display CodersRank badges (update username in skillProgress.js)
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Engineer Intern",
      company: "Amazon",
      companylogo: require("./assets/images/amazonLogo.jpg"),
      date: "May 2024 – August 2024",
      desc: "",
      descBullets: [
        "Developed a serverless web application to streamline multi-tenant onboarding for Amazon’s Inventory Instance Management team.",
        "Integrated AWS Lambda, DynamoDB, and SES to create a scalable & efficient backend for automated onboarding processes.",
        "Set up an automatic code review system that triggers for every configuration change, boosting code quality."
      ]
    },
    {
      role: "Consulting Extern",
      company: "PwC",
      companylogo: require("./assets/images/pwcLogo.png"),
      date: "August 2023 – September 2023",
      desc: "",
      descBullets: [
        "Developed strategic outreach plans to identify potential donors using data analysis & segmentation.",
        "Produced reports for nonprofit leadership, translating complex donor data into actionable strategies."
      ]
    },
    {
      role: "Logistics Operations Intern",
      company: "Angelic Solution Spot Inc",
      companylogo: require("./assets/images/AngelicLogo.jpg"),
      date: "June 2023 – August 2023",
      desc: "",
      descBullets: [
        "Handled 15–20 weekly bookings, verifying documentation & initiating shipments within 24 hours.",
        "Coordinated with carriers and clients to maintain a 95% on-time delivery rate."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

// In portfolio.js
const bigProjects = {
  title: "Big Projects",
  subtitle: "Check out some of my recent work",
  projects: [
    {
      // 1st project
      image: require("./assets/images/project1.png"), // Update with your own image file
      projectName: "Smart City Monitoring System", // Change to your project name
      projectDesc:
        "Developed a Flask backend, real-time React.js UI, and a VAR model to predict environmental trends using historical data.",
      footerLink: [
        {
          name: "View Live",
          url: "https://smartcityenvironmentalsystem-frontend.onrender.com" // For example
        }
        // You can add more links for source code, documentation, etc.
        // e.g. { name: "GitHub", url: "https://github.com/..." }
      ]
    },
    {
      // 2nd project
      image: require("./assets/images/project2.png"),
      projectName: "Fitness Coach Webapp",
      projectDesc:
        "Developed a full-stack fitness coach web application using Node.js and Express for the backend, EJS for dynamic server-side rendering, and Tailwind CSS for a responsive, modern UI.",
      footerLink: [
        {
          name: "View Live",
          url: "https://fitness-coach-website.onrender.com"
        }
      ]
    }
  ],
  display: true // set to false if you want to hide this section
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Achievements And Certifications 🏆",
  subtitle: "Highlights of my professional growth and recognitions",
  achievementsCards: [
    {
      title: "Microsoft Excel Associate",
      subtitle: "Earned official certification from Microsoft",
      image: require("./assets/images/excelLogo.png"), // Optional: put a Microsoft/Excel logo here
      imageAlt: "Microsoft Excel Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://certification-link.example.com" // Insert your unique cert link if you have one
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1(346-762-8018)",
  email_address: "uwah14@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

export const translations = {
  en: {
    hero: {
      role: "Full-Stack Developer",
      bio: "I build scalable and performant web applications focused on real-time systems, authentication flows, and clean UI architecture.",
      viewResume: "View Resume",
    },
    about: {
      title: "About",
      p1: "Hi, I'm a second-year Computer Science student and a Front-End Developer who enjoys building modern, scalable web applications. I primarily work with Next.js and React to create responsive and user-friendly interfaces. Beyond the frontend, I'm also experienced in backend development using Node.js and database technologies like MongoDB and MySQL. I have built RESTful APIs, implemented secure authentication systems, and handled deployment and debugging in real-world environments. With a solid foundation in computer science, I aim to write clean, efficient, and scalable code while continuously improving my technical and problem-solving skills.",
      p2: "While I have not yet gained formal work experience, my hands-on approach to learning has allowed me to tackle real-world challenges and continuously improve my craft. I am excited to contribute my skills to collaborative projects and continue growing as a developer.",
      readMore: "Read more",
      showLess: "Show less",
    },
    skills: {
      title: "Skills",
      categories: {
        Frontend: "Frontend",
        Backend: "Backend",
        Database: "Database",
        Tools: "Tools",
        "CS Fundamentals": "CS Fundamentals",
        Mobile: "Mobile",
      },
    },
    github: {
      title: "GitHub Contributions",
    },
    projects: {
      title: "Featured Projects",
      items: [
        {
          title: "GearUp",
          overview:
            "Developed the frontend of a car marketplace platform with responsive UI, vehicle listing pages, and role-based dashboards. Integrated REST APIs for dynamic data rendering and implemented client-side authentication handling. Optimized large vehicle lists using TanStack Virtual, improving render speed by 40% and reducing DOM rendering overhead.",
        },
        {
          title: "MASMAX",
          overview:
            "Developed a comprehensive movie browsing web application featuring secure user authentication, personalized watchlists, and a highly responsive frontend architecture. Implemented RESTful APIs using Java and integrated PostgreSQL for scalable data management.",
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      desc: "I am currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi — my inbox is always open.",
      name: "Name",
      email: "Email",
      message: "Message",
      sendMsg: "Send Message",
      sending: "Sending...",
      sent: "Message Sent ✓",
      successMsg: "✓ Thanks! I'll get back to you soon.",
      errorMsg: "✕ Something went wrong. Please try again.",
    },
    nav: {
      home: "Home",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    footer: {
      text: "Designed & Built by Wai Yan Aung",
    },
  },
  zh: {
    hero: {
      role: "全栈开发工程师",
      bio: "我致力于构建可扩展且高性能的Web应用程序，专注于实时系统、身份验证流程以及整洁的UI架构。",
      viewResume: "查看简历",
    },
    about: {
      title: "关于我",
      p1: "你好，我是一名大二的计算机科学专业学生和一名前端开发人员，热衷于构建现代且可扩展的Web应用。我主要使用 Next.js 和 React 进行响应式和用户友好界面的开发。除了前端，我也具备使用 Node.js 以及 MongoDB、MySQL 等数据库技术进行后端开发的经验。我曾构建 RESTful API，实现安全的身份验证系统，并处理过真实环境中的部署和调试工作。凭借扎实的计算机科学基础，我的目标是编写整洁、高效且可扩展的代码，同时不断提高我的技术和解决问题的能力。",
      p2: "虽然我还没有正式的工作经验，但我通过亲身实践的方法应对了现实世界中的挑战，并不断磨练我的手艺。我很高兴能将我的技能应用到协同项目中，并作为一名开发者不断成长。",
      readMore: "阅读更多",
      showLess: "收起",
    },
    skills: {
      title: "技能",
      categories: {
        Frontend: "前端",
        Backend: "后端",
        Database: "数据库",
        Tools: "工具",
        "CS Fundamentals": "计算机基础",
        Mobile: "移动端",
      },
    },
    github: {
      title: "GitHub 贡献",
    },
    projects: {
      title: "精选项目",
      items: [
        {
          title: "GearUp",
          overview:
            "开发汽车市场平台的前端部分，提供响应式UI、车辆列表页面和基于角色的仪表板。集成了 REST API 用于动态数据渲染，并实现了客户端身份验证处理。使用 TanStack Virtual 优化了大型车辆列表，将渲染速度提升了 40%，并减少了 DOM 渲染开销。",
        },
        {
          title: "MASMAX",
          overview:
            "开发了一款全面的电影浏览Web应用，包含安全的用户身份验证、个性化的待看清单以及高响应式的前端架构。使用 Java 实现了 RESTful API，并集成了 PostgreSQL 以进行可扩展的数据管理。",
        },
      ],
    },
    contact: {
      title: "联系我",
      desc: "我目前正在寻找新的工作机会。如果您有任何问题、项目想法，或者只是一句简单的问候，我都欢迎。我的收件箱始终为您敞开！",
      name: "姓名",
      email: "邮箱",
      message: "留言",
      sendMsg: "发送消息",
      sending: "发送中...",
      sent: "消息已发送 ✓",
      successMsg: "✓ 谢谢！我会尽快回复您。",
      errorMsg: "✕ 出了点问题，请重试。",
    },
    nav: {
      home: "主页",
      skills: "技能",
      projects: "项目",
      contact: "联系",
    },
    footer: {
      text: "由 Wai Yan Aung 设计与开发",
    },
  },
};

export type Language = "en" | "zh";
export type Translations = typeof translations.en;

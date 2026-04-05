export const translations = {
  en: {
    hero: {
      role: "Front-End Developer",
      bio: "I build scalable and performant web applications focused on real-time systems, authentication flows, and clean UI architecture.",
      viewResume: "View Resume",
    },
    about: {
      title: "About",
      p1: "I’m a second-year Computer Science student and Front-End Developer focused on building scalable, high-performance web applications. I specialize in Next.js and React, delivering clean, responsive, and user-centric interfaces.",
      p2: "I don’t wait for experience — I build it. Through hands-on projects, I’ve strengthened my system thinking, and developed a strong engineering mindset. I’m driven to write clean, efficient code, contribute to impactful products, and grow into an engineer who delivers both technical excellence and real user value.",
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
            "Developed a comprehensive movie browsing web application featuring secure user authentication with Supabase, personalized watchlists, and a highly responsive frontend architecture.",
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
      role: "前端开发工程师",
      bio: "我致力于构建可扩展且高性能的Web应用程序，专注于实时系统、身份验证流程以及整洁的UI架构。",
      viewResume: "查看简历",
    },
    about: {
      title: "关于我",
      p1: "我是一名大二计算机科学学生兼前端开发者，专注于构建可扩展、高性能的 Web 应用。我专长于 Next.js 和 React，能够交付整洁、响应迅速且以用户为中心的界面。",
      p2: "我不会等待经验——我会主动创造经验。通过亲手实践的项目，我强化了系统性思维，并培养了扎实的工程思维。我始终坚持编写整洁、高效的代码，致力于为有影响力的产品做出贡献，并成长为一名既追求技术卓越又创造真实用户价值的工程师。",
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
            "开发了一款全面的电影浏览 Web 应用，包含基于 Supabase 的安全用户身份验证、个性化待看清单以及高响应式的前端架构。",
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

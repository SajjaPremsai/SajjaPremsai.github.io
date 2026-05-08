const projects = [
  {
    id: 1,
    title: "Doc.ai - Automate Your Documentation with AI",
    description: "Built a GitHub App that automates documentation work by analyzing code changes, generating README updates and inline comments, then opening PRs with the suggested docs. This helps engineering teams keep repos documented without manual overhead.",
    link: "https://docai-seven.vercel.app/",
    github: null,
    deployed: "Sep 2025 – Nov 2025",
    tags: ["Artificial Intelligence", "GitHub", "Python", "Flask"]
  },
  {
    id: 2,
    title: "Drowsiness Detection using CNN",
    description: "Developed a real-time fatigue detection model using Inception V3 and OpenCV to identify open and closed eye states. The system evaluates eye scores continuously and flags drowsiness instantly for driver safety applications.",
    link: null,
    github: null,
    deployed: "2024",
    tags: ["Deep Learning", "TensorFlow", "OpenCV", "Computer Vision"],
    contributors: [
      {
        name: "Contributor 1",
        link: "https://www.linkedin.com/in/mohansai-betha/",
        image: "https://media.licdn.com/dms/image/v2/D5603AQEC2bqvKnJTlw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1726759930908?e=1779926400&v=beta&t=yVqEt4quQ5esdZLVGGewCtGggDbEMT2vyJtqK37v75s"
      },
      {
        name: "Contributor 2",
        link: "https://www.linkedin.com/in/lokesh-koyya-658987284/",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQGsR0VxVpg6uA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1707234944555?e=1779926400&v=beta&t=PHG7WfZ_AooRaEBkdTQGWjt813Fz1r58getN4hOUCsY"
      }
    ]
  },
  {
    id: 3,
    title: "HTTP Server Implementation using Java",
    description: "Built a fully functional HTTP server from scratch for the Codecrafters challenge, handling raw requests, routing, static files, headers, and status codes using only core Java libraries.",
    link: null,
    github: "https://github.com/SajjaPremsai/codecrafters-http-server-java",
    deployed: "2024",
    tags: ["Core Java", "TCP/IP", "Networking", "HTTP"]
  },
  {
    id: 4,
    title: "Result Analysis Portal",
    description: "Designed and developed a portal for Avanthi Institute to parse JNTUK result PDFs, store data in MySQL, and display performance analytics through role-based dashboards for admin, faculty, and students.",
    link: "https://aietta.ac.in/avanthi_portal/",
    github: null,
    deployed: "2023-2024",
    tags: ["PHP", "MySQL", "XAMPP", "PDF Parsing"],
    contributors: [
        {
          name: "Contributor 1",
        link: "https://www.linkedin.com/in/dharma-raju-gangu-389332109/",
        image: "https://media.licdn.com/dms/image/v2/C5603AQGtP-cpqY_cCw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1600271665589?e=1779926400&v=beta&t=ydyguZPHdWURfb-A0-BKW5SscPPniI8G9ZPw5by-G94"
        },
        {
          name: "Contributor 2",
          link: "https://www.linkedin.com/in/lokesh-koyya-658987284/",
          image: "https://media.licdn.com/dms/image/v2/D5603AQEC2bqvKnJTlw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1726759930908?e=1779926400&v=beta&t=yVqEt4quQ5esdZLVGGewCtGggDbEMT2vyJtqK37v75s"
        }
    ]
  },
  {
    id: 5,
    title: "Visual Search for Products",
    description: "Implemented an e-commerce image search feature that finds similar products by comparing uploaded image embeddings with cosine similarity, optimized for jewelry and visual merchandising.",
    link: null,
    github: "https://github.com/SajjaPremsai/Visual-Search-for-Products-",
    deployed: "2024",
    tags: ["React", "MongoDB", "Cosine Similarity", "Computer Vision"],
    contributors: [
      {
        name: "Contributor 1",
        link: "https://linkedin.com/",
        image: "https://media.licdn.com/dms/image/v2/D5603AQEC2bqvKnJTlw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1726759930908?e=1779926400&v=beta&t=yVqEt4quQ5esdZLVGGewCtGggDbEMT2vyJtqK37v75s"
      }
    ]
  }
];

export default projects;

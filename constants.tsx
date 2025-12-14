import React from 'react';
import { 
  Shield, 
  Brain, 
  Terminal, 
  Database, 
  Cloud, 
  Code, 
  Layout, 
  Server
} from 'lucide-react';
import { Experience, Project, SkillCategory, Education } from './types';

export const PROFILE = {
  name: "Hamza Hassan",
  title: "DevOps, AI & ML Engineer | CyberSec",
  location: "Peshawar, Pakistan",
  phone: "+92-349-9333821",
  email: "hamxahassan500@gmail.com",
};

export const EDUCATION: Education = {
  degree: "Bachelor of Science in Computer Science",
  institution: "University of Agriculture Peshawar (UAP), Pakistan",
  year: "2024",
  details: [
    "Final Year Project: AI-Powered Intrusion Detection System using NSL-KDD Dataset",
    "Relevant Coursework: Computer Networks, Network Security, Cryptography, Machine Learning, Operating Systems, Python"
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    role: "DevOps, AI & ML Engineer",
    company: "Strings Technologies Pvt Ltd",
    location: "Peshawar, Pakistan",
    period: "Jan 2024 – Present",
    description: [
      "Developed and automated Odoo ERP modules using Python and XML for business process optimization.",
      "Built, trained, and deployed machine learning models for predictive analytics.",
      "Implemented AI-powered tools and automation workflows to enhance business operations.",
      "Designed RESTful API integrations for AI/ML model services.",
      "Contributed to CI/CD pipelines, containerized deployments using Docker and GitHub Actions."
    ]
  },
  {
    role: "Advanced Python Trainer",
    company: "NAVTTC – NUML Peshawar",
    location: "Peshawar",
    period: "Sep 2025 – Dec 2025",
    description: [
      "Delivered hands-on training in advanced Python programming, automation, OOP, and APIs.",
      "Guided students through real-world projects (data pipelines, automation scripts, ML basics).",
      "Designed structured course content aligned with NAVTTC curriculum standards."
    ]
  },
  {
    role: "Cybersecurity Intern",
    company: "Strings Technologies Pvt Ltd",
    location: "Peshawar, Pakistan",
    period: "Aug 2023 – Dec 2023",
    description: [
      "Participated in development and testing of cybersecurity solutions for SME clients.",
      "Performed vulnerability assessments and mitigated web application vulnerabilities (OWASP).",
      "Used Wireshark, Burp Suite, and OWASP ZAP for security testing."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "AI-Based Anomaly Detection",
    category: "Cybersecurity & AI",
    description: [
      "Hybrid intrusion detection system using Autoencoders, Isolation Forest, and One-Class SVM.",
      "Achieved >90% detection accuracy on NSL-KDD dataset.",
      "Real-time monitoring dashboard using Flask."
    ],
    tech: ["Python", "Flask", "TensorFlow", "Scikit-learn"]
  },
  {
    title: "ICG Chemicals Website & Odoo",
    category: "Full Stack & DevOps",
    description: [
      "Developed company website using React.js.",
      "Migrated/refactored Odoo modules from v16 to v19.",
      "Automated deployment pipelines using Docker & GitHub Actions."
    ],
    tech: ["React.js", "Odoo", "Docker", "PostgreSQL"]
  },
  {
    title: "Web App Security Testing",
    category: "Cybersecurity Research",
    description: [
      "Conducted vulnerability assessments on simulated e-commerce platforms.",
      "Detected XSS and SQL Injection vulnerabilities.",
      "Provided mitigation strategies and risk analysis."
    ],
    tech: ["Burp Suite", "OWASP ZAP", "SQLMap"]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Cybersecurity",
    items: ["IDS/IPS", "Threat Modeling", "Vulnerability Scanning", "Penetration Testing", "OWASP Top 10", "Wireshark", "Burp Suite"]
  },
  {
    category: "AI & Machine Learning",
    items: ["TensorFlow", "Scikit-learn", "Pandas", "Computer Vision", "Predictive Analytics", "Deep Learning"]
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "GitHub Actions", "Azure AI Fundamentals", "Linux Administration", "CI/CD Pipelines", "Firebase"]
  },
  {
    category: "Development",
    items: ["Python (Advanced)", "React.js", "Node.js", "TypeScript", "REST APIs", "Odoo ERP", "Web Scraping"]
  }
];

export const CERTIFICATIONS = [
  "Microsoft Certified: Azure AI Fundamentals (AI-900)",
  "NAVTTC – Artificial Intelligence & Machine Learning Certification",
  "Cisco Networking Academy – Introduction to Cybersecurity"
];

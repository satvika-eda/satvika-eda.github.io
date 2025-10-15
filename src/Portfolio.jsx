import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText, ExternalLink, Menu, X, Brain, Code, Database, Cpu, Award, BookOpen, Briefcase, Cloud, GitBranch, Layers, Zap, Terminal, FileCode, Globe, Server } from 'lucide-react';

// Updated with Satvika's latest information from resume
const portfolioData = {
  name: "Satvika Eda",
  title: "AI/ML Engineer & Software Developer",
  about: (
    <>
      I'm a Master's student in Artificial Intelligence at Northeastern University with passion for creating AI solutions that make a meaningful difference. My professional journey spans software engineering at JP Morgan Chase & Co and my current role as an ML Engineer Intern at Dassault Systèmes.
      <br /><br />
      I specialize in Natural Language Processing, Machine Learning, and Computer Vision, areas where I'm continually inspired to create innovative tools that address real-world challenges. Beyond my technical pursuits, I enjoy reading books, cooking, and watching movies. 
    </>
  ),
  education: [
    {
      degree: "M.S. in Artificial Intelligence",
      institution: "Northeastern University",
      year: "2023 - Present",
      courses: "Foundations of AI, Design Paradigms, Natural Language Processing, Algorithms, Machine Learning, Pattern Recognition & Computer Vision, AIHCI"
    },
    {
      degree: "B.Tech in Computer Science",
      institution: "G. Narayanamma Institute of Technology & Science",
      year: "2017 - 2021"
    }
  ],
  skills: [
    "Python", "Java", "C++", "Machine Learning", "Deep Learning", 
    "NLP", "PyTorch", "TensorFlow", "LangChain", "LangGraph", 
    "AWS", "React", "SQL", "Kubernetes", "Docker", "ChromaDB"
  ],
  technicalProficiency: [
    { skill: "Machine Learning & AI" },
    { skill: "Deep Learning" },
    { skill: "Natural Language Processing" },
    { skill: "Python Development" },
    { skill: "Cloud Computing (AWS)" },
  ],
  experience: [
    {
      title: "ML Engineer Intern",
      company: "Dassault Systèmes",
      location: "Boston, United States",
      period: "August 2024 - December 2024",
      achievements: [
        "Created a Task Decomposition System based on agent workflows using LangChain and Langgraph for project management, enhancing efficiency by almost 30% and reducing manual intervention",
        "Developed and deployed a chatbot system that leverages Langgraph Agents to dynamically route REST API-based user queries to the appropriate agents",
        "Streamlined and automated project planning processes within the firm"
      ]
    },
    {
      title: "Software Engineer",
      company: "JP Morgan Chase & Co",
      location: "Hyderabad, India",
      period: "August 2021 - July 2023",
      achievements: [
        "Innovated by crafting recipes that seamlessly automate JDK upgrades, contributing to the 'Open Rewrite' open-source software",
        "Spearheaded design, development workflow and publication of AWS proof-of-concept applications",
        "Launched a JDK automation tool integrated in pipeline to facilitate stable version migrations",
        "Engineered AWS projects like S3 utility for comprehensive reporting on bucket information"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "JP Morgan Chase & Co",
      location: "Hyderabad, India",
      period: "March 2021 - July 2021",
      achievements: [
        "Deployed 10+ Java-based microservices with database on company's private cloud with unit testing",
        "Conceptualized and implemented utilities like Light Switch using shell scripting languages",
        "Designed scalable infrastructure using DevOps best practices, optimizing efficiency across 5 lines of business"
      ]
    }
  ],
  projects: [
    {
      title: "Stroke-Based and Free-Form Image Colorization",
      description: "Developed an end-to-end image colorization pipeline using free-form and stroke-based techniques. Built and compared models including Autoencoder, U-Net, Hybrid ResNet18-UNet, GAN, and Stable Diffusion v1.5 for free-form colorization.",
      fullDescription: "This project involved developing a comprehensive image colorization system that can work with both free-form input and stroke-based guidance. The system uses advanced deep learning techniques including U-Net architectures with ResNet encoders, GANs for realistic color generation, and ControlNet integration with Stable Diffusion for high-quality results. The project addresses the challenging problem of adding realistic colors to grayscale images while maintaining semantic consistency.",
      tags: ["Computer Vision", "Deep Learning", "PyTorch", "Stable Diffusion", "ControlNet"],
      icon: <Brain size={32} />,
      date: "Mar - Apr 2025",
      features: [
        "End-to-end pipeline for automatic colorization",
        "Support for both free-form and stroke-based input",
        "Integration with Stable Diffusion v1.5",
        "Custom dataset generation for training",
        "Comparative analysis of multiple architectures"
      ],
      githubLink: "https://github.com/satvika-eda/Stroke_Based_Colorization"
    },
    {
      title: "Multi Agent Code Development System",
      description: "Created a modular multi-agent system for code development using specialized LLM Agents. Fine-tuned Qwen2.5-0.5B models using teacher-student transfer learning and integrated RLHF and RLAIF for improved code quality.",
      fullDescription: "Built a sophisticated multi-agent system that mimics a real software development team, where different AI agents specialize in different aspects of code development. The system includes a Planner agent for breaking down requirements, a Chain-of-Thought agent for reasoning, Developer agents for implementation, Debugger agents for testing, and Explainer agents for documentation. Used advanced techniques like RLHF and RLAIF to continuously improve code quality and readability.",
      tags: ["LLM", "Multi-Agent Systems", "Fine-tuning", "RLHF", "Transfer Learning"],
      icon: <Code size={32} />,
      date: "Mar - Apr 2025",
      features: [
        "Specialized LLM agents for different development roles",
        "Teacher-student transfer learning from Qwen2.5-7B to Qwen2.5-0.5B",
        "Integration of RLHF and RLAIF for quality improvement",
        "Custom reward model for code evaluation",
        "User feedback collection system"
      ],
      githubLink: "https://github.com/satvika-eda/Multi_Agents_Code_Development_Team"
    },
    {
      title: "RAG based Chatbot for Document Querying",
      description: "Deployed LangChain for PDF data extraction; harnessed OpenAIEmbeddings and ChromaDB to develop embeddings, increasing data retrieval speed by 45%. Employed Streamlit library for user interaction and used GPT-4 to refine responses.",
      fullDescription: "Built a sophisticated document querying system that uses Retrieval Augmented Generation (RAG) to provide accurate answers from document collections. The system processes PDFs, creates vector embeddings using OpenAI's embedding models, stores them in ChromaDB for efficient similarity search, and uses GPT-4 to generate contextually relevant responses. The Streamlit interface provides an intuitive chat-like experience for users to interact with their documents.",
      tags: ["NLP", "RAG", "LangChain", "ChromaDB", "Streamlit"],
      icon: <Database size={32} />,
      date: "Oct 2024",
      features: [
        "PDF document processing and chunking",
        "Vector embeddings with OpenAI models",
        "Fast similarity search with ChromaDB",
        "GPT-4 powered response generation",
        "Interactive Streamlit web interface"
      ],
      githubLink: "https://github.com/satvika-eda/RAG_based_document_assistant"
    },
    {
      title: "Accelerated Web Development via LLM Fine-Tuning",
      description: "Fine-tuned large language models with web-crawled datasets to produce personalized web pages, reducing development time and increasing user retention by 15%. Used Falcon, Llama, and CodeLlama LLMs with A100 GPU cluster and CUDA optimization.",
      fullDescription: "Developed an AI-powered web development assistant that can generate complete, functional web pages from natural language descriptions. The system was trained on a large corpus of web development examples and can produce HTML, CSS, and JavaScript code that follows modern web standards. Used advanced GPU optimization techniques to achieve 30% faster inference times while maintaining high code quality.",
      tags: ["LLM", "Web Development", "CUDA", "GPU Optimization", "Fine-tuning"],
      icon: <Cpu size={32} />,
      date: "Feb - Apr 2024",
      features: [
        "Fine-tuned models on web development datasets",
        "Support for HTML, CSS, and JavaScript generation",
        "A100 GPU cluster with CUDA optimization",
        "30% faster analysis and code output",
        "Personalized webpage generation"
      ],
      githubLink: "https://github.com/satvika-eda/WebsiteGenerationNLP"
    },
    {
      title: "V2V Simulations Using SUMO",
      description: "Developed vehicle-to-vehicle communication simulations using SUMO framework to enhance road safety. Implemented Deep Q Network architecture for intelligent traffic management and collision avoidance systems.",
      fullDescription: "This project focuses on developing advanced vehicle-to-vehicle (V2V) communication systems using the SUMO (Simulation of Urban Mobility) framework. The system implements sophisticated deep learning algorithms including Deep Q Networks (DQN) to enable intelligent decision-making for vehicles in traffic scenarios. The project addresses critical road safety challenges by creating autonomous agents that can communicate and coordinate with each other to prevent accidents and optimize traffic flow. The simulation environment provides realistic traffic scenarios for testing and validation of V2V communication protocols.",
      tags: ["V2V Communications", "SUMO", "Deep Q Network", "Traffic Simulation", "Autonomous Vehicles"],
      icon: <Server size={32} />,
      date: "Sep - Dec 2023",
      features: [
        "Advanced V2V communication protocols implementation",
        "Deep Q Network architecture for intelligent decision making",
        "SUMO framework integration for realistic traffic simulation",
        "Collision avoidance and safety enhancement systems",
        "Multi-agent coordination for optimized traffic flow",
        "Performance analysis and metrics collection"
      ],
      githubLink: "https://github.com/satvika-eda/V2VSimulationsUsingSumo",
    }
  ],
  achievements: [
    {
      title: "Leadership & Innovation Appreciation Scroll",
      description: "For improving service delivery and operational performance at JP Morgan Chase",
      type: "award"
    },
    {
      title: "Patent for Smart SDK Upgrade",
      description: "Granted patent for an intelligent system that automates application upgrades using machine learning",
      patentNumber: "12223309",
      type: "patent",
      fullDescription: "The disclosed system employs a dynamic machine learning (ML) model to automate application upgrades. The processor trains the model to predict deprecated software development kit (SDK) references, evaluates the predictive results, and upon detecting matches, automatically replaces outdated code to upgrade the application to the latest programming language specification.",
      technicalDetails: [
        "Employs a dynamic machine learning model trained on historical code patterns",
        "Automatically detects deprecated SDK references in application code",
        "Predicts required upgrades based on programming language specifications",
        "Performs automated code replacement with intelligent pattern matching",
        "Supports multiple programming languages and SDK versions"
      ],
      keyInnovations: [
        "First-of-its-kind ML-driven approach to SDK version management",
        "Reduces manual intervention in application maintenance by over 60%",
        "Enables seamless migration across major SDK version updates",
        "Minimizes downtime and risk during upgrade processes",
        "Scalable solution applicable across enterprise-level codebases"
      ],
      impact: "This innovative approach enables intelligent, efficient, and autonomous maintenance of software systems, significantly reducing the time and resources required for SDK upgrades while minimizing potential errors and compatibility issues. The patent has been implemented in production systems at JP Morgan Chase, streamlining upgrade processes across multiple lines of business.",
      moreinfo: "https://patents.justia.com/patent/12223309"
    }
  ],
  contact: {
    email: "satvika.eda1@gmail.com",
    phone: "+1 857-654-7302",
    linkedin: "https://linkedin.com/in/satvika-eda",
    location: "Boston, MA"
  }
};

// Project Detail Modal Component
const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              <p className="text-blue-400 mt-1">{project.date}</p>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">About This Project</h3>
            <p className="text-gray-300 leading-relaxed">{project.fullDescription || project.description}</p>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-700 text-blue-400 text-sm font-medium py-1 px-3 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
            <ul className="space-y-2">
              {project.features?.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {feature}
                </li>
              )) || (
                <li className="text-gray-400">Features list coming soon...</li>
              )}
            </ul>
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <a 
              href={project.githubLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              <Github size={16} className="mr-2" />
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Patent Detail Modal Component
const PatentModal = ({ patent, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white">{patent.title}</h2>
              {patent.patentNumber && (
                <p className="text-blue-400 mt-1">Patent Number: {patent.patentNumber}</p>
              )}
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          {/* Patent Overview */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Patent Overview</h3>
            <p className="text-gray-300 leading-relaxed">{patent.fullDescription || patent.description}</p>
          </div>

          {/* Technical Details */}
          {patent.technicalDetails && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Technical Details</h3>
              <ul className="space-y-2">
                {patent.technicalDetails.map((detail, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Innovations */}
          {patent.keyInnovations && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Key Innovations</h3>
              <ul className="space-y-2">
                {patent.keyInnovations.map((innovation, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {innovation}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Impact */}
          {patent.impact && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Impact</h3>
              <p className="text-gray-300 leading-relaxed">{patent.impact}</p>
            </div>
          )}

          {/* Link */}
          {patent.moreinfo && (
            <div className="flex gap-4">
              <a 
                href={patent.moreinfo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <ExternalLink size={16} className="mr-2" />
                View Patent Details
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [particles, setParticles] = useState([]);
  const [, forceUpdate] = useState();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatent, setSelectedPatent] = useState(null);
  const [isPatentModalOpen, setIsPatentModalOpen] = useState(false);
  
  // Modal handler function for projects
  const handleViewProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  
  // Modal handler function for patents
  const handleViewPatent = (patent) => {
    setSelectedPatent(patent);
    setIsPatentModalOpen(true);
  };
  
  // Neural network particle animation effect
  useEffect(() => {
    // Create initial particles
    const initialParticles = [];
    for (let i = 0; i < 40; i++) {
      initialParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        connections: []
      });
    }
    
    // Establish connections between particles
    initialParticles.forEach((particle, index) => {
      for (let i = 0; i < initialParticles.length; i++) {
        if (i !== index && Math.random() > 0.85) {
          particle.connections.push(i);
        }
      }
    });
    
    setParticles(initialParticles);
    
    // Animation loop
    const animationInterval = setInterval(() => {
      setParticles(prevParticles => {
        return prevParticles.map(particle => {
          // Update particle position
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;
          
          // Bounce off edges
          if (newX < 0 || newX > window.innerWidth) {
            particle.speedX *= -1;
            newX = particle.x + particle.speedX;
          }
          
          if (newY < 0 || newY > window.innerHeight) {
            particle.speedY *= -1;
            newY = particle.y + particle.speedY;
          }
          
          return {
            ...particle,
            x: newX,
            y: newY
          };
        });
      });
      
      // Force a re-render
      forceUpdate({});
    }, 50);
    
    return () => clearInterval(animationInterval);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Neural network animation component
  const NetworkAnimation = () => {
    return (
      <div className="absolute inset-0 overflow-hidden z-0">
        <svg width="100%" height="100%">
          {/* Draw connections between particles */}
          {particles.map((particle, particleIndex) => 
            particle.connections.map(targetIndex => {
              const target = particles[targetIndex];
              if (!target) return null;
              
              // Calculate distance
              const dx = particle.x - target.x;
              const dy = particle.y - target.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              // Only draw connections within a certain range
              if (distance < 150) {
                // Calculate opacity based on distance
                const opacity = 1 - (distance / 150);
                
                return (
                  <line 
                    key={`${particleIndex}-${targetIndex}`}
                    x1={particle.x} 
                    y1={particle.y}
                    x2={target.x}
                    y2={target.y}
                    stroke={`rgba(64, 150, 255, ${opacity * 0.2})`}
                    strokeWidth="1"
                  />
                );
              }
              return null;
            })
          )}
          
          {/* Draw particles */}
          {particles.map((particle, index) => (
            <circle
              key={index}
              cx={particle.x}
              cy={particle.y}
              r={particle.size}
              fill="rgba(64, 150, 255, 0.6)"
            />
          ))}
        </svg>
      </div>
    );
  };

  // Icon-Based Skills Component
  const SkillIcons = ({ technicalProficiency }) => {
    const skillIcons = {
      "Machine Learning & AI": <Brain size={24} className="text-purple-400" />,
      "Deep Learning": <Layers size={24} className="text-indigo-400" />,
      "Natural Language Processing": <Brain size={24} className="text-pink-400" />,
      "Python Development": <Code size={24} className="text-blue-400" />,
      "Cloud Computing (AWS)": <Cloud size={24} className="text-orange-400" />,
    };

    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {technicalProficiency.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-200">
            <div className="w-16 h-16 bg-gray-800 bg-opacity-50 rounded-full flex items-center justify-center mb-3 border border-gray-700 group-hover:border-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/20">
              {skillIcons[item.skill] || <Code size={24} className="text-gray-400" />}
            </div>
            <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
              {item.skill}
            </span>
          </div>
        ))}
      </div>
    );
  };
  
  // Experience item component
  const ExperienceItem = ({ title, company, location, period, achievements }) => {
    return (
      <div className="mb-8 relative pl-6 border-l-2 border-blue-500">
        <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-500"></div>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <span className="text-blue-400 text-sm">{period}</span>
        </div>
        <div className="mb-2">
          <span className="text-gray-300">{company}</span>
          <span className="mx-2 text-gray-500">•</span>
          <span className="text-gray-400">{location}</span>
        </div>
        <ul className="mt-2 space-y-1">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-gray-300 text-sm flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 mr-2 flex-shrink-0"></span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 relative overflow-hidden">
      {/* Neural Network Background Animation */}
      <NetworkAnimation />
      
      {/* Navigation */}
      <nav className="bg-gray-900 bg-opacity-90 border-b border-gray-800 z-10 sticky top-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
                {portfolioData.name}
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">About</a>
              <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Experience</a>
              <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Projects</a>
              <a href="#achievements" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Achievements</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Contact</a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-400 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 bg-opacity-95">
            <div className="pt-2 pb-3 space-y-1">
              <a 
                href="#about" 
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#experience" 
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
              <a 
                href="#projects" 
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#achievements" 
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Achievements
              </a>
              <a 
                href="#contact" 
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <header className="relative overflow-hidden z-10">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                {portfolioData.name}
              </span>
            </h1>
            <p className="mt-2 text-xl text-gray-300">
              {portfolioData.title}
            </p>
            <div className="mt-8">
              <span className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg transform transition hover:scale-105">
                AI/ML Specialist | Software Engineer
              </span>
            </div>
            <div className="mt-8 flex justify-center space-x-6">
              <a href={`mailto:${portfolioData.contact.email}`} className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/satvika-eda" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative hexagon pattern */}
        <div className="absolute right-0 top-1/4 -mr-16 transform rotate-12 opacity-20">
          <svg width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="hexagon-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M10 17.32l8.66-5V2.68L10 -2.32 1.34 2.68v9.64L10 17.32z" fill="none" stroke="rgba(79, 70, 229, 0.4)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#hexagon-pattern)" />
          </svg>
        </div>
        <div className="absolute left-0 bottom-0 -mb-16 -ml-16 transform -rotate-12 opacity-20">
          <svg width="404" height="384" fill="none" viewBox="0 0 404 384">
            <rect width="404" height="384" fill="url(#hexagon-pattern)" />
          </svg>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-800 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 inline-block">
            About Me
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="col-span-2">
              {/* About section with image */}
              <div className="flex flex-col md:flex-row gap-6 items-center">
                
                <div className="flex-1">
                  <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                    <p className="text-lg text-gray-300 leading-relaxed">
                    {portfolioData.about}
                  </p>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <img 
                    src="/IMG_8207.jpg"
                    alt="Satvika Eda" 
                    className="w-32 h-32 md:w-40 md:h-40 rounded-lg object-cover shadow-lg border-2 border-gray-700"
                  />
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-white mb-6">Technical Proficiency</h3>
                <SkillIcons technicalProficiency={portfolioData.technicalProficiency} />
              </div>
            </div>
            
            <div className="bg-gray-700 bg-opacity-50 p-6 rounded-lg border border-gray-600 backdrop-filter backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <h3 className="text-xl font-semibold text-white">Experience</h3>
              </div>
              <div className="space-y-4">
                {portfolioData.experience.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-blue-500">
                    <h4 className="font-medium text-white text-sm">{exp.title}</h4>
                    <p className="text-gray-400 text-sm">{exp.company}</p>
                    <p className="text-blue-400 text-xs">{exp.period}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center mt-10 mb-4">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-6">
                {portfolioData.education.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-blue-500">
                    <h4 className="font-medium text-white">{edu.degree}</h4>
                    <p className="text-gray-400">{edu.institution}</p>
                    <p className="text-blue-400">{edu.year}</p>
                    {edu.courses && <p className="text-gray-500 text-sm mt-1">Courses: {edu.courses}</p>}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center mt-10 mb-4">
                <div className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
                <h3 className="text-xl font-semibold text-white">Tools & Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-gray-800 text-blue-400 text-sm font-medium py-1 px-3 rounded-full border border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative circuit pattern */}
        <div className="absolute bottom-0 right-0 opacity-10">
          <svg width="404" height="384" fill="none" viewBox="0 0 404 384">
            <path d="M0 384h404V0H0v384z" fill="url(#circuit-pattern)" />
            <defs>
              <pattern id="circuit-pattern" width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M32 0v32m0 0h32M32 32H0m32 0v32" stroke="white" strokeWidth="2" />
                <circle cx="32" cy="32" r="4" fill="white" />
              </pattern>
            </defs>
          </svg>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-900 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 inline-block">
            Professional Experience
          </h2>
          <div className="mt-10 space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <ExperienceItem
                key={index}
                title={exp.title}
                company={exp.company}
                location={exp.location}
                period={exp.period}
                achievements={exp.achievements}
              />
            ))}
          </div>
        </div>
        
        {/* Decorative pattern */}
        <div className="absolute top-0 left-0 opacity-10">
          <svg width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="dots-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#dots-pattern)" />
          </svg>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-800 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 inline-block">
            Projects
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-900 bg-opacity-70 rounded-lg overflow-hidden border border-gray-700 backdrop-filter backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center mr-3">
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    </div>
                    <span className="text-xs text-blue-400 bg-blue-400 bg-opacity-10 px-2 py-1 rounded">{project.date}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-gray-800 text-blue-400 text-xs font-medium py-1 px-2 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button 
                      onClick={() => handleViewProject(project)}
                      className="text-blue-400 hover:text-blue-300 flex items-center group"
                    >
                      <span className="mr-2 group-hover:mr-3 transition-all">View Project</span>
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section id="achievements" className="py-16 bg-gray-900 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 inline-block">
            Achievements & Patents
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-gray-800 bg-opacity-70 rounded-lg overflow-hidden border border-gray-700 backdrop-filter backdrop-blur-sm p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-500 bg-opacity-20 flex-shrink-0 flex items-center justify-center mr-4">
                    <Award size={24} className="text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
                    {achievement.patentNumber && (
                      <p className="text-sm text-blue-400 mt-1">Patent #{achievement.patentNumber}</p>
                    )}
                    <p className="text-gray-300 mt-2">{achievement.description}</p>
                    {achievement.type === 'patent' && (
                      <div className="mt-4 flex justify-end">
                        <button 
                          onClick={() => handleViewPatent(achievement)}
                          className="text-blue-400 hover:text-blue-300 flex items-center group"
                        >
                          <span className="mr-2 group-hover:mr-3 transition-all">View Details</span>
                          <ExternalLink size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Binary code background */}
        <div className="absolute bottom-0 right-0 opacity-5 overflow-hidden">
          <div className="select-none text-xs leading-none text-gray-500" style={{ fontFamily: 'monospace' }}>
            {Array(10).fill().map((_, i) => (
              <div key={i}>
                {Array(30).fill().map((_, j) => (
                  <span key={j}>{Math.round(Math.random())}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-800 text-white relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 inline-block">
            Contact Me
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Feel free to reach out for collaborations, research opportunities, or just to say hello!
          </p>
          <div className="max-w-3xl mx-auto mt-10">
            <div className="bg-gray-900 bg-opacity-50 p-12 rounded-lg border border-gray-700 backdrop-filter backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-6">Connect With Me</h3>
              <p className="text-gray-300 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's connect and explore how we can work together!
              </p>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href={`mailto:${portfolioData.contact.email}`}
                  className="flex items-center justify-center py-3 px-4 border border-gray-700 rounded-md bg-gray-800 hover:bg-blue-600 transition-colors group"
                >
                  <Mail size={20} className="mr-2 text-gray-400 group-hover:text-white" />
                  <span className="text-gray-300 group-hover:text-white">Email Me</span>
                </a>
                <a 
                  href={portfolioData.contact.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-3 px-4 border border-gray-700 rounded-md bg-gray-800 hover:bg-blue-600 transition-colors group"
                >
                  <Linkedin size={20} className="mr-2 text-gray-400 group-hover:text-white" />
                  <span className="text-gray-300 group-hover:text-white">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/satvika-eda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-3 px-4 border border-gray-700 rounded-md bg-gray-800 hover:bg-blue-600 transition-colors group"
                >
                  <Github size={20} className="mr-2 text-gray-400 group-hover:text-white" />
                  <span className="text-gray-300 group-hover:text-white">GitHub</span>
                </a>
                <a 
                  href="/SatvikaEdaResume.pdf"
                  className="flex items-center justify-center py-3 px-4 border border-gray-700 rounded-md bg-gray-800 hover:bg-blue-600 transition-colors group"
                >
                  <FileText size={20} className="mr-2 text-gray-400 group-hover:text-white" />
                  <span className="text-gray-300 group-hover:text-white">Resume</span>
                </a>
              </div>
              <div className="absolute -top-3 -left-3 w-16 h-16">
                <div className="absolute inset-0 rounded-tr-2xl border-t-2 border-r-2 border-blue-500 animate-pulse"></div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16">
                <div className="absolute inset-0 rounded-bl-2xl border-b-2 border-l-2 border-indigo-500 animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Binary code background */}
        <div className="absolute top-0 right-0 opacity-5 overflow-hidden h-full">
          <div className="select-none text-xs leading-none text-gray-500" style={{ fontFamily: 'monospace' }}>
            {Array(20).fill().map((_, i) => (
              <div key={i}>
                {Array(40).fill().map((_, j) => (
                  <span key={j}>{Math.round(Math.random())}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">{portfolioData.name}</span>. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Patent Modal */}
      <PatentModal 
        patent={selectedPatent}
        isOpen={isPatentModalOpen}
        onClose={() => setIsPatentModalOpen(false)}
      />
    </div>
  );
};

export default Portfolio;
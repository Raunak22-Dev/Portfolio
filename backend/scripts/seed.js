require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('../models/Project');

// The exact data structure previously hardcoded in the frontend
const projectsData = [
  { 
    title: "Task Management Platform", 
    type: "Full-Stack App", 
    tech: ["React", "Node.js", "MongoDB", "Redux", "Tailwind"], 
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1600&auto=format&fit=crop",
    shortDescription: "A real-time workspace collaboration tool with kanban boards and websocket chat.",
    longDescription: "This Task Management Platform is a full-stack, real-time collaboration environment designed for remote engineering teams. It allows users to create workspaces, manage granular permissions, drag-and-drop tasks across kanban boards, and chat in real-time.",
    features: [
      "Real-time bidirectional WebSocket synchronization",
      "JWT-based secure authentication flow",
      "Drag-and-drop visual Kanban interface",
      "Comprehensive RESTful API architecture"
    ]
  },
  { 
    title: "Predictive Weather Model", 
    type: "Machine Learning", 
    tech: ["Python", "TensorFlow", "Pandas", "NumPy"], 
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1600&auto=format&fit=crop",
    shortDescription: "A deep learning neural network capable of predicting severe weather patterns.",
    longDescription: "Built an extensive deep learning pipeline that ingests historical meteorological data from NOAA APIs to forecast severe weather anomalies. The model achieved an 89% accuracy rate over a 3-month validation phase.",
    features: [
      "Deep Neural Network architecture utilizing TensorFlow",
      "Ingestion pipelines handling 50GB+ of historical data",
      "Data normalization utilizing Pandas and NumPy",
      "Interactive data visualization dashboard"
    ]
  },
  { 
    title: "Weather Dashboard", 
    type: "API Integration", 
    tech: ["JavaScript", "OpenWeather API", "Chart.js"], 
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1600&auto=format&fit=crop",
    shortDescription: "A sleek frontend dashboard pulling real-time global weather analytics.",
    longDescription: "A responsive, glassmorphic UI dashboard that relies on the OpenWeather API to provide instantaneous meteorological readings alongside interactive historical charting.",
    features: [
      "Dynamic DOM manipulation based on external state",
      "Asynchronous API consumption with Promise mapping",
      "Interactive canvas plotting using Chart.js"
    ]
  },
  { 
    title: "Analytics Tracker", 
    type: "Data Visualization", 
    tech: ["Vue.js", "D3.js", "Firebase"], 
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    shortDescription: "A real-time analytics hub rendering interactive SVG data sets via D3.",
    longDescription: "An internal commercial analytics platform tailored to track user telemetry. It seamlessly aggregates events through Firebase and maps them directly to complex D3 spatial visualizations.",
    features: [
      "Complex SVG manipulation tied to reactive state",
      "Real-time document listening via Firebase Firestore",
      "Custom authentication middleware"
    ]
  },
  { 
    title: "Crypto Portfolio App", 
    type: "Web3/Blockchain", 
    tech: ["React", "Ethers.js", "Solidity", "Hardhat"], 
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1600&auto=format&fit=crop",
    shortDescription: "A decentralized application (dApp) tracking wallet balances across chains.",
    longDescription: "An advanced Web3 application that interfaces natively with MetaMask. Users can track their ERC-20 token holdings across networks and view live price updates injected through Chainlink oracles.",
    features: [
      "Native MetaMask wallet integration via Ethers.js",
      "Smart Contract deployment using Hardhat framework",
      "Direct blockchain state-reading capabilities"
    ]
  },
  { 
    title: "E-Commerce Storefront", 
    type: "Full-Stack App", 
    tech: ["Next.js", "Stripe", "Prisma", "PostgreSQL"], 
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop",
    shortDescription: "A scalable digital storefront featuring server-side rendering and Stripe checkout.",
    longDescription: "Developed a production-grade digital marketplace using the Next.js App Router. The backend leverages Prisma ORM over PostgreSQL to handle inventory, while Stripe handles global transaction routing safely.",
    features: [
      "Server-Side Rendering (SSR) for robust SEO",
      "Complete Stripe API checkout integration",
      "Transactional state management via PostgreSQL",
      "Responsive, mobile-first tailwind design"
    ]
  }
];

// Execute Seeding
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Successfully connected to MongoDB Atlas. Seeding Database...');
    
    // Clear the collection to prevent duplicates during testing
    await Project.deleteMany({});
    
    // Insert all documents
    await Project.insertMany(projectsData);
    
    console.log('Migration Complete! All 6 core projects are now safely inside MongoDB.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Seeding failed! Please check your MongoDB URI.', error.message);
    process.exit(1);
  });

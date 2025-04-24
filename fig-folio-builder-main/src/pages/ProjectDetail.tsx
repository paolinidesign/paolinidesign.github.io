
import React from "react";
import { useParams, Link } from "react-router-dom";
import Button from "@/components/Button";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real application, you would fetch project data based on the ID
  // This is mock data for demonstration purposes
  const projects = {
    "project-1": {
      title: "Project Name",
      description: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
      fullDescription: `This project was created as a way to showcase my design process and approach to creating user interfaces in Figma. I wanted to demonstrate how I structure my files, use components, and apply design principles to create a cohesive and functional design.
      
      The design process involved creating wireframes, defining a color palette and typography, and then designing the high-fidelity mockups. I also created interactive prototypes to demonstrate the user flow and interactions.`,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format&fit=crop",
      technologies: ["Figma", "Adobe Photoshop", "Illustrator"],
      tasks: ["UI Design", "UX Design", "Wireframing", "Prototyping"],
      year: "2023",
    },
    "project-2": {
      title: "Project Name",
      description: "What was your role, your deliverables, if the project was personal, freelancing.",
      fullDescription: `For this project, I worked as a freelance UI/UX designer to redesign the user interface of an existing web application. The client wanted to improve the user experience and modernize the look and feel of their product.
      
      I conducted user research, created user personas, and designed wireframes and high-fidelity mockups. I also worked closely with the development team to ensure the designs were implemented correctly.`,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      technologies: ["Sketch", "InVision", "Zeplin"],
      tasks: ["User Research", "Wireframing", "UI Design", "Usability Testing"],
      year: "2022",
    },
    "project-3": {
      title: "Project Name",
      description: "You can also add in this description the type of the project, if it was for web, mobile, electron.",
      fullDescription: `This was a web application project designed to help users manage their tasks and improve productivity. The goal was to create a clean, intuitive interface that would make task management simple and efficient.
      
      I designed both the web and mobile versions of the application, ensuring a consistent experience across devices. The design system I created included components for various states and interactions, making it easy for the development team to implement.`,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
      technologies: ["Figma", "Adobe XD", "Proto.io"],
      tasks: ["UI Design", "Design System Creation", "Responsive Design"],
      year: "2021",
    },
    "project-4": {
      title: "Mobile App Design",
      description: "A mobile application designed to help users track their fitness goals and daily activities.",
      fullDescription: `This mobile application was designed to help users track their fitness goals and daily activities. The challenge was to create an interface that would be easy to use during workouts while providing comprehensive tracking features.
      
      I designed the user interface with a focus on simplicity and accessibility, using bold colors and large touch targets to make the app easy to use even during physical activity. The design included features for tracking various types of workouts, setting goals, and visualizing progress.`,
      image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=800&auto=format&fit=crop",
      technologies: ["Sketch", "Principle", "Adobe Photoshop"],
      tasks: ["Mobile UI Design", "User Flow Design", "Prototyping"],
      year: "2022",
    },
    "project-5": {
      title: "Website Redesign",
      description: "Complete redesign of a company website to improve user experience and conversion rate.",
      fullDescription: `This project involved a complete redesign of a company website with the goal of improving user experience and increasing conversion rates. The existing website had an outdated design and poor navigation structure, resulting in high bounce rates and low engagement.
      
      I conducted a thorough analysis of the existing website, identified pain points, and created a new design that focused on clear navigation, compelling content presentation, and effective call-to-action elements. The result was a modern, responsive website that better showcased the company's products and services.`,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
      technologies: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
      tasks: ["Website Design", "User Research", "Information Architecture", "Responsive Design"],
      year: "2023",
    },
  };
  
  const project = projects[id as keyof typeof projects];
  
  if (!project) {
    return (
      <div className="section">
        <div className="container">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="mb-6">The project you're looking for doesn't exist.</p>
            <Button href="/projects">Back to Projects</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="container">
        <div className="mb-8">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-portfolio-dark hover:text-portfolio-yellow transition-colors"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Projects
          </Link>
        </div>
        
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-portfolio-gray max-w-3xl text-lg">{project.description}</p>
        </div>
        
        <div className="rounded-lg overflow-hidden mb-10">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto object-cover"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <div className="space-y-4 text-portfolio-gray">
              {project.fullDescription.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">Year</h3>
              <p>{project.year}</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">Technologies</h3>
              <ul className="list-disc list-inside">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">Tasks</h3>
              <ul className="list-disc list-inside">
                {project.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <Link 
            to={`/projects/${getPrevProjectId(id)}`} 
            className="inline-flex items-center text-portfolio-dark hover:text-portfolio-yellow transition-colors"
          >
            <ArrowLeft className="mr-2" size={16} />
            Previous Project
          </Link>
          
          <Link 
            to={`/projects/${getNextProjectId(id)}`} 
            className="inline-flex items-center text-portfolio-dark hover:text-portfolio-yellow transition-colors"
          >
            Next Project
            <svg 
              className="ml-2 w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Helper functions to get next and previous project IDs
const getPrevProjectId = (currentId: string) => {
  const projectIds = ["project-1", "project-2", "project-3", "project-4", "project-5"];
  const currentIndex = projectIds.indexOf(currentId);
  const prevIndex = currentIndex <= 0 ? projectIds.length - 1 : currentIndex - 1;
  return projectIds[prevIndex];
};

const getNextProjectId = (currentId: string) => {
  const projectIds = ["project-1", "project-2", "project-3", "project-4", "project-5"];
  const currentIndex = projectIds.indexOf(currentId);
  const nextIndex = currentIndex >= projectIds.length - 1 ? 0 : currentIndex + 1;
  return projectIds[nextIndex];
};

export default ProjectDetail;

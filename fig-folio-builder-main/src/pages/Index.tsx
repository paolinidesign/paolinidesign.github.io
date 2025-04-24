
import React from "react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { Link } from "react-router-dom";

const Index = () => {
  const projectData = [
    {
      id: "project-1",
      title: "Project Name",
      description: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format&fit=crop"
    },
    {
      id: "project-2", 
      title: "Project Name",
      description: "What was your role, your deliverables, if the project was personal, freelancing.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
    },
    {
      id: "project-3",
      title: "Project Name", 
      description: "You can also add in this description the type of the project, if it was for web, mobile, electron.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <Hero />
      
      <section className="section bg-gray-50">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 underline-custom inline-block">Projects</h2>
          </div>
          
          <div>
            {projectData.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                projectId={project.id}
                imagePosition={index % 2 === 0 ? "right" : "left"}
              />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/projects" 
              className="inline-flex items-center text-portfolio-dark font-medium hover:text-portfolio-yellow transition-colors"
            >
              View All Projects
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
      </section>
    </>
  );
};

export default Index;

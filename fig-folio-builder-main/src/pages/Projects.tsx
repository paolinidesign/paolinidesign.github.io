
import React from "react";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: "project-1",
      title: "Project Name",
      description: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format&fit=crop",
    },
    {
      id: "project-2",
      title: "Project Name",
      description: "What was your role, your deliverables, if the project was personal, freelancing.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    },
    {
      id: "project-3",
      title: "Project Name",
      description: "You can also add in this description the type of the project, if it was for web, mobile, electron.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
    },
    {
      id: "project-4",
      title: "Mobile App Design",
      description: "A mobile application designed to help users track their fitness goals and daily activities.",
      image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=800&auto=format&fit=crop",
    },
    {
      id: "project-5",
      title: "Website Redesign",
      description: "Complete redesign of a company website to improve user experience and conversion rate.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 underline-custom inline-block">Projects</h1>
          <p className="text-portfolio-gray max-w-3xl">
            Here are some of my recent projects. Each project showcases my skills and approach to design challenges.
          </p>
        </div>
        
        <div>
          {projects.map((project, index) => (
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
      </div>
    </section>
  );
};

export default Projects;

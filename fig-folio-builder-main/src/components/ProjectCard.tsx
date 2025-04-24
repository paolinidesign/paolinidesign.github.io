
import React from "react";
import Button from "./Button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  imagePosition?: "left" | "right";
  projectId: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  imagePosition = "right",
  projectId,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white rounded-lg shadow-sm overflow-hidden mb-12">
      <div
        className={`p-8 flex flex-col justify-center ${
          imagePosition === "right" ? "order-1" : "order-1 lg:order-2"
        }`}
      >
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-portfolio-gray mb-6">{description}</p>
        <div>
          <Button href={`/projects/${projectId}`} variant="secondary">
            View Project
          </Button>
        </div>
      </div>
      
      <div
        className={`overflow-hidden ${
          imagePosition === "right" ? "order-2" : "order-2 lg:order-1"
        }`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProjectCard;


import React from "react";
import Hero from "@/components/Hero";
import Button from "@/components/Button";

const About = () => {
  return (
    <>
      <Hero showButtons={false} />
      
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 underline-custom">About Me</h2>
            
            <div className="space-y-6 text-portfolio-gray">
              <p>
                I am a UI/UX designer with a passion for creating beautiful and functional digital experiences. With [X] years of experience in the field, I have worked on a wide range of projects for clients across various industries.
              </p>
              
              <p>
                My approach to design is user-centered, focusing on creating intuitive and accessible interfaces that solve real problems. I believe that good design is not just about aesthetics, but about understanding user needs and delivering solutions that meet those needs.
              </p>
              
              <h3 className="text-2xl font-bold mt-10 mb-4 text-portfolio-dark">Skills</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">Design</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>User Interface Design</li>
                    <li>User Experience Design</li>
                    <li>Wireframing &amp; Prototyping</li>
                    <li>Design Systems</li>
                    <li>Responsive Web Design</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">Tools</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Figma</li>
                    <li>Adobe XD</li>
                    <li>Sketch</li>
                    <li>Invision</li>
                    <li>Adobe Creative Suite</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mt-10 mb-4 text-portfolio-dark">Experience</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold">Senior UI/UX Designer</h4>
                  <p className="text-portfolio-lightGray">Company Name | 2020 - Present</p>
                  <p className="mt-2">
                    Responsible for designing user interfaces and experiences for web and mobile applications. Collaborated with product managers and developers to create intuitive and engaging digital products.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold">UI Designer</h4>
                  <p className="text-portfolio-lightGray">Previous Company | 2018 - 2020</p>
                  <p className="mt-2">
                    Designed user interfaces for various client projects. Worked closely with the UX team to implement design solutions based on user research and feedback.
                  </p>
                </div>
              </div>
              
              <div className="mt-10">
                <Button href="/contacts" variant="primary">Contact Me</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

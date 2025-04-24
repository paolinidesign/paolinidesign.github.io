
import React, { useState } from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import Button from "@/components/Button";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 underline-custom inline-block">Get in Touch</h1>
            <p className="text-portfolio-gray mb-8">
              Feel free to reach out if you're looking for a designer, have a question, or just want to connect.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                  <Mail className="text-portfolio-yellow" size={20} />
                </div>
                <div>
                  <p className="text-sm text-portfolio-lightGray">Email</p>
                  <a 
                    href="mailto:info@madelyntorff.com" 
                    className="font-medium hover:text-portfolio-yellow transition-colors"
                  >
                    info@madelyntorff.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                  <Phone className="text-portfolio-yellow" size={20} />
                </div>
                <div>
                  <p className="text-sm text-portfolio-lightGray">Phone</p>
                  <a 
                    href="tel:+11234567890" 
                    className="font-medium hover:text-portfolio-yellow transition-colors"
                  >
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                  <Linkedin className="text-portfolio-yellow" size={20} />
                </div>
                <div>
                  <p className="text-sm text-portfolio-lightGray">LinkedIn</p>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-medium hover:text-portfolio-yellow transition-colors"
                  >
                    linkedin.com/in/madelyntorff
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-1 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-portfolio-yellow focus:border-portfolio-yellow focus:outline-none transition"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-1 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-portfolio-yellow focus:border-portfolio-yellow focus:outline-none transition"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-1 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-portfolio-yellow focus:border-portfolio-yellow focus:outline-none transition"
                  ></textarea>
                </div>
                
                <div>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

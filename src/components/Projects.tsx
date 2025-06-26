
import { ExternalLink, Github, Code, Database, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "DineDash – Food Delivery Platform",
      description: "DineDash is a robust, full stack food delivery platform designed to streamline the end-to-end ordering experience for both customers and vendors. Developed using React.js for the front end, Django REST for the backend, and PostgreSQL for the database, the platform supports secure order tracking for 500+ users.",
      description1: "The project features a cloud-ready microservices architecture deployed via AWS EC2 with CI/CD pipelines automated through Jenkins, enabling rapid, reliable updates. A fully responsive UI and performance-enhancing elements like caching and optimized APIs ensure a seamless experience across all devices.",
      description2: "Whether you're a hungry user or a restaurant partner, DineDash demonstrates how scalable architecture, clean UI/UX, and cloud-native deployment come together to deliver a modern food delivery solution.",
      tech: ["React.js", "Django REST", "PostgreSQL", "Jenkins, AWS EC2" ],
      github: "https://github.com",
      live: "https://dineDashDelivery.netlify.app",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 2,
      title: "AI-Powered Disease Prediction SaaS Platform",
      description: "This AI-based SaaS application empowers users to receive preliminary disease predictions through a clean, intuitive interface built with Streamlit and Flask, and backed by TensorFlow models. Designed to be accessible and scalable, the app currently supports over 500 users seeking rapid, data-driven health insights.Deployed via Docker on AWS EC2, the platform achieves 35% faster inference times and a 12% boost in model accuracy through rigorous model optimization and efficient cloud-based deployment.",
      description2: "This project demonstrates the fusion of AI, cloud computing, and intuitive UX—turning complex health data into actionable predictions for everyday users.",
      description1: "Deployed via Docker on AWS EC2, the platform achieves 35% faster inference times and a 12% boost in model accuracy through rigorous model optimization and efficient cloud-based deployment.",
      tech: ["TensorFlow", "Streamlit", "Flask", "AWS EC2", "Docker"],
      github: "https://github.com/akshata1710/DiseasePredictor",
      live: "https://diseasenaanpredictor.netlify.app",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      
    },
    {
      id: 3,
      title: "Credit Card Fraud Detection System (ML Project)",
      description: "This machine learning project focused on building a high-performance fraud detection system capable of analyzing 20,000+ credit card transactions in real time. Developed using TensorFlow and deployed via Flask APIs on AWS EC2 with Docker, the system achieved 92% accuracy and maintained 99.9% uptime in production.",
      description1: "The project involved the complete ML lifecycle—from data preprocessing and feature engineering to model training, optimization, and deployment—culminating in a 50% reduction in inference latency.",
      description2: "This solution showcases how intelligent automation and scalable cloud infrastructure can be combined to combat financial fraud effectively.",
      tech: ["TensorFlow", "Flask", "Docker", "AWS EC2", "Python", "Pandas, NumPy"],
      github: "https://github.com/akshata1710/creditcard-csv",
      live: "https://creditcardccfrauddetection.netlify.app",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=400&fit=crop"
    },
    
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-cyan-400">&gt;</span> my_projects<span className="text-green-400">.showcase()</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mb-8"></div>
          <p className="text-gray-300 text-lg">
            <span className="text-purple-400">#</span> Here are some projects I've built that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-lg border border-green-400/30 bg-gray-800 hover:border-green-400/50 transition-all duration-300 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`grid ${project.featured ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-6 p-6`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-green-400 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm border border-cyan-400/30">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-gray-300 leading-relaxed">{[project.description, <br></br>, project.description1, <br></br>, project.description2]}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-green-400/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:border-green-400 hover:bg-gray-600 transition-all duration-300 group/btn"
                    >
                      <Github className="h-4 w-4 text-gray-300 group-hover/btn:text-green-400" />
                      <span className="text-gray-300 group-hover/btn:text-green-400">Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-green-400/20 border border-green-400/30 rounded-lg hover:bg-green-400/30 transition-all duration-300 group/btn"
                    >
                      <ExternalLink className="h-4 w-4 text-green-400" />
                      <span className="text-green-400">Live Demo</span>
                    </a>
                  </div>
                </div>

                
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/akshata1710"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800 border border-green-400/30 rounded-lg hover:border-green-400 hover:bg-gray-700 transition-all duration-300"
          >
            <Github className="h-5 w-5 text-green-400" />
            <span className="text-green-400">View More on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

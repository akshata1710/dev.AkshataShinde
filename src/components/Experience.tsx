
import { MapPin, Calendar, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Developer Intern",
      company: "Minds Beyond Measure (NGO)",
      location: "New York, NY",
      duration: "Feb 2025 - Apr 2025",
      type: "Internship",
      description: [
        "🧩 Developed and maintained full-stack applications using the MERN stack (MongoDB, Express, React, Node.js), integrated with Docker, enabling real-time features that boosted user engagement by 30%.",
        "🏗️ Designed scalable backend architecture and crafted clean RESTful APIs following OOP principles, focusing on maintainability, performance, and clarity.",
        "🚀 Automated CI/CD workflows using GitHub Actions and Jenkins, ensuring fast, consistent deployments across environments.",
        "✅ Implemented unit testing, practiced Agile collaboration, and used Git version control to ensure system stability, fast iterations, and team responsiveness."
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Jenkins", "Docker", "JavaScript", "Git"]
    },
    {
      id: 2,
      title: "Software Developer Intern (ML & Backend)",
      company: "Trivia Softwares",
      location: "Mumbai, India",
      duration: "Aug 2023 – Dec 2023",
      type: "Internship",
      description: [
        "🧠 Built AI-powered recommendation systems and regression models using PyTorch and TensorFlow, leading to a 28% increase in user engagement.",
        "🌐 Deployed ML models into production-ready APIs, efficiently handling 100K+ daily requests with high uptime and optimized latency.",
        "🔄 Automated ETL and data mining pipelines, enabling real-time dashboards that supported data-driven decisions across 5 internal business teams.",
        
      ],
      tech: ["Python", "Flask/FastAPI", "PyTorch", "REST APIs", "Pandas, NumPy","Plotly, Matplotlib", "Docker"]
    },
    {
      id: 3,
      title: "Software Engineer Intern – ML Systems & Performance",
      company: "LabMentix",
      location: "Remote",
      duration: "Jan 2022 – Jun 2022",
      type: "Internship",
      description: [
        "🚀 Optimized PyTorch-based neural network training across distributed GPU clusters, boosting model throughput by 20%.",
        "🔍 Scaled a range of ML models—including classification, recommendation, and pattern recognition systems—by identifying and resolving system-level performance bottlenecks.",
        "🤝 Worked closely with hardware and ML infra teams to fine-tune parallel compute architectures, resulting in highly efficient, reliable ML pipelines and deployments.",
        
      ],
      tech: ["PyTorch", "Python", "ML Model Optimization", "Parallel Computing", "Linux Shell Scripting"]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-cyan-400">&gt;</span> work_experience<span className="text-green-400">.timeline</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mb-8"></div>
          <p className="text-gray-300 text-lg">
            <span className="text-purple-400">#</span> My professional journey in software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-cyan-400 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-4 h-4 bg-green-400 rounded-full border-4 border-gray-900 hidden md:block"></div>
                
                <div className="md:ml-16 bg-gray-800 border border-green-400/30 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-green-400 mb-1">{exp.title}</h3>
                      <div className="flex items-center space-x-2 text-cyan-400 mb-2">
                        <Building className="h-4 w-4" />
                        <span className="font-semibold">{exp.company}</span>
                        <span className="px-2 py-1 bg-cyan-400/20 rounded-full text-xs">{exp.type}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400 space-y-1">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4 text-gray-300">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-800 border border-green-400/30 rounded-lg p-6 inline-block">
            <div className="text-cyan-400 text-lg font-semibold mb-2">
              Want to know more about my experience?
            </div>
            <a
              href="https://drive.google.com/file/d/1CBpwggle8icfDKVy5A82ck40HQurVrL5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-green-400/20 border border-green-400/30 rounded-lg hover:bg-green-400/30 transition-all duration-300"
            >
              <span className="text-green-400">Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

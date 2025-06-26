
import { Code, Database, Server, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Backend', icon: Server, items: ['Python', 'Django', 'Flask', 'FastAPI', 'PostgreSQL', 'MongoDB'] },
    { category: 'Frontend', icon: Code, items: ['JavaScript', 'React', 'Vue.js', 'TypeScript', 'HTML/CSS', 'Tailwind', 'Redux', 'Bootstrap'] },
    { category: 'Data and Pipelines', icon: Database, items: ['PostgreSQL', 'MongoDB', 'Redis', 'ETL', 'Pandas', 'NumPy'] },
    { category: 'DevOps & Tools', icon: Smartphone, items: ['Jenkins', 'GitHub Actions', 'Docker', 'JIRA', 'Postman'] },
    { category: 'ML & AI', icon: Smartphone, items: ['TensorFlow','PyTorch','OpenCV','Random Forest'] },
    { category: 'Cloud & Distributed Systems', icon: Smartphone, items: ['AWS (EC2, S3, Redshift)','Kubernetes (GKE)','Heroku',] },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-cyan-400">&gt;</span> about_me<span className="text-green-400">.py</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="bg-gray-800 border border-green-400/30 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">about.py</span>
              </div>
              <div className="text-sm">
                <div className="text-purple-400 mb-2"># About Akshata</div>
                <div className="text-gray-300 leading-relaxed">
                  <span className="text-cyan-400">class</span> <span className="text-yellow-400">AkshataShinde</span>:
                  <br />
                  <span className="ml-4 text-cyan-400">def</span> <span className="text-green-400">__init__</span>(self):
                  <br />
                  <span className="ml-8">self.role = </span><span className="text-orange-400">"Software Development Engineer "</span>
                  <br />
                  <span className="ml-8">self.languages = [</span><span className="text-orange-400">"Python", "JavaScript"</span>]
                  <br />
                  <span className="ml-8">self.passion = </span><span className="text-orange-400">"Creating seamless user experiences"</span>
                  <br />
                  <span className="ml-8">self.experience = </span><span className="text-orange-400">"2 years"</span>
                </div>
              </div>
            </div>

            <div className="text-gray-300 space-y-4">
              <p>
                I’m a passionate and results-driven software engineer with hands-on experience building scalable fullstack applications using the MERN stack, Django REST Framework, and modern DevOps practices. A recent Master of Computer Science graduate from Pace University , I lead development efforts at Minds Beyond Measure, an education-focused nonprofit, where I design secure APIs, implement CI/CD pipelines, and build inclusive, high-performing user experiences.
              </p>
              <p>My strengths lie in architecting maintainable backend systems, designing responsive frontends in React, and deploying cloud-native solutions using AWS, Jenkins, and GitHub Actions. I enjoy solving real-world problems through clean code, data-driven insights, and collaborative teamwork.I’m driven by curiosity, a growth mindset, and a deep commitment to delivering meaningful tech that empowers users.
                </p>
              <p>
                 When I’m not coding, you’ll likely find me exploring the city or grooving to the beats of early 2000s Bollywood hits.

              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              <span className="text-green-400">#</span> Technical Skills
            </h3>
            <div className="grid gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-800 border border-green-400/30 rounded-lg p-4 hover:border-green-400/50 transition-colors">
                  <div className="flex items-center space-x-3 mb-3">
                    <skill.icon className="h-5 w-5 text-cyan-400" />
                    <h4 className="text-lg font-semibold text-green-400">{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-cyan-400/50 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "akshatashinde1710@email.com",
      href: "mailto:akshatashinde1710@email.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (201) 273-6572",
      href: "tel:+12012736572"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New York City, NY",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/akshata1710",
      color: "text-green-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/akshata-shinde1718/",
      color: "text-cyan-400"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-cyan-400">&gt;</span> contact_me<span className="text-green-400">.connect()</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mb-8"></div>
          <p className="text-gray-300 text-lg">
            <span className="text-purple-400">#</span> Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800 border border-green-400/30 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">contact.py</span>
              </div>

              <div className="text-sm mb-6">
                <div className="text-purple-400 mb-2"># Get in touch</div>
                <div className="text-gray-300">
                  <span className="text-cyan-400">def</span> <span className="text-green-400">get_contact_info</span>():
                  <br />
                  <span className="ml-4 text-cyan-400">return</span> {'{'}
                  <br />
                  <span className="ml-8 text-orange-400">"status"</span>: <span className="text-orange-400">"Available for opportunities"</span>,
                  <br />
                  <span className="ml-8 text-orange-400">"response_time"</span>: <span className="text-orange-400">"24 hours"</span>
                  <br />
                  <span className="ml-4">{'}'}</span>
                </div>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-gray-700/50 rounded-lg">
                    <info.icon className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-400">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-cyan-400 hover:text-green-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-gray-300">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-600">
                <h4 className="text-green-400 font-semibold mb-4">Connect with me:</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-700 border border-gray-600 rounded-lg hover:border-current hover:bg-gray-600 transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 border border-green-400/30 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-400 text-sm ml-4">send_message.py</span>
            </div>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors resize-vertical"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-green-400/20 border border-green-400/30 rounded-lg hover:bg-green-400/30 transition-all duration-300"
              >
                <Send className="h-5 w-5 text-green-400" />
                <span className="text-green-400">Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import { motion } from 'framer-motion';
import { HiBriefcase, HiCheckCircle } from 'react-icons/hi';
import { experience } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-dark-200 dark:bg-dark-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent hidden md:block" />

              {/* Experience Card */}
              <div className="glass-effect rounded-2xl p-6 md:p-8 hover:border-primary transition-all duration-300 relative">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute -left-4 md:left-4 top-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/50"
                >
                  <HiBriefcase size={24} className="text-white" />
                </motion.div>

                {/* Content */}
                <div className="md:ml-16">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                      <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold mt-2 md:mt-0">
                        {exp.duration}
                      </span>
                    </div>

                    <p className="text-xl text-gradient font-semibold mb-4">{exp.role}</p>

                    <div className="space-y-3">
                      {exp.contributions.map((contribution, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                          className="flex items-start gap-3 group"
                        >
                          <HiCheckCircle
                            size={20}
                            className="text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform"
                          />
                          <p className="text-gray-300 leading-relaxed">{contribution}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="mt-6 flex flex-wrap gap-2"
                    >
                      {['TypeScript', 'React', 'Node.js', 'WebSocket', 'Socket.io', 'Docker', 'Tailwind CSS'].map(
                        (tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-dark-300 text-gray-300 rounded-full text-sm hover:bg-primary hover:text-white transition-colors cursor-default"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Projects Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 grid md:grid-cols-3 gap-4"
              >
                {[
                  { name: 'TeamRetro', desc: 'Real-time Agile retrospective platform', link: 'https://team-retro.onrender.com' },
                  { name: 'BuildBuddy', desc: 'Architect-customer collaboration platform', link: 'https://buildbuddy-app.onrender.com/' },
                  { name: 'Planning Poker', desc: 'Real-time estimation tool', link: 'https://github.com/tejasmali6131/Planning-Poker' }
                ].map((project, idx) => (
                  <a
                    key={idx}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-effect rounded-xl p-4 hover:border-primary transition-colors group cursor-pointer"
                  >
                    <h4 className="font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                      🚀 {project.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {project.desc}
                    </p>
                  </a>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

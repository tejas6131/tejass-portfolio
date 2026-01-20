import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCode, HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolio';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'React', 'Node.js', 'Docker', 'TypeScript'];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'All') return true;
    return project.techStack.some((tech) => tech.toLowerCase().includes(filter.toLowerCase()));
  });

  return (
    <section id="projects" className="section-padding bg-dark-100 dark:bg-dark-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development,
            real-time systems, and modern web technologies.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filterName) => (
            <button
              key={filterName}
              onClick={() => setFilter(filterName)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === filterName
                  ? 'bg-primary text-white shadow-lg shadow-primary/50'
                  : 'glass-effect text-gray-300 hover:text-primary hover:border-primary'
              }`}
            >
              {filterName}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 group"
              >
                {/* Project Header */}
                <div className="p-6 bg-gradient-to-br from-primary/10 to-purple-600/10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <HiCode size={30} className="text-primary" />
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 glass-effect rounded-lg hover:bg-primary hover:text-white transition-colors"
                        >
                          <FaGithub size={20} />
                        </a>
                      )}
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 glass-effect rounded-lg hover:bg-primary hover:text-white transition-colors"
                        >
                          <HiExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  {/* Features */}
                  {project.features && project.features.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-dark-300 text-gray-300 rounded-full text-sm hover:bg-primary hover:text-white transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show message if no projects match filter */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400 py-12"
          >
            No projects found with the selected filter.
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;

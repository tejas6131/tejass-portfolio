import { motion } from 'framer-motion';
import { HiAcademicCap } from 'react-icons/hi';
import { education } from '../data/portfolio';

const Education = () => {
  return (
    <section id="education" className="section-padding bg-dark-200 dark:bg-dark-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline connector */}
              {index < education.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-primary to-purple-600 hidden md:block" />
              )}

              {/* Education Card */}
              <div className="glass-effect rounded-2xl p-6 md:p-8 hover:border-primary transition-all duration-300 relative">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -left-4 md:left-4 top-8 w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-primary/50"
                >
                  <HiAcademicCap size={24} className="text-white" />
                </motion.div>

                {/* Content */}
                <div className="md:ml-16">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white">{edu.institution}</h3>
                    <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold mt-2 md:mt-0">
                      {edu.duration}
                    </span>
                  </div>

                  <p className="text-xl text-gradient font-semibold mb-2">{edu.degree}</p>

                  {edu.cgpa && (
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-dark-300 text-gray-300 rounded-full text-sm font-semibold">
                        CGPA: {edu.cgpa}
                      </span>
                    </div>
                  )}

                  {edu.dissertation && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="mt-4 p-4 bg-dark-300/50 rounded-xl border-l-4 border-primary"
                    >
                      <p className="text-sm font-semibold text-gray-400 mb-1">
                        Dissertation:
                      </p>
                      <p className="text-gray-300 leading-relaxed">{edu.dissertation}</p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: 'Current Status', value: 'M.Tech Student' },
            { label: 'Specialization', value: 'Computer Engineering' },
            { label: 'Graduation', value: '2026' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-xl p-6 text-center"
            >
              <p className="text-sm text-gray-400 mb-2">{item.label}</p>
              <p className="text-xl font-bold text-gradient">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

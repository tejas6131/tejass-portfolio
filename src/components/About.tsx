import { motion } from 'framer-motion';
import { HiCode, HiLightningBolt, HiGlobe } from 'react-icons/hi';
import { professionalSummary, careerGoal } from '../data/portfolio';

const About = () => {
  const features = [
    {
      icon: <HiCode size={30} />,
      title: 'Full-Stack Development',
      description: 'Expert in React, Node.js, TypeScript with production-ready applications'
    },
    {
      icon: <HiLightningBolt size={30} />,
      title: 'Real-Time Systems',
      description: 'WebSockets, Socket.io for collaborative real-time applications'
    },
    {
      icon: <HiGlobe size={30} />,
      title: 'Scalable Solutions',
      description: 'Docker containerization and distributed system architecture'
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark-200 dark:bg-dark-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-3xl blur-2xl opacity-30" />
              <img
                src="/images/about_me.jpg"
                alt="Tejas Mali"
                className="relative w-full rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              {professionalSummary}
            </p>

            <div className="p-4 glass-effect rounded-xl border-l-4 border-primary">
              <p className="text-gray-300 italic">
                🎯 {careerGoal}
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-start gap-4 p-4 glass-effect rounded-xl hover:border-primary transition-colors cursor-pointer"
                >
                  <div className="text-primary mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

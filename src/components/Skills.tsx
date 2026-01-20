import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiIntellijidea,
  SiEclipseide,
  SiAndroidstudio,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const Skills = () => {
  const iconMap: { [key: string]: JSX.Element } = {
    'C': <SiC size={40} />,
    'C++': <SiCplusplus size={40} />,
    'JavaScript': <SiJavascript size={40} />,
    'TypeScript': <SiTypescript size={40} />,
    'React.js': <SiReact size={40} />,
    'Node.js': <SiNodedotjs size={40} />,
    'Express.js': <SiExpress size={40} />,
    'HTML': <SiHtml5 size={40} />,
    'CSS': <SiCss3 size={40} />,
    'Tailwind CSS': <SiTailwindcss size={40} />,
    'SQL': <SiMysql size={40} />,
    'MongoDB': <SiMongodb size={40} />,
    'Git': <SiGit size={40} />,
    'GitHub': <SiGithub size={40} />,
    'GitLab': <SiGitlab size={40} />,
    'Docker': <SiDocker size={40} />,
    'VS Code': <VscCode size={40} />,
    'IntelliJ': <SiIntellijidea size={40} />,
    'Eclipse': <SiEclipseide size={40} />,
    'Android Studio': <SiAndroidstudio size={40} />,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section-padding bg-dark-100 dark:bg-dark-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillCategory, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-effect rounded-2xl p-6 hover:border-primary transition-colors"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gradient">
                {skillCategory.category}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              >
                {skillCategory.items.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center justify-center p-4 bg-dark-300 rounded-xl cursor-pointer group hover:bg-dark-200 transition-colors"
                  >
                    <div className="text-gray-400 group-hover:text-primary transition-colors mb-2">
                      {iconMap[skill] || <SiReact size={40} />}
                    </div>
                    <span className="text-sm text-gray-300 text-center font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Languages', count: '4+' },
              { label: 'Frameworks', count: '6+' },
              { label: 'Tools', count: '8+' },
              { label: 'Projects', count: '10+' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-effect rounded-xl p-6"
              >
                <div className="text-3xl font-bold text-gradient mb-2">{stat.count}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

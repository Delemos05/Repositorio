import React from 'react';
import { Code2, Terminal, Server, Database } from 'lucide-react';

const skills = [
  { name: 'Front-end', icon: Code2, items: ['React', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Back-end', icon: Server, items: ['Node.js', 'Express'] },
  { name: 'Database', icon: Database, items: ['PostgreSQL', 'MongoDB', 'MySQL'] },
  { name: 'DevOps', icon: Terminal, items: ['GitHub', 'Git'] },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Sobre Mim
        </h2>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-semibold mb-4">Minha História</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Como estudante de Engenharia da Computação na UFSC, tenho me dedicado a desenvolver
              soluções tecnológicas que fazem a diferença. Minha jornada começou com o fascínio
              pela programação e evoluiu para uma paixão por criar sistemas completos e escaláveis.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Educação</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Engenharia da Computação</h4>
                <p className="text-gray-600 dark:text-gray-300">UFSC - Em andamento</p>
              </div>
              <div>
                <h4 className="font-medium">Certificações Relevantes</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  AWS Certified Developer, MongoDB University
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <skill.icon className="w-8 h-8 mb-4 text-blue-600" />
              <h3 className="font-semibold mb-4">{skill.name}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-600 dark:text-gray-300">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
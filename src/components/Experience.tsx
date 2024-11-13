import React from 'react';

const experiences = [
  {
    title: 'Desenvolvedor Full Stack',
    company: 'Empresa Tech',
    period: '2022 - Presente',
    description: 'Desenvolvimento de aplicações web escaláveis usando React e Node.js. Implementação de APIs RESTful e integração com serviços de terceiros.'
  },
  {
    title: 'Estágio em Desenvolvimento',
    company: 'Startup Inovadora',
    period: '2021 - 2022',
    description: 'Participação no desenvolvimento de features para aplicativo mobile usando React Native e Firebase.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Experiência Profissional
        </h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-12 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-blue-600"
            >
              <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-blue-600 -translate-x-[3px]" />
              <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
              <div className="text-gray-600 dark:text-gray-300 mb-2">
                {exp.company} • {exp.period}
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
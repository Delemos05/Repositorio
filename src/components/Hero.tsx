import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Olá, eu sou o Marcos
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Desenvolvedor Full Stack
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Estudante de Engenharia da Computação na UFSC, apaixonado por criar soluções inovadoras
            e impactantes através do código.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <a
              href="https://github.com/Delemos05"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/marcolino-ara%C3%BAjo-de-lemos-544a28267/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://mail.google.com/marcolinoaraujodelemos@gmail.com"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="\src\img\eu.jpg"
            alt="Marco"
            className="rounded-full w-64 h-64 lg:w-96 lg:h-96 object-cover mx-auto shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
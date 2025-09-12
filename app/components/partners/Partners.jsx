import React from 'react';

const Partners = () => {
  return (
    <section id='partners' className="bg-[#F4F4F4] p-5">
      <h1 className="text-6xl font-bold text-center mt-5 text-[#9D5CFD]">Partners</h1>
      <div className="flex flex-wrap justify-center mt-5">
        <div id="qiskit" className="flex flex-col w-full sm:w-[45%] md:w-[25%] m-5">
          <img 
            className="h-[100px] sm:h-[130px] md:h-[150px] object-contain mix-blend-multiply"
            src="./assets/img/logo_QISKIT.png"
            alt="Qiskit Logo"
          />
          <h1 className="text-lg font-bold text-center mb-5 sm:mb-10">Qiskit Community</h1>
          <p className="text-sm sm:text-base text-[#353A3F]">
            Qiskit is an open-source quantum computing framework developed by IBM that enables users to create, simulate, and run quantum programs. It provides tools to work with quantum circuits, algorithms, and applications in areas like chemistry, optimization, and machine learning. With Qiskit, you can experiment on simulators or real quantum devices accessible through the IBM Quantum platform. Designed to be both beginner-friendly and powerful, Qiskit is widely used by researchers, educators, and developers to explore the potential of quantum technologies.
          </p>
        </div>
        <div id="ibm" className="flex flex-col w-full sm:w-[45%] md:w-[25%] m-5">
          <img 
            className="h-[100px] sm:h-[130px] md:h-[150px] object-contain mix-blend-multiply"
            src="./assets/img/ibm_quantum_logo_fixed.png"
            alt="IBM Quantum Logo"
          />
          <h1 className="text-lg font-bold text-center mb-5 sm:mb-10">IBM Quantum</h1>
          <p className="text-sm sm:text-base text-[#353A3F]">
            IBM Quantum is IBM’s initiative to make quantum computing accessible to everyone, from researchers to students and developers. Through the IBM Quantum platform, users can run experiments on real quantum hardware via the cloud, alongside powerful simulators and development tools. IBM Quantum also leads in advancing quantum research, building scalable quantum processors, and fostering a global community of learners. By combining education, open-source software, and cutting-edge technology, IBM Quantum is paving the way toward practical quantum advantage.
          </p>
        </div>
        <div id="dmi" className="flex flex-col w-full sm:w-[45%] md:w-[25%] m-5">
          <img 
            className="h-[100px] sm:h-[130px] md:h-[150px] object-contain mix-blend-multiply"
            src="./assets/img/logo_DMI2.png"
            alt="DMI Logo"
          />
          <h1 className="text-lg font-bold text-center mb-5 sm:mb-10">Dipartimento di Matematica e Informatica - UNICT</h1>
          <p className="text-sm sm:text-base text-[#353A3F]">
            The Department of Mathematics and Informatics (DMI) of the University of Catania was established in 1999, bringing together faculty from Mathematics and Computer Science. Located in the Cittadella Universitaria, it coordinates and promotes research across all areas of mathematics and informatics, from logic and algebra to statistics, operations research, and computer science. With over 80 faculty members (26,19% women), a specialized library of 70,000 volumes, and advanced computing facilities, the DMI supports both education and research through resources, laboratories, and digital services.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Partners;

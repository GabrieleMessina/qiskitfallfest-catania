import React from 'react';

const Schedule = () => {
  return (
    <section id="school-schedule" className="bg-[#F4F4F4] p-10 pt-1" style={{minHeight: '10rem'}}>
      {/* Titolo */}
      <div className="flex flex-col justify-center md:m-10">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-[#9D5CFD]">Schools Agenda</h1>
      </div>

      {/* Tabella */}
      <div className="flex my-5 overflow-x-auto rounded-lg m-0 lg:mx-48">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="rounded-lg">
            <tr className="bg-[#9D5CFD] text-white uppercase text-xs md:text-sm leading-normal rounded-lg">
              <th className="py-2 px-3 w-3/12 text-center">Martedì 18 Nov. 2025<br /><small>Aula 22</small></th>
            </tr>
          </thead>
          <tbody className="text-xs md:text-base font-light">
            <tr style={{height: '2rem', borderBottom: "1px solid lightgray"}}>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white"><span className="opacity-80">14:30 - 15:30</span><br /> <span className="md:ms-3 block">Introduzione al quantum computing</span></td>
            </tr>
            <tr style={{height: '2rem', borderBottom: "1px solid lightgray"}}>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white"><span className="opacity-80">15:30 - 17:30</span><br /> <span className="md:ms-3 block">Sessione hands-on: Hello Quantum World</span></td>
            </tr>
            <tr style={{height: '4rem', borderBottom: "1px solid lightgray"}}>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white"><span className="opacity-80">17:30 - 19:30</span><br /> <span className="md:ms-3 block">Sessione interattiva: giochi quantistici</span></td>
            </tr>
            {/* <tr style={{height: '4rem'}}>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">18:15 - 19:00</span><br /> <span className="md:ms-3 block">Quantum No-Cloning: How the Hippies saved Physics (S. Faro)</span></td>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">18:15 - 19:00</span><br /> <span className="md:ms-3 block">From Quantum Tris to Cryptography (G. Chiriacò)</span></td>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">18:15 - 19:00</span><br /> <span className="md:ms-3 block">Hackhathon Presentation</span></td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Schedule;

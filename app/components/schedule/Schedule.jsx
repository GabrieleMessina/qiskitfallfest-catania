import React from 'react';

const Schedule = () => {
  return (
    <section id="schedule" className="bg-[#F4F4F4] p-10" style={{minHeight: '10rem'}}>
      {/* Titolo */}
      <div className="flex flex-col justify-center md:m-10">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-[#9D5CFD]">Schedule</h1>
      </div>

      {/* Tabella */}
      <div className="flex my-5 overflow-x-auto rounded-lg m-0 lg:mx-48">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="rounded-lg">
            <tr className="bg-[#9D5CFD] text-white uppercase text-xs md:text-sm leading-normal rounded-lg">
              <th className="py-2 px-3 w-3/12 text-center rounded-tl-lg">Giovedì 30 Ott. 2025</th>
              <th className="py-2 px-3 w-3/12 text-center">Mercoledì 5 Nov. 2025</th>
              <th className="py-2 px-3 w-3/12 text-center">Martedì 11 Nov. 2025</th>
              <th className="py-2 px-3 w-1/12 text-center rounded-tr-lg">Giovedì 20 Nov. 2025</th>
            </tr>
          </thead>
          <tbody className="text-xs md:text-base font-light">
            <tr style={{height: '2rem', borderBottom: "1px solid lightgray"}}>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">14:40 - 15:00</span><br /> <span className="md:ms-3 block">Registrations</span></td>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}}></td>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}}></td>
              <td rowSpan={6} className="text-left hover:bg-[#FF7EB5] hover:text-white"><div style={{transform: "rotate(90deg)"}}><span className="opacity-80">9:00 - 18:00</span><br />Hackathon</div></td>
            </tr>
            <tr style={{height: '2rem', borderBottom: "1px solid lightgray"}}>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">15:00 - 15:15</span><br /> <span className="md:ms-3 block">Institutional Greetings</span></td>
              <td rowSpan={2} className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">15:00 - 15:45</span><br /> <span className="md:ms-3 block">Standard Quantum Algorithms</span></td>
              <td rowSpan={2} className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">15:00 - 15:45</span><br /> <span className="md:ms-3 block">IBM Sponsored Talk (TBA)</span></td>
            </tr>
            <tr style={{height: '4rem', borderBottom: "1px solid lightgray"}}>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">15:15 - 15:45</span><br /> <span className="md:ms-3 block">Historical Overview</span></td>
            </tr>
            <tr style={{height: '4rem', borderBottom: "1px solid lightgray"}}>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">15:45 - 16:15</span><br /> <span className="md:ms-3 block">Introduction to Quantum Computing</span></td>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">15:45 - 16:15</span><br /> <span className="md:ms-3 block">Quantum Machine Learning</span></td>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white"style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">15:45 - 16:15</span><br /> <span className="md:ms-3 block">Hardware and QRAM</span></td>
            </tr>
            {/* <tr style={{height: '4rem', borderBottom: "1px solid lightgray"}}>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}} ><span className="opacity-80">16:15 - 17:00</span><br /> <span className="md:ms-3 block">Quantum Basics (G. Piccitto)</span></td>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">16:15 - 17:00</span><br /> <span className="md:ms-3 block">LAB 2 (M. Gibilterra e C. Viola)</span></td>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">16:15 - 17:00</span><br /> <span className="md:ms-3 block">Near Term Applications of Quantum Computing (M. Gibilterra)</span></td>
            </tr> */}
            <tr style={{height: '4rem', borderBottom: "1px solid lightgray", borderTop: "2px solid #9D5CFD", borderBottom: "2px solid #9D5CFD", fontWeight: "bold"}}>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white text-center" style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">17:00 - 17:30</span><br /> <span className="md:ms-3 block">Coffee Break and Network</span></td>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white text-center" style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">17:00 - 17:30</span><br /> <span className="md:ms-3 block">Coffee Break and Network</span></td>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white text-center" style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">17:00 - 17:30</span><br /> <span className="md:ms-3 block">Coffee Break and Network</span></td>
            </tr>
            <tr style={{height: '4rem', borderBottom: "1px solid lightgray"}}>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">17:30 - 19:00</span><br /> <span className="md:ms-3 block">Workshop 1</span></td>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">17:30 - 19:00</span><br /> <span className="md:ms-3 block">Workshop 2</span></td>
              <td className="py-2 px-3 text-left hover:bg-[#FF7EB5] hover:text-white" style={{borderRight: "2px dashed #FF7EB5"}}><span className="opacity-80">17:30 - 19:00</span><br /> <span className="md:ms-3 block">Workshop 3</span></td>
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

import React from 'react';

const days = [
  {
    date: 'Martedì 27 Ott. 2026',
    rooms: 'Aula Magna, Aula 23',
    events: [
      { start: '14:40', end: '15:00', title: 'Registrazioni' },
      { start: '15:00', end: '15:15', title: 'Apertura e saluti' },
      { start: '15:15', end: '16:30', title: 'Introduzione alla meccanica quantistica', speakers: 'Giulia Piccitto e Caterina Viola' },
      { start: '16:30', end: '17:00', title: 'Coffee break', isBreak: true },
      { start: '17:00', end: '19:00', title: 'Notebook: laboratorio introduttivo a Qiskit' },
    ],
  },
  {
    date: 'Mercoledì 4 Nov. 2026',
    rooms: 'Aula Magna, Aula 1',
    events: [
      { start: '15:00', end: '16:00', title: <>La molecola H<sub>2</sub></> },
      { start: '16:00', end: '16:30', title: 'Presentazione del master QST' },
      { start: '16:30', end: '17:00', title: 'Coffee break', isBreak: true },
      { start: '17:00', end: '18:00', title: 'Le prospettive lavorative del quantum', speakers: 'Roberto Lo Nardo - IBM Quantum' },
      { start: '18:00', end: '19:00', title: <>Notebook sulla molecola H<sub>2</sub></> },
    ],
  },
  {
    date: 'Giovedì 12 Nov. 2026',
    rooms: 'Aula Magna, Aula 1',
    events: [
      { start: '15:00', end: '15:45', title: 'Applicazioni della Quantum Fourier Transform nell’astrofisica', speakers: 'Francesco Cavallaro - INAF' },
      { start: '15:45', end: '16:30', title: 'Quantum random walk', speakers: 'Damiano Trovato' },
      { start: '16:30', end: '17:00', title: 'Coffee break', isBreak: true },
      { start: '17:00', end: '19:00', title: 'Modello di Ising: lezione e notebook' },
    ],
  },
];

// Shared boundaries keep each day's events aligned despite different break times.
const boundaries = [...new Set(days.flatMap(day => day.events.flatMap(event => [event.start, event.end])))].sort();
const slots = boundaries.slice(0, -1);

const Schedule = () => {
  return (
    <section id="schedule" className="bg-[#F4F4F4] p-10" style={{minHeight: '10rem'}}>
      <div className="flex flex-col justify-center md:m-10">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-[#9D5CFD]">Schedule</h1>
      </div>

      <div className="flex my-5 overflow-x-auto rounded-lg m-0 lg:mx-48">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="rounded-lg">
            <tr className="bg-[#9D5CFD] text-white uppercase text-xs md:text-sm leading-normal rounded-lg">
              {days.map((day, index) => (
                <th key={day.date} scope="col" className={`py-2 px-3 w-3/12 text-center ${index === 0 ? 'rounded-tl-lg' : ''}`}>
                  {day.date}<br /><small>{day.rooms}</small>
                </th>
              ))}
              <th scope="col" className="py-2 px-3 w-1/12 text-center rounded-tr-lg">Mercoledì 25 Nov. 2026<br /><small>Aula 124, Aula 23</small></th>
            </tr>
          </thead>
          <tbody className="text-xs md:text-base font-light">
            {slots.map((time, index) => (
              <tr key={time} style={{height: '2rem'}}>
                {days.map(day => {
                  const event = day.events.find(item => item.start === time);
                  if (!event && day.events.some(item => item.start < time && item.end > time)) {
                    return null;
                  }
                  return (
                    <td
                      key={day.date}
                      rowSpan={event ? boundaries.indexOf(event.end) - index : 1}
                      className={`py-2 px-3 hover:bg-[#FF7EB5] hover:text-white ${event?.isBreak ? 'text-center font-bold' : 'text-left'}`}
                      style={{
                        borderRight: '2px dashed #FF7EB5',
                        borderBottom: event?.isBreak ? '2px solid #9D5CFD' : '1px solid lightgray',
                        ...(event?.isBreak ? { borderTop: '2px solid #9D5CFD' } : {}),
                      }}
                    >
                      {event && (
                        <>
                          <span className="opacity-80">{event.start} - {event.end}</span><br />
                          <span className="md:ms-3 block">
                            {event.title}
                            {event.speakers && <><br /><small>{event.speakers}</small></>}
                          </span>
                        </>
                      )}
                    </td>
                  );
                })}
                {index === 0 && (
                  <td rowSpan={slots.length} className="text-left hover:bg-[#FF7EB5] hover:text-white">
                    <div style={{transform: 'rotate(90deg)'}}><span className="opacity-80">11:00 - 19:00</span><br />Hackathon</div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Schedule;

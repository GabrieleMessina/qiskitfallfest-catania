import { IconButton } from '@mui/material'
import Info from '@mui/icons-material/InfoOutlined';
import Calendar from '@mui/icons-material/CalendarMonthOutlined';
import Question from '@mui/icons-material/QuestionMarkOutlined';
import Location from '@mui/icons-material/LocationOnOutlined';
import Link from 'next/link';
import React from 'react'

const About = () => {
  return (
    <section id='about'>
    <div className="flex flex-col justify-center md:m-10 p-4">
      <h1 className="text-6xl font-bold text-center text-[#353A3F]">About</h1>
      <div className="m-3 md:mx-48">
        <div className='text-center'>The University of Catania is proud to host the <strong>Qiskit Fall Fest</strong> for the second year in a row <br/> this time as one of only <strong>55 Sponsored Events worldwide</strong>!</div>
        <div className="relative p-6 italic text-gray-600 border-l-4 border-[#FF7EB5] bg-gray-50 my-4">
          The Qiskit Fall Fest is a global celebration of quantum computing, promoted by <b>IBM Quantum</b> and the <b>Qiskit community</b>. Every year, student-led events take place on campuses across the world, with formats ranging from beginner-friendly workshops to advanced hackathons. These events are designed to strengthen local communities, foster collaboration, and grow the next generation of quantum innovators.
        </div>
        <div className='text-center'>
          Whether you are a curious newcomer or an experienced quantum enthusiast, the Qiskit Fall Fest in Catania will be the place to learn, build, and connect. Together, we'll explore the cutting edge of quantum technology and shape the future of computation.
        </div>
        <div id="about-buttons" className="flex flex-wrap justify-evenly gap-5 mt-5">
        {/* Pulsante Info */}
        <div id="info-button" className="flex flex-col  justify-between items-center text-center w-full sm:w-1/2 lg:w-1/6">
          <IconButton>
            <Info sx={{ fontSize: 60, color: '#9D5CFD' }}></Info>
          </IconButton>
          <h3 className="font-bold text-2xl">What is Qiskit?</h3>
          <span>An open-source python framework for quantum programming</span>
          <Link href={'/qiskit'} className="hover:underline text-[#9D5CFD] mt-5"> Learn more </Link>
        </div>

        {/* Pulsante Calendario */}
        <div id="calendar-button" className="flex flex-col  justify-between items-center text-center w-full sm:w-1/2 lg:w-1/6">
          <IconButton>
            <Calendar sx={{ fontSize: 60, color: '#9D5CFD' }}></Calendar>
          </IconButton>
          <h3 className="font-bold text-2xl">Calendar</h3>
          <span>Check out the agenda for the event</span>
          <Link href={'#schedule'} className="hover:underline text-[#9D5CFD] mt-5"> View the calendar </Link>
        </div>

        {/* Pulsante Location */}
        <div id="location-button" className="flex flex-col  justify-between items-center text-center w-full sm:w-1/2 lg:w-1/6">
          <IconButton>
            <Location sx={{ fontSize: 60, color: '#9D5CFD' }}></Location>
          </IconButton>
          <h3 className="font-bold text-2xl">Location</h3>
          <span>Learn more about our event location in detail</span>
          <Link href={'#location'} className="hover:underline text-[#9D5CFD] mt-5"> Find us </Link>
        </div>

        {/* Pulsante FAQ */}
        <div id="FAQ-button" className="flex flex-col justify-between items-center text-center w-full sm:w-1/2 lg:w-1/6">
          <IconButton>
            <Question sx={{ fontSize: 60, color: '#9D5CFD' }}></Question>
          </IconButton>
          <h3 className="font-bold text-2xl">FAQ</h3>
          <span>Have some question? Maybe we have already answered it!</span>
          <Link href={'/faq'} className="hover:underline text-[#9D5CFD] mt-5"> FAQ </Link>
        </div>
      </div>

        <div className='flex justify-center'>
            <div id='register button' className=' bg-[#9D5CFD] hover:bg-[#924afc] text-white rounded text-center text-2xl font-bold mt-5 flex justify-center lg:w-[40%] w-[80%] p-5'>
                <button> <Link target='blank' href={'https://cataniaqiskitfallfest25.eventbrite.com'}>Register here to partecipate!</Link>
                </button>
            </div>
        </div>
        <div className='flex justify-center'>
            <div id='register button' className='border border-[#9D5CFD] hover:bg-[#924afc11] rounded text-center text-2xl font-bold mt-5 flex justify-center lg:w-[40%] w-[80%] p-5'>
                <button> <Link target='blank' href="https://drive.google.com/drive/folders/1itnr71b5UM-kfzWkwSFmcWtY5W8BJxhH?usp=sharing"><span style={{fontSize: 'larger', fontWeight: 'bold', color: '#9D5CFD'}}>⤓</span> Resources</Link>
                </button>
            </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About
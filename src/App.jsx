/* eslint-disable react/prop-types */
import './App.css';
import './App.scss';
import { useState,useEffect} from 'react';


export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = (index) => {
    setSelectedIndex(index);
    if (index === 3) {
      setIsDarkMode((prevMode) => !prevMode);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const headers = document.querySelector('.contenedor-headers');
      const items = document.querySelectorAll('.itemsss');

      if (window.scrollY > 10) {
        headers.classList.add('on');
      } else {
        headers.classList.remove('on');
        items.forEach(item => item.classList.toggle('active', window.scrollY < 1));
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
<main style={{ background: isDarkMode ? 'white' : '#19192d' }} className="flex items-center justify-center min-h-screen">
    <div className='flex flex-col items-center justify-center gap-10 w-full max-w-screen-lg'>

      <section>
        <Headers
           selectedIndex={selectedIndex}
           isDarkMode={isDarkMode}
           handleClick={handleClick}
        />
      </section>

      <section  className="w-full min-h-screen flex justify-center items-center">
        <Presentacion color={{color: isDarkMode ? 'black' : 'white'}} strong={{color: isDarkMode ? '#eab308' : '#fef9c3'}}/>
      </section>
      <section id="seccion1" className="w-full min-h-screen flex flex-col gap-11 justify-start items-start p-2 relative">
  <div className="w-full md:ml-2">
    <h1 className="ml-4 md:ml-0" style={{ color: isDarkMode ? 'black' : 'gainsboro' }}>
      <svg className="size-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M7 8l-4 4l4 4"></path>
        <path d="M17 8l4 4l-4 4"></path>
        <path d="M14 4l-4 16"></path>
      </svg>
      Proyectos
    </h1>
  </div>
  <Proyectos cambio={{ color: isDarkMode ? 'black' : 'white' }} texColor={{ color: isDarkMode ? '#635d5d' : '#989393' }} />
  <Proyectos cambio={{ color: isDarkMode ? 'black' : 'white' }} texColor={{ color: isDarkMode ? '#635d5d' : '#989393' }} />
</section>

      <section id="seccion2" className="w-full min-h-screen flex justify-center items-center">
        <SobreMi cambiar={{color: isDarkMode ? 'black' : 'white'}} border={{color: isDarkMode ? 'gray' : 'white'}} strong={{color: isDarkMode ? '#eab308' : '#fef9c3'}}/>
      </section>
    
      <section id="seccion2" className="w-full flex justify-center items-center">
        <Footerst 
          selectedIndex={selectedIndex}
          isDarkMode={isDarkMode}
          handleClick={handleClick}
        />
      </section>
    </div>
</main>

  );
}
function Headers({ selectedIndex, isDarkMode, handleClick }) {
  return (
    <div className="flex justify-center">
      <header className="contenedor-headers fixed z-10 top-2 rounded-3xl p-5 h-1 hidden sm:block">
        <ul className="flex h-full justify-center items-center list-none gap-5 text-white">
          {['Proyectos', 'Sobre Mi', 'Contacto'].map((item, index) => (
            <li key={index}>
              <a
                onClick={() => handleClick(index)}
                className={`cursor-pointer itemsss ${selectedIndex === index ? 'text-yellow-500' : 'text-white'}`}
                href={`#seccion${index + 1}`}
              >
                {item}
              </a>
            </li>
          ))}
          
          <li
            onClick={() => handleClick(3)}
            className="cursor-pointer rounded-md text-lg p-3"
          >
            {isDarkMode ? (
              // Ícono de luna
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#00000"
              >
                <path d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-146 93-257.5T410-880q-18 99 11 193.5T521-521q71 71 165.5 100T880-410q-26 144-138 237T484-80Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T464-465q-61-61-97-138t-43-163q-77 43-120.5 118.5T160-484q0 135 94.5 229.5T484-160Zm-20-305Z" />
              </svg>
            ) : (
              // Ícono de sol
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#00000"
              >
                <path d="M440-760v-160h80v160h-80Zm266 110-55-55 112-115 56 57-113 113Zm54 210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652 140-763l57-56 113 113-56 54Zm508 512L651-255l54-54 114 110-57 59ZM40-440v-80h160v80H40Zm157 300-56-57 112-112 29 27 29 28-114 114Zm283-100q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z" />
              </svg>
            )}
          </li>
          
        </ul>
      </header>
    </div>
  );
}

function Footerst( {selectedIndex,isDarkMode,handleClick} ) {
  return(
    <>
        <div className="flex justify-center">
      <footer className="sm:hidden fixed bottom-4 h-[54px] max-w-4xl mx-auto z-10 bg-white rounded-md">
        <ul
          style={{
            border: isDarkMode ? 'solid 1px #dcdcdc' : 'none',
            borderRadius: isDarkMode ? '0.4rem' : '0',
          }}
          className="contenedor-ul flex justify-center items-center h-full list-none"
        >
          {['Proyectos', 'Sobre Mi', 'Contacto'].map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className={`items text-lg rounded-md p-3 ${
                selectedIndex === index ? 'bg-blue-400' : 'bg-white'
              }`}
            >
              <a
                className="text-black"
                href={
                  index < 2
                    ? `#seccion${index + 1}`
                    : index === 2
                    ? 'mailto:tiagoelias289@gmail.com'
                    : undefined
                }
                target={index === 2 ? '_blank' : '_self'}
                rel={index === 2 ? 'noopener noreferrer' : undefined}
              >
                {item}
              </a>
            </li>
          ))}
          <li
            onClick={() => handleClick(3)}
            className="cursor-pointer rounded-md text-lg p-3"
          >
            {isDarkMode ? (
              // Ícono de luna
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#00000"
              >
                <path d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-146 93-257.5T410-880q-18 99 11 193.5T521-521q71 71 165.5 100T880-410q-26 144-138 237T484-80Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T464-465q-61-61-97-138t-43-163q-77 43-120.5 118.5T160-484q0 135 94.5 229.5T484-160Zm-20-305Z" />
              </svg>
            ) : (
              // Ícono de sol
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#00000"
              >
                <path d="M440-760v-160h80v160h-80Zm266 110-55-55 112-115 56 57-113 113Zm54 210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652 140-763l57-56 113 113-56 54Zm508 512L651-255l54-54 114 110-57 59ZM40-440v-80h160v80H40Zm157 300-56-57 112-112 29 27 29 28-114 114Zm283-100q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z" />
              </svg>
            )}
          </li>
        </ul>
      </footer>
    </div>
    </>
  )
}

function  Presentacion( {color,strong} ) {
  return(
    <>
     <div className="contenedor-presentacion">
            <ul className="contenedor-interior-presentacion">
              <div className="parte-1">
                <img className="image-logo" src="https://yt3.googleusercontent.com/jrxOPZCYqzTWXOTtz75_gfXTnX-f5aBcXqyCe29XuR4gIh9OoNPF_shVcs9BI1JOsNRgVwsb=s160-c-k-c0x00ffffff-no-rj" />
                <button className="btn-disponible">
                  <a className="text-white " href="mailto:tiagoelias289@gmail.com">Disponible para trabajar</a>
                </button>
              </div>
              <li className="item-presentacion uno">
                <h1 style={color} className='md:text-5xl'>Hola! Soy Thiago,</h1>
              </li>
              <li style={color} className="item-presentacion md:w-1/2 ">
                {/* <h3>Apasionado por la tecnología.</h3> */}
                <p>
                 +1 año de experiencia. de Buenos aires, Argentina<strong style={strong}> Especializado en el desarrollo de aplicaciones web únicas. </strong>Aprendo y supero nuevos retos diariamente.
                 </p>
              </li>
              <div className="parte-2">
                <button className="btn-1">
                  <a className="text-white" href="https://drive.google.com/file/d/1D14PO3ivbwplil_n5uWcodom4qM4BE8B/view?usp=drive_link">Curriculum</a>
                </button>
                <button className="contactame btn-1">
                  <a className="text-white" href="mailto:tiagoelias289@gmail.com">Contactame</a>
                </button>
                <a href="https://www.linkedin.com/in/tiago-elias-000389305/">
                  <svg style={color} className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M8 11l0 5"></path>
                    <path d="M8 8l0 .01"></path>
                    <path d="M12 16l0 -5"></path>
                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                  </svg>
                </a>
              </div>
              <div className="sm:hidden mt-9">
                <Tecnologias />
              </div>
            </ul>
          </div>
    </>
  )
}

function Tecnologias() {
  return(
    <>
     <div className='grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2'>

      <div className='tecnologia w-28 h-28   flex justify-center items-center hover:border-gray-400 duration-300 border-solid border-gray-300 p-2 rounded-lg'>
      <svg className='w-16 h-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
  <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
  <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
  <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"/>
  <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"/>
</svg>
      </div>

      <div className='tecnologia w-28 h-28  flex justify-center items-center hover:border-gray-400 duration-300 border-solid border-gray-300 p-2 rounded-lg'>
      <svg className='w-16 h-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
  <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52"/>
  <path fill="#30a9dc" d="M226 472l149-41 35-394H226"/>
  <path fill="#ecedee" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"/>
  <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"/>
        </svg>
      </div>

      <div className='tecnologia  w-28 h-28   flex justify-center items-center hover:border-gray-400 duration-300   border-solid border-gray-300 p-2 rounded-lg'>
      <svg className='w-16 h-auto' xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"/><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"/></svg>
      </div>

      <div className='tecnologia  w-28 h-28  flex justify-center items-center hover:border-gray-400 duration-300   border-solid border-gray-300 p-2 rounded-lg'>
       <svg className='w-16 h-auto' viewBox="0 0 256 228" width="256" height="228" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z" fill="#00D8FF"/></svg>
      </div>

      <div className='tecnologia  w-28 h-28   flex justify-center items-center hover:border-gray-400 duration-300   border-solid border-gray-300 p-2 rounded-lg'>
      <svg className='w-16 h-auto' viewBox="0 0 256 256" width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6"/><path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" fill="#FFF"/></svg>
      </div>

      <div className='tecnologia  w-28 h-28   flex justify-center items-center hover:border-gray-400 duration-300   border-solid border-gray-300 p-2 rounded-lg'>
      <svg className='w-16 h-auto'
  viewBox="0 0 256 154"
  width="256"
  height="154"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMidYMid"
  >
  <defs
    ><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient">
      <stop stopColor="#2298BD" offset="0%"></stop>
      <stop stopColor="#0ED7B5" offset="100%"></stop>
    </linearGradient></defs>
  <path
    d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
      fill="url(#gradient)"></path></svg>
      </div>

      <div className='tecnologia w-28 h-28   flex justify-center items-center hover:border-gray-400 duration-300   border-solid border-gray-300 p-2 rounded-lg'>
      <svg className='w-16 h-auto' viewBox="0 0 512 384" xmlns="http://www.w3.org/2000/svg" width="512" height="384"><path fill="#CF649A" d="M441 221c-18 0-34 4-47 10-5-9-9-17-10-24s-2-11-1-20 6-21 6-22c0 0-1-5-11-5-11 0-20 2-21 5l-4 15c-2 9-20 43-31 60-4-7-7-13-7-17-1-8-2-12-1-21s6-20 6-21-1-6-11-6c-11 0-20 2-21 5l-4 15-34 76-8 18c-2 4 0 0 0 1l-3 5-4 5s-1-7 1-16c3-19 12-49 12-51 0 0 2-5-6-8-7-3-9 2-10 2l-1 1s8-34-16-34c-14 0-35 17-45 31l-34 19-17 9-1-1c-29-31-82-52-79-93 0-15 6-54 101-102 79-39 141-28 152-4 16 34-33 97-115 106-31 3-47-9-51-13-4-5-5-5-7-4s-1 5 0 8c3 6 13 17 30 23 15 5 51 8 95-9 49-19 88-72 77-117-12-45-87-60-157-35-43 15-88 39-121 70-39 36-45 68-43 81 10 47 74 78 100 100l-3 2c-13 7-63 33-75 60-14 31 2 53 13 56 33 10 68-7 86-34 18-28 16-64 8-80l-1-1 11-6 18-10c-3 9-5 19-6 34-2 17 6 40 15 49 4 4 9 4 12 4 11 0 16-9 22-20l13-28s-8 41 13 41c7 0 15-9 18-14l1-1 1-2 20-37 25-57 5 20c2 8 7 16 10 24l-4 7-8 10c-10 12-23 26-24 30-2 5-2 8 2 11 3 2 8 2 13 2l18-4 17-9c10-7 16-18 15-32 0-7-3-15-6-22l3-4c16-23 28-49 28-49l5 21 9 20a89 89 0 0 0-27 36c-6 17-2 24 7 26 4 1 10-1 14-3 5-1 11-4 17-8 10-8 20-18 19-32 0-6-2-13-4-19 12-5 29-8 49-5 45 5 54 33 52 44-2 12-11 18-14 20l-4 4c1 2 2 2 5 2 3-1 23-10 24-31 1-28-25-58-71-57zM97 336c-14 16-35 23-44 17-9-5-6-29 13-46 11-10 25-20 34-26l9-5 1-1 3-1c6 24 0 45-16 62zm108-73c-5 13-16 45-22 43-6-1-9-26-2-50 4-12 13-26 18-32 8-9 17-12 19-8 3 5-10 39-13 47zm89 43-5 1v-2l16-17 9-11v1c0 14-14 24-20 28zm68-16c-2-1-1-5 4-16 2-5 7-13 15-20l2 9c0 18-13 24-21 27z"/></svg>
      </div>

      <div className='tecnologia  w-28 h-28   flex justify-center items-center hover:border-gray-400 duration-300   border-solid border-gray-300 p-2 rounded-lg'>
      <svg className='w-16 h-auto' xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
  <path d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33" fill="#DE4C36"/>
      </svg>
      </div>

      <div className='tecnologia  w-28 h-28  flex justify-center items-center hover:border-gray-400 duration-300  border-solid border-gray-300 p-2 rounded-lg'>
      <svg className='w-16 h-auto'
    viewBox="0 0 256 250"
    width="256"
    height="250"
    fill="#00000"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
>
    <path
        d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
     </svg>
      </div>

     </div>
    </>
  )
}

function SobreMi( {cambiar,border,strong} ) {
  return(
    <>
<div className="flex flex-col items-center  lg:flex-row w-[95%]  ">
  <div className="lg:w-[80%] order-1 lg:order-1">
    <div>
      <h1 style={cambiar} className="flex gap-3 mb-7 md:ml-0  lg:justify-start">
        <svg className="size-8" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
          <path d="M15 19l2 2l4 -4"></path>
        </svg>
        Sobre Mi
      </h1>
    </div>

    <div className="order-2 lg:order-2 lg:hidden">
      <div className="thiagoelias border-solid   border-gray-600 w-60 rounded-2xl p-1 m-auto my-4">
        <img className="w-[100%] h-56 object-cover rounded-xl" src="https://yt3.googleusercontent.com/jrxOPZCYqzTWXOTtz75_gfXTnX-f5aBcXqyCe29XuR4gIh9OoNPF_shVcs9BI1JOsNRgVwsb=s160-c-k-c0x00ffffff-no-rj" alt="Thiago" />
      </div>
    </div>

    <div className="order-3 lg:order-2 flex flex-col gap-7">
      <div>
        <p style={cambiar} className="text-lg  lg:text-left">
          Me llamo Thiago Elías Barbero. Nací el 28 de julio de 2006 en Buenos Aires. Empecé en la programación hace 1 año.
          <strong style={strong}>Actualmente estoy aprendiendo diariamente.</strong>
        </p>
      </div>

      <div>
        <p style={cambiar} className="text-lg  lg:text-left">
          Soy un desarrollador web con experiencia en frontend. Me encanta resolver problemas complejos y crear soluciones innovadoras.
          Busco oportunidades para seguir creciendo en el campo del desarrollo web y contribuir a proyectos desafiantes.
          <strong style={strong}>Aprendo y supero nuevos retos semanalmente y analizo cómo mejorar mis habilidades a través de ellos.</strong>
        </p>
      </div>

      <div>
      <p style={cambiar}>© 2024 <a className='font-bold' href="#">Thiago.</a> Casi todos los derechos reservados</p>
    </div>
    </div>
  </div>

  <div className="lg:w-1/2 order-2  lg:order-2 lg:mt-12 lg:ml-20  hidden lg:flex justify-center">
    <div style={border} className="thiagoelias border-solid flex justify-center  w-60 rounded-2xl p-1">
      <img className="w-[100%] h-56 object-cover rounded-xl" src="src/iconos/thiago.jpg" alt="Thiago" />
    </div>
  </div>
</div>


    </>
  )
}

function Proyectos( {cambio,texColor} ) {
  return(
    <>

    <div className="flex flex-col items-center md:flex-row  md:gap-3 md:p-2 ">

  <div className="bg-slate-500 w-full md:w-[400px] md:h-full rounded-xl overflow-hidden">
    <img className="w-full h-full object-cover md:w-[400px] rounded-lg" src="https://www.porfolio.dev/projects/svgl.webp" alt="" />
  </div>

  <div className="flex flex-col gap-4 md:w-[50%] mt-4 md:mt-0 md:ml-5 md:text-left">
    <h2 style={cambio}>Pendiente</h2> 
     <p style={texColor} className="leading-6 ">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit architecto molestiae at asperiores, soluta in quae ipsam earum voluptatem, impedit deserunt iste facilis, ab illum veniam vitae veritatis assumenda sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
    <div className="flex md:justify-start gap-2">
      <button className="flex justify-center items-center border-none gap-1 bg-gray-700  w-24 h-10 hover:bg-gray-600 duration-500 cursor-pointer rounded-md text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> 
        Code
      </button>
      <button className="flex justify-center items-center border-none gap-1 bg-gray-700 w-24 h-10 hover:bg-gray-600 duration-500 cursor-pointer rounded-md text-white">
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> 
        Preview
      </button>
    </div>
  </div>
</div>

    </>
  )
}
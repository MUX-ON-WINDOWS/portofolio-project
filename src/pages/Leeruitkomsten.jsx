import '../Leeruitkomsten.css';

function App() {
  return (
    <>
      <div className='ContainerAlleLeeruitkomsten'>
        {/* Leeruitkomst 1 */}
        <div className='containerLeeruitkomst1'>
          <div className='leeruitkomst'>
            <h1>Conceptualize, design and develop interactive media products </h1>
          </div>
          <div className='dotLine'></div>
          <div className='bewijsLasten'>
            <div className='content_container_margin'>
              <h3>Bewijs:</h3>
              <ul>
                <li><a href="https://git.fhict.nl/I488863/projectai">Eind product AI paspop</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Leeruitkomst 2 */}
        <div className='containerLeeruitkomst2'>
          <div className='bewijsLasten'>
            <div className='content_container_margin'>
              <h3>Bewijs:</h3>
              <ul>
                <li><a href="https://github.com/MUX-ON-WINDOWS/portofolio-project">Git portofolio</a></li>
                <li><a href="https://git.fhict.nl/I507258/todolistv2">Git firebase CRUD</a></li>
                <li><a href="https://git.fhict.nl/I507258/php-backend-ai">Git PHP back-end</a></li>
                <li><a href="https://i507258.hera.fhict.nl/semester3/Spaceweek/versiebeheerPropagandaPoster.pdf">Spaceweek propaganda poster versie beheer</a></li>
                <li><a href="https://i507258.hera.fhict.nl/semester3/Spaceweek/Backgroundstory%20AU%20Microscopii%20b.pdf">Spaceweek pbackground story</a></li>
              </ul>
            </div>
          </div>
          <div className='dotLine'></div>
          <div className='leeruitkomst'>
            <h1>Transferable production</h1>
          </div>
        </div>
        {/* Leeruikomst 3 */}
        <div className='containerLeeruitkomst3'>
          <div className='leeruitkomst'>
            <h1>Creative iterations</h1>
          </div>
          <div className='dotLine'></div>
          <div className='bewijsLasten'>
            <div className='content_container_margin'>
              <h3>Bewijs:</h3>
              <ul>
                <li><a href="https://i507258.hera.fhict.nl/semester3/Spaceweek/prototype_poster.png">Spaceweek poster</a></li>
                <li><a href="https://i507258.hera.fhict.nl/semester3/Spaceweek/PropagandaWallPosterV2.png">Spaceweek propaganda poster</a></li>
                <li><a href="https://i507258.hera.fhict.nl/semester3/Spaceweek/Solution%20Video.mp4">Spaceweek propaganda video</a></li>
                <li><a href='https://i507258.hera.fhict.nl/semester3/CRUD/Todolist.pdf'>Versie beheer CRUD</a></li>
                <li><a href="https://i507258.hera.fhict.nl/semester3/CRUD/envFile.pdf">Onderzoek .env bestand in React</a></li>
                <li><a href='https://i507258.hera.fhict.nl/semester3/Sprint1/Retourneren%20onderzoek.pdf'>Onderzoek Retourneren</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Leeruitkomst 4 */}
        <div className='containerLeeruitkomst4'>
          <div className='bewijsLasten'>
            <div className='content_container_margin'>
              <h3>Bewijs:</h3>
              <ul>
                <li><a href='https://fhict.instructure.com/courses/13361/external_tools/1067'>Feedpulse</a></li>
              </ul>
            </div>
          </div>
          <div className='dotLine'></div>
          <div className='leeruitkomst'>
            <h1>Professional skills</h1>
          </div>
        </div>
      </div>
      <div className='ContainerAlleLeeruitkomstenPhone'>
        <div className='leeruitkomstPhone'>
          <h1>Conceptualize, design and develop interactive media products</h1>
          <div>
            <h2>Bewijs:</h2>
            <ul>
              <li><a href="https://git.fhict.nl/I488863/projectai">Eind product AI paspop</a></li>
            </ul>
          </div>
        </div>
        <div className='leeruitkomstPhone'>
          <h1>Transferable production</h1>
          <h2>Bewijs:</h2>
          <ul>
            <li href="https://github.com/MUX-ON-WINDOWS/portofolio-project">Git portofolio</li>
            <li href="https://git.fhict.nl/I507258/todolistv2">Git firebase CRUD</li>
            <li href="https://git.fhict.nl/I507258/php-backend-ai">Git PHP back-end</li>
            <li href="https://i507258.hera.fhict.nl/semester3/Spaceweek/versiebeheerPropagandaPoster.pdf">Spaceweek propaganda poster versie beheer</li>
            <li href="https://i507258.hera.fhict.nl/semester3/Spaceweek/Backgroundstory%20AU%20Microscopii%20b.pdf">Spaceweek pbackground story</li>
          </ul>
        </div>
        <div className='leeruitkomstPhone'>
          <h1>Creative iterations</h1>
          <h2>Bewijs:</h2>
          <ul>
            <li href="https://i507258.hera.fhict.nl/semester3/Spaceweek/prototype_poster.png">Spaceweek poster</li>
            <li href="https://i507258.hera.fhict.nl/semester3/Spaceweek/PropagandaWallPosterV2.png">Spaceweek propaganda poster</li>
            <li href="https://i507258.hera.fhict.nl/semester3/Spaceweek/Solution%20Video.mp4">Spaceweek propaganda video</li>
          </ul>
        </div>
        <div className='leeruitkomstPhone'>
          <h1>Professional skills</h1>
          <h2>Bewijs:</h2>
          <ul>
            <li><a href='https://fhict.instructure.com/courses/13361/external_tools/1067'>Feedpulse</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App

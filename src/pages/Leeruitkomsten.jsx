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
              <li>Spaceweek</li>
            </ul>
          </div>
        </div>
        <div className='leeruitkomstPhone'>
          <h1>Transferable production</h1>
          <h2>Bewijs:</h2>
          <ul>
            <li>Spaceweek</li>
          </ul>
        </div>
        <div className='leeruitkomstPhone'>
          <h1>Creative iterations</h1>
          <h2>Bewijs:</h2>
          <ul>
            <li>Spaceweek</li>
          </ul>
        </div>
        <div className='leeruitkomstPhone'>
          <h1>Professional skills</h1>
          <h2>Bewijs:</h2>
          <ul>
            <li>Spaceweek</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App

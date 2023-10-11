import Bart from '../img/Bart.png'
import Lilian from '../img/Lilian.png'
import Paul from '../img/Paul.png'

function App() {
  return (
    <div className="contentContainer">
      <h1>Sprint 1</h1>
      <div className="inleidingContainer">
        <h2>Inleiding</h2>
        <p>

        </p>
      </div>
      <div className="textContainer">
        <h2>Debriefing</h2>
        <p>
          Om meer duidelijkheid te verkrijgen over onze opdracht hebben we eerst een <a href="https://i507258.hera.fhict.nl/semester3/Sprint1/Debriefing Document.pdf">debriefingdocument</a> opgesteld.
        </p>
        <h2>Persona's</h2>
        <p>
          Na de debriefing en een onderzoek over een doelgroep bij de mediamarkt heb ik met Stijn <a href='https://drive.google.com/drive/folders/1ZwE8jpYSzGZb_CXzPj_RBrSKAGLxL_py?usp=sharing'>3 persona's  </a> opgesteld.
        </p>
        <div className='ImageContainer'>
          <img src={Bart}></img>
          <img src={Lilian}></img>
          <img src={Paul}></img>
        </div>
        <h2>Enquête online problemen</h2>
        <p>
          Om meer duidelijkheid te krijgen over onze doelgroep en de online problemen waarmee deze doelgroep te maken heeft,
          hebben we een veldonderzoek uitgevoerd en een <a href="https://i507258.hera.fhict.nl/semester3/Sprint1/Onderzoek online gedrag.pdf">enquête</a> gehouden.
          Uit dit onderzoek is gebleken dat de doelgroep voornamelijk bestaat uit jongeren tussen de 16 en 35 jaar.
          Bovendien hebben we ontdekt dat de doelgroep vooral vaak mode-artikelen aanschaft.
        </p>
        <h2>Enquête Verdieping</h2>
        <p>
          Na de eerste enquête hebben we een verdiepend onderzoek uitgevoerd om ons probleem verder te verhelderen en de doelgroep specifieker te bepalen met behulp van een veldonderzoek,
          dat ook als enquête diende. Uit deze <a href="https://i507258.hera.fhict.nl/semester3/Sprint1/Enquête Verdieping.pdf">enquête</a> is gebleken dat de doelgroep voornamelijk bestaat uit jongeren tussen de 16 en 35 jaar en dat mode-artikelen vaak worden teruggestuurd.
        </p>
        <h2>Onderzoek retouneren producten online en bedrijf </h2>
        <p>
          Om meer duidelijkheid te krijgen over het retourneren van producten online en bij bedrijven, heb ik een veldonderzoek uitgevoerd.
          Uit dit <a href="https://i507258.hera.fhict.nl/semester3/Sprint1/Retourneren onderzoek.pdf">onderzoek</a> is gebleken dat producten die online worden gekocht
          veel vaker worden teruggestuurd dan producten die in een fysieke winkel worden gekocht.
        </p>
      </div>
    </div>
  )
}

export default App

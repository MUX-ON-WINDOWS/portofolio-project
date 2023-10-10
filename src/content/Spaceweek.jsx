import planetPoster from '../img/planetPoster.png';
import propagandaPoster from '../img/PropagandaWallPosterV2.png';

function App() {
  return (
    <div className="contentContainer">
      <h1>Space Week</h1>
      <div className="inleidingContainer">
        <h2>Inleiding</h2>
        <p>
        In dit project hebben we een planeet toegewezen gekregen, namelijk AU Microscopii B. Vervolgens hebben we verschillende opdrachten gemaakt.
        Elke planeet had verschillende afdelingen. Mijn afdeling was Art & Culture. Binnen deze afdelingen moest iedereen een opdracht maken en als planeet beoordelen welke we zouden
        gaan gebruiken.
        </p>
      </div>
      <div className="textContainer">
        <h2>Background story</h2>
        <p>
          Ik heb een <a href='https://i507258.hera.fhict.nl/semester3/Spaceweek/Backgroundstory AU Microscopii b.pdf'>Background story</a> gemaakt voor onze planeet om een idee te geven van hoe onze planeet eruitzag en welke soort wezens erop leefden.
        </p>
        <h2>Planeet poster</h2>
        <p>
          Iedere afdeling heeft een <a href='https://i507258.hera.fhict.nl/semester3/Spaceweek/prototype_poster.png'>planeet poster</a> gemaakt. Deze taak heb ik op genomen om een planeet poster te maken.
        </p>
        <img className='containerPoster' src={planetPoster}></img>
        <h2>Omgeving propaganda poster</h2>
        <p>
          Om idee te realiseren hebben we een <a href='https://i507258.hera.fhict.nl/semester3/Spaceweek/PropagandaWallPosterV2.png'>propaganda poster</a> gemaakt. Hoe het idee tot stand is gekomen kan je vinden in het <a href='https://i507258.hera.fhict.nl/semester3/Spaceweek/versiebeheerPropagandaPoster.pdf'>versie beheer</a> van de propaganda poster.
        </p>
        <img className='containerPoster' src={propagandaPoster}></img>
        <h2>Eind video </h2>
        <p>
          Om ons eindresultaat te laten zien hebben we een video gemaakt. Deze hebben opgesteld door andere propaganda videos zijn gezet. Hier kwamen we tot dit <a href='https://i507258.hera.fhict.nl/semester3/Spaceweek/Solution Video.mp4'>eindresultaat</a>.
        </p>
      </div>
    </div>
  )
}

export default App

import customerJourney from '../img/Jade CJ.png';

function App() {
  return (
    <div className="contentContainer">
      <h1>Sprint 2</h1>
      <div className="inleidingContainer">
        <h2>Inleiding</h2>
        <p>

        </p>
      </div>
      <div className="textContainer">
        <h2>Empathy map</h2>
        <p>
          Om onze doelgroep beter te begrijpen hebben we een <a href="https://miro.com/welcomeonboard/c0ZIVUZQQVpyUFN5aDNUbnZKWWJBeDh4MG1kcEhpenhGM2ZQdTV2NDg4YzFlYjJqendLVVpXSkxhdkJreDZ2d3wzNDU4NzY0NTY1MTIxMDY0OTAwfDI=?share_link_id=914272353492">Empathy map</a>
          opgesteld. [conclusie moet hier nog komen]
        </p>
        <h2>Customer Journey</h2>
        <p>
          Na het bepalen van onze doelgroep hebben een aantal groepgenoten persona's gemaakt en met een van deze personna's heb ik een <a href="https://i507258.hera.fhict.nl/semester3/Sprint2/Jade CJ.png">customer Journey</a> gemaakt.
        </p>
        <img className='containerPoster' src={customerJourney}></img>
        <h2>Onderzoek verschillende soorten AI's</h2>
        <p>
          Om meer te weten te komen over de verschillende soorten AI's heb ik een <a href='https://i507258.hera.fhict.nl/semester3/Sprint2/Een Overzicht van Verschillende Soorten Kunstmatige Intelligentie.pdf'>bieb onderzoek</a> gedaan.
          Uit dit onderzoek is gebleken dat er 7 verschillende categorieën AI's zijn, en elke categorie heeft zijn eigen toepassingsgebied en technieken.
        </p>
        <h2>Onderzoeken naar pas vormen en verschillende maten oplossen met AI </h2>
        <p>
          Om meer te weten te komen over de verschillende vormen en maten en hoe je deze met behulp van AI kunt aanpakken, heb ik een <a href='https://i507258.hera.fhict.nl/semester3/Sprint2/Onderzoeken naar pas vormen en verschillende maten.pdf'>bieb onderzoek</a> gedaan.
          Uit dit onderzoek is gebleken dat de implementatie van generatieve kunstmatige intelligentie (AI) in de vorm van Virtual Try-On en Maatadvies aanzienlijke voordelen kan opleveren voor zowel de e-commerce als de mode-industrie.
        </p>
      </div>
    </div>
  )
}

export default App

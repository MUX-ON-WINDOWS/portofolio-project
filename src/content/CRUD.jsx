function App() {
    return (
      <div className="contentContainer">
        <h1>CRUD eigen project</h1>
        <div className="inleidingContainer">
            In dit project heb een eigen CRUD applicatie gemaakt. Dit heb ik gedaan in het framework React + Vite. Mijn code van dit project is te vinden op <a href="https://git.fhict.nl/I507258/todolistv2">GitLab</a>.
        </div>
        <div className="textContainer">
            Om meer te weten te komen over .env bestand in React + Vite heb ik een bieb <a href="https://i507258.hera.fhict.nl/semester3/CRUD/envFile.pdf">onderzoek</a> gedaan naar oplossing en het manier van toepassen van een .env bestand.
            Het gebruik van .env bestand in React + Vite is iets anders dan een .env bestand React. Bijvoorbeeld bij React is het process.env.SECRET_CODE en bij React + Vite is het import.meta.env.VITE_SECRET_CODE.
            Om een duidelijk beeld te krijgen van mijn process heb ik een <a href="https://i507258.hera.fhict.nl/semester3/CRUD/Todolist.pdf">bestand</a> aan gemaakt waar ik mijn aanpassingingen bij hou.
        </div>
      </div>
    )
  }

  export default App

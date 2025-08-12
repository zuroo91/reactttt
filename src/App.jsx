import './App.css'
import jennie from'./assets/jennie.jpg';

function App() {
  return (
    <div className="container">
      <header>
        <h1>My fav artist</h1>
        <p>artist favoritku</p>
      </header>

      <main>
        <section className="card">
          <h2>Jennie blackpink</h2>
          <img src={jennie} alt="Jennie" className='card-img' />
          <p>
            she is pretty, georges<br></br> 
            and the reason i like her is bcs she never cared about her hatters<br>
            </br>
          </p>
        </section>

        <section className="card">
          <h2>fav song from jennie</h2>
          <ul>
            <li>Like Jennie</li>
            <li>Solo</li>
            <li>Mantra</li>
            <li>Seoul City</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>© 2025 made with love for Jennie</p>
      </footer>
    </div>
  )
}

export default App
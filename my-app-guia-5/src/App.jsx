import './App.css';
import curieImagen from './assets/img/curie.jpg';
import katsukoImagen from './assets/img/katsuko.jpg';

function Cientifico({ cientifico }) {
  console.log('Datos recibidos:', cientifico);
  return (
    <div className="cientifico-card">
      <img 
        src={cientifico.imagen}
        alt={cientifico.nombre}
        className="cientifico-imagen"
      />
      <div className="cientifico-info">
        <h2>{cientifico.nombre}</h2>
        <p><strong>Profesión:</strong> {cientifico.profesion}</p>
        <p><strong>Premios:</strong> {cientifico.premios}</p>
        <ul>
          {cientifico.premiosDetalle.map((premio, index) => (
            <li key={index}>{premio}</li>
          ))}
        </ul>
        <p><strong>Descubrio:</strong> {cientifico.descubrimiento}</p>
      </div>
    </div>
  );
}

function App() {
  const cientificos = [
    {
      id: 1,
      nombre: "Maria Skłodowska-Curie",  
      profesion: "física y química",     
      premios: 4,
      descubrimiento: "polonio (elemento químico)",  
      imagen: curieImagen,
      premiosDetalle: [
        "Premio Nobel de Física", 
        "Premio Nobel de Química", 
        "Medalla Davy", 
        "Medalla Matteucci"
      ]
    },
    {
      id: 2,
      nombre: "Katsuko Saruhashi",
      profesion: "geoquímica",
      premios: 2,
      descubrimiento: "un metodo para medir el dioxido de carbono en el agua de mar",
      imagen: katsukoImagen,
      premiosDetalle: [
        "Premio Miyake de geoquimica", 
        "Premio Tanaka"
      ]
    }
  ];

  return (
    <div className="App">
      <header className="app-header">
        <h1>Científicos Notables</h1>
      </header>
      <main className="cientificos-container">
        {cientificos.map(cientifico => (
          <Cientifico key={cientifico.id} cientifico={cientifico} />
        ))}
      </main>
    </div>
  );
}

export default App;
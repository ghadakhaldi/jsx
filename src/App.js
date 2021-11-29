import './style.css'
import './App.css';
import image from "./img/images (1).png"
function App() {
  return (
    <div className="App">
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Ghada</h1>
          <br />
          <img src={image} />
          <br />
          <img src="./images/pic.png" />
        </div>
        <video width={320} height={240} controls>
          <source src="/videos/vd.mp4" type="video/mp4" />
        </video><p />
      </div>
    );
  }


export default App;

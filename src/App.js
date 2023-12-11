import './App.css';
import ReactPlayer from "react-player";

function App() {
  const vidUrl = "https://www.facebook.com/facebook/videos/10153231379946729/";
  return (
    <div className="App">
        <h1>React Player example</h1>
        <ReactPlayer
          url={vidUrl}
          playing={false}
          volume={0.5}
        />
    </div>
  );
}

export default App;

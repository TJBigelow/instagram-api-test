import "./App.css";
import Grid from "./Grid";
import { useState, useEffect } from "react";

function App() {
  const [images, setImages] = useState([]);
  const access = "";
  useEffect(() => {
    fetch(
      `https://graph.instagram.com/me/media?fields=id,caption&access_token=${access}`
    )
      .then((resp) => resp.json())
      .then((resp) => setImages(resp.data));
  }, []);

  return (
    <div className="App">
      <Grid images={images} access={access} />
    </div>
  );
}

export default App;

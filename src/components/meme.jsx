import { useState } from "react";
import "../styles/meme.css";
import memeImgFrame from "../assets/memeImage.png";
import memesData from "./memesData.jsx";

function Meme() {
  const [meme, setMemeUrl] = useState({
    topText: "Shut up",
    bottomText: "And take my money",
    randomImage: "https://i.imgflip.com/3si4.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function handleMemeUrl() {
    const memeDataVar = allMemeImages.data.memes;
    const index = Math.floor(Math.random() * memeDataVar.length);

    const url = memeDataVar[index].url;

    console.log(url);

    setMemeUrl({
      ...meme,
      randomImage: url,
    });
  }

  function handleMemeText(e) {
    setMemeUrl({
      ...meme,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="form">
      <div>
        <div>
          <label htmlFor="top-text">Top text</label>
          <input
            id="top-text"
            className="form-input"
            type="text"
            placeholder="Shut up"
            autoComplete="off"
            name="topText"
            value={meme.topText}
            onChange={handleMemeText}
          />
        </div>

        <div>
          <label htmlFor="bottom-text">Bottom text</label>
          <input
            id="bottom-text"
            className="form-input"
            type="text"
            placeholder="And take my money"
            autoComplete="off"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleMemeText}
          />
        </div>
      </div>

      <button className="btn" type="submit" onClick={handleMemeUrl}>
        Get a new meme image
        <img src={memeImgFrame} alt="button-img" />
      </button>

      {meme.randomImage && (
        <>
          <img className="memeImage" src={meme.randomImage} alt="meme" />
          <h2 className="topText">{meme.topText}</h2>
          <h2 className="bottomText">{meme.bottomText}</h2>
        </>
      )}
    </div>
  );
}

export default Meme;
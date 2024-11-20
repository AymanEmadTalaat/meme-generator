import "../styles/header.css";
import trollFace from "../assets/TrollFace.png";

function Header() {
  return (
    <div className="header">
      <div>
        <img src={trollFace} alt="logo" />
        <h1>Meme Generator</h1>
      </div>

      <span>React Course - Project 3</span>
    </div>
  );
}

export default Header;

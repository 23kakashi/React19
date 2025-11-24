import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/home">
          <img src="src/assets/movie-svgrepo-com.svg" alt="Home logo" />
        </Link>
      </div>
      <div className="header-redirection">
        <ul>
          <Link to="/about">About</Link>
          <Link to="/favorite">Favorite</Link>
        </ul>
        <ul className="auth">
          <li>LogIn</li>
          <li>Register</li>
        </ul>
      </div>
    </header>
  );
}

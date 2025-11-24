import "./about.css";
import Poster from "../Poster/Poster";

export default function About() {
  return (
    <section className="about">
      <div className="about-title">
        <h1>About CineVerse</h1>
        <p>Reimagining movie discovery with the speed of React</p>
      </div>
      <div className="movie-poster">
        <Poster />
      </div>
      <div className="mission-statement">
        <h2>Mission Statement</h2>
        <p>
          Traditional web applications often suffer from "loading
          fatigue"—spinners, layout shifts, and unresponsive interfaces while
          fetching data.
          <br />
          CineVerse was built to solve this by leveraging the concurrent
          features of React 19. The goal was to create an application that feels
          native and instant, masking network latency through intelligent
          optimistic UI and non-blocking transitions.
        </p>
      </div>
    </section>
  );
}

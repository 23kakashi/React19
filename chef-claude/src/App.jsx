// import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

// import Pad from "./pad";
// import padData from "./padData";

function App() {
  // const [pads, setPads] = useState(padData);

  // const toggle = (id) => {
  //   setPads((prevPads) =>
  //     prevPads.map((item) => {
  //       return item.id === id
  //         ? {
  //             ...item,
  //             on: !item.on,
  //           }
  //         : item;
  //     })
  //   );
  // };

  return (
    <>
      <Header />
      <Main />
      {/* <main>
        <div className="pad-container">
          {pads.map((pad) => (
            <Pad key={pad.id} {...pad} toggle={toggle} />
          ))}
        </div>
      </main> */}
    </>
  );
}

export default App;

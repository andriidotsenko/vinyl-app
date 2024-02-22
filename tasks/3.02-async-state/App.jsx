import vinylExample from "./api/vinylExample.js";
import NavigationBar from "./components/NavigationBar.jsx";
import Vinyl from "./components/Vinyl.jsx";

function App() {
  return (
    <>
      <NavigationBar />
      <Vinyl vinyl={vinylExample} />
    </>
  );
}

export default App;

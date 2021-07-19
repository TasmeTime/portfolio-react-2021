import { BrowserRouter as Router } from "react-router-dom";
import Content from "./components/content/main";
import TopSection from "./components/topSection/main";

function App() {
  return (
    <>
      <Router>
        <TopSection />
        <Content />
      </Router>
    </>
  );
}

export default App;

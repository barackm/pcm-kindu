import "./App.css";
import Header from "./components/header";

import Footer from "./components/footer";
import { Switch, Route } from "react-router-dom";
import Main from "./components/main";
// import AboutPage from "./components/views/aboutPage";
// import ServicesPage from "./components/views/servicesPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {/* <Route path="/about" component={AboutPage} /> */}
        {/* <Route path="/services" component={ServicesPage} /> */}
        <Route path="/" component={Main} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

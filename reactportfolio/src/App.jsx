import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/resume" component={ResumePage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
      <Footer />
    </Router>
  );
} // end App

export default App;

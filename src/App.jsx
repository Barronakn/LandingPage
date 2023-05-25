import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./pages/Page";
// import Services from "./components/Services";
// import Features from "./components/Features";
// import Home from "./components/Home";
// import Pricing from "./components/Pricing";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        {/* <Route path="#home" element={<Home />} />
        <Route path="#features" element={<Features />} />
        <Route path="#services" element={<Services />} />
        <Route path="#pricing" element={<Pricing />} />
        <Route path="#/testimonials" element={<Testimonials />} />
        <Route path="#contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

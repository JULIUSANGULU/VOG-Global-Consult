import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from './pages/LandingPage/landingPage';
import { BlogPage } from './pages/BlogPage/blogPage';
import { AboutUsPage } from './pages/AboutUs/aboutUs';
import { OurApproachPage } from './pages/OurApproach/ourApproachPage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/AboutUs" element={<AboutUsPage />} />
          <Route path="/OurApproach" element={<OurApproachPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

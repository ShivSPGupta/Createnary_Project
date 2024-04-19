import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Page from "./pages/Page";
import Page1 from "./pages/Page1";
import Page1Mobile from "./pages/Page1Mobile";
import Page2Mobile from "./pages/Page2Mobile";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/page2":
        title = "";
        metaDescription = "";
        break;
      case "/page-1-mobile":
        title = "";
        metaDescription = "";
        break;
      case "/page-2-mobile":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/page2" element={<Page1 />} />
      <Route path="/page-1-mobile" element={<Page1Mobile />} />
      <Route path="/page-2-mobile" element={<Page2Mobile />} />
    </Routes>
  );
}
export default App;

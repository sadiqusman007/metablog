import {Routes, Route} from "react-router-dom"
import BlogPage from "./pages/blogPage";
import HomePage from "./pages/homePage";
import PagesPage from "./pages/pagesPage";
import SinglePostPage from "./pages/singlePostPage";
import ContactPage from "./pages/contactPage";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" exact Component={HomePage} />
      <Route path="/blog" exact Component={BlogPage} />
      <Route path="/single-post" exact Component={SinglePostPage} />
      <Route path="/pages" exact Component={PagesPage} />
      <Route path="/contact" exact Component={ContactPage} />

    </Routes>

    </>
  );
}

export default App;

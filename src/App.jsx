import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  DefaultLayout  from "./components/Layouts/DefaultLayout/DefaultLayout";
import { publicRoutes } from "./routes/Routes";
import { Fragment } from "react";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            // const Layout = route.layout === null? Fragment : DefaultLayout;

            let Layout = DefaultLayout;
            if(route.layout){
              Layout = route.layout;
            } else if(route.layout === null){
              Layout = Fragment
            }
            const Page = route.component;
            return <Route path={route.path} key={index} element={<Layout><Page /></Layout>} />;
          })}

          {/* <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

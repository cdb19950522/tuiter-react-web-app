import {BrowserRouter, Route, Routes} from "react-router-dom";
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
function App() {
  return (
      <BrowserRouter>

          <div className="container">
              <Routes>
                  <Route path="/*" element={<Labs/>}/>
                  <Route path="/hello"
                         element={<HelloWorld/>}/>
                  <Route path="/tuiter/*"
                         element={<Tuiter/>}/>
              </Routes>
          </div>
      </BrowserRouter>

  );
}

export default App;

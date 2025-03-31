import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Layout/Header"
import Footer from "./Layout/Footer"
import Home from "./MyComponent/Home"
import About from "./MyComponent/About"
import Contact from "./MyComponent/Contact"
import MyUseEffect from "./component/MyUseEffect"
import MyNavigate from "./MyComponent/MyNavigate"
import MapData from "./MyComponent/MapData"
import MyContext from "./MyComponent/MyContext"
import MyCallBack from "./MyComponent/MyCallBack"
import MyMemo from "./MyComponent/MyMemo"
import FormHandling from "./MyComponent/FormHandling"
import ApiConnectivity from "./MyComponent/ApiConnectivity"
import ClMethod from "./MyComponent/ClMethod"

function App() {
  return(
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mypath" element={<MyNavigate />} />
            <Route path="/map" element={<MapData />} />
            <Route path="/context" element={<MyContext />} />
            <Route path="/callback" element={<MyCallBack />} />
            <Route path="/memo" element={<MyMemo />} />
            <Route path="/form" element={<FormHandling />} />
            <Route path="/api" element={<ApiConnectivity />} />
            <Route path="/clm" element={<ClMethod favColor={"blue"}/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App

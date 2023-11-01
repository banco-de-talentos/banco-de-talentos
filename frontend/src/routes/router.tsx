import { Routes, Route } from "react-router-dom";
import { PageForm1 } from "../pages/PageForm1";
import { PageForm2 } from "../pages/PageForm2";
import { PageForm3 } from "../pages/PageForm3";
import { PageForm4 } from "../pages/PageForm4";
import { PageNotFound } from "../pages/PageNotFound";

export const RouterForm = () => {
  return(
    <Routes>
      <Route path="/" element={<PageForm1/>}/>
      <Route path="/page2" element={<PageForm2/>}/>
      <Route path="/page3" element={<PageForm3/>}/>
      <Route path="/page4" element={<PageForm4/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}   
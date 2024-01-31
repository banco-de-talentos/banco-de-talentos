import { PageForm1 } from '../pages/PageForm1';
import { PageForm2 } from '../pages/PageForm2';
import { PageForm3 } from '../pages/PageForm3';
import PageForm4 from '../pages/PageForm4';
import PageForm5 from '../pages/PageForm5';
import TestPage from '../pages/TestPage';
import PageNotFound from '../pages/PageNotFound';
import { Routes, Route } from 'react-router-dom';

export default function PageRouter() {
  return (
    <Routes>
      <Route path="/" element={ <PageForm1/> }/>
      <Route path="/page02" element={ <PageForm2/> }/>
      <Route path="/page03" element={ <PageForm3/> }/>
      <Route path="/page04" element={ <PageForm4/> }/>
      <Route path="/page05" element={ <PageForm5/> }/>
      <Route path="/page-test" element={ <TestPage/> }/>
      <Route path="*" element={ <PageNotFound/> }/>
    </Routes>
  )
}


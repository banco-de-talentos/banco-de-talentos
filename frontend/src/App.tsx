
import './assets/styles/App.css';
import PageRouter from './routes/router';
import { FormProvider } from './context';

function App() {

  return (
    <FormProvider>
      <PageRouter />
    </FormProvider>
  )
}
export default App

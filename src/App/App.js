import HomePage from 'src/pages/home/Home.page'
import Header from '../layout/header/Header.layout'
import './app.module.scss'

const App=()=> {
  return (
    <div className="app">
      <Header/>
      <HomePage/>
   
    </div>
  );
}

export default App;

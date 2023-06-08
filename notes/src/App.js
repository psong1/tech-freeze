import './App.css';
import LoginSignupContainer from './components/LoginSignupContainer/LoginSignupContainer';
import logo from './Images/logo.png';

const App = () => {

  return (
    <div className='App'>
    
      <LoginSignupContainer/>
      <img src='{logo}' alt=''/>
      <img src={require('./Images/logo.png')} alt=""/>
    </div>
  )

}
  


export default App;

// import logo from './logo.svg';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'D:/reactapp3/dynamicwebsite/firstwebsite/node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import { Switch, Route, Redirect} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar1 from './Navbar1';
import SignIn from './SignIn';


function App() {
  
  
  return (
    <>
       <Navbar1 /><br/>
       

       <Switch>
         <Route path='/' component={Home} exact/>
         <Route path='/about' component={About} exact/>
         <Route path='/contact' component={Contact} exact/>
         <Route path='/services' component={Service} exact/>
         <Route path='/signin' component={SignIn} exact/>
        
       <Redirect to='/' />
      
       </Switch>
       
     
    </>
  );
}

export default App;

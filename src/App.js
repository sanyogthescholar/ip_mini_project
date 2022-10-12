
import './App.css';
import Navbar from './Components/JS/Navbar.js'
import Home from './Components/JS/Home.js'
import Admin from './Components/JS/Admin.js'
import SimpleUser from './Components/JS/SimpleUser'
import CommanLogin from './Components/JS/CommanLogin'
import Notification from './Components/JS/Notification'
import ProfileService from './Components/JS/ProfileService'
import ProfileUser from './Components/JS/ProfileUser'
import Addcourse from './Components/JS/Addcourse'
import Resume from './Components/JS/Resume'
import {Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
     <Route exact path="/"><Home/></Route> 
     <Route exact path="/SimpleUser"><SimpleUser/></Route>
     <Route exact path="/Admin"><Admin/></Route>
     <Route exact path="/CommanLogin"><CommanLogin/></Route>
     <Route exact path="/Notification"><Notification/></Route>
     <Route exact path="/ProfileService"><ProfileService/></Route>
     <Route exact path="/ProfileUser"><ProfileUser/></Route>
     <Route exact path="/Addcourse"><Addcourse/></Route>
     <Route exact path="/Resume"><Resume/></Route>
      </Switch>
    </div>
  );
}

export default App;

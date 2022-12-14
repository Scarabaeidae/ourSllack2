import Header from './components/Navigation/Header';
import ChannelAdd from './components/ChannelAdd/ChannelAdd';
import ChannelRemove from './components/ChannelRemove/ChannelRemove';
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/Pages/About";
import App1 from './components/App1'
import DirectMessage from "./components/Pages/DirectMessage"
import ChannelBrowser from "./components/Pages/ChannelBrowser";
import UserProfile from './components/Pages/UserProfile';
import Register from './components/Pages/Register'
import SuccessfulSignUp from './components/Pages/SuccessfulSignUp';
import ChannelListGetter from "./components/ChannelComp/ChannelListGetter";
import PutUserOut from './components/RemoveFromChannel/PutUserOut';
import PutUserIn from './components/AddToChannel/PutUserIn';
import Sidebar from './components/Navigation/Sidebar'
import ChannelBrowserPart2 from './components/Pages/ChannelBrowserp2';
 
function App() {
  return (
    <div className="App">

      
      <Router>

        <Routes>
          <Route path="/register" element={<Register />} />  {/*This is also the path to logout. */}
          <Route path="/" element={<App1 />}/>
          <Route path="/channel_home" element={<ChannelBrowserPart2/>} />
          <Route path="/user_profile" element={<UserProfile/>} />
          <Route path="/about" element={<About />} />
          <Route path="/direct_messages" element={<DirectMessage />} />
          <Route path="/current_channel" element={<ChannelBrowser />} />
          <Route path="/sign_up_successful" element={<SuccessfulSignUp />} />
          <Route path="/search_channel" element={< ChannelListGetter/>} />
          <Route path="/add_channel" element={<ChannelAdd/>} />
          <Route path="remove_channel" element={<ChannelRemove/>} />
          <Route path="/put_in_user" element={<PutUserIn/>} />
          <Route path="/put_out_user" element={<PutUserOut/>} />
        </Routes> 
   
      </Router>
    </div>
   
    

  );
}

export default App;

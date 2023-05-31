// Import data

// Import components
import './App.css';
import SearchBar from './components/Seachbar.jsx'
import SideBar from './components/SideBar';
import Listings from './components/Listings';
import Nav from './components/Nav';
import IndividualListing from './components/IndividualListing';


function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        {/* Your content will go here! */}
        <Nav/>
        <SearchBar/>
        <SideBar/>
        <Listings/>
        <IndividualListing/>
      </div>
    </div>
  );
}

export default App;

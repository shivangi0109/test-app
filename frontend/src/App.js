import NavigationBar from './components/NavigationBar';
// import Login from './components/Login';
// import PetsProfile from './components/PetsProfile';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <header className="App-header">
        <Main />
        {/* <Login /> */}
        {/* <PetsProfile /> */}
      </header>
    </div>
  );
}

export default App;

import './App.css';
import Header from './Header';
import Card from './Card';
function App() {
  return (
    <div className="App">
      <h1 className='h1'> Aashish Garg (^_^) </h1>
      <div className='types'>
        <Header aashish="Aashish" garg="Garg"></Header>
        <Header aashish="aashish" garg="garg"></Header>
        <Header aashish="AaShIsH" garg="GaRg"></Header>
      </div>
      <Card></Card>
    </div>
  );
}

export default App;

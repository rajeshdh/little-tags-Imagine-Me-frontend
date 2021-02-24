// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App  bg-sp-white">
      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
       
        <div className="relative bg-sp-section-white py-3 sm:max-w-xl sm:mx-auto">
        <h2 className="text-sp-heading-blue"> Section Heading</h2>
          <div className="relative px-4 py-10  sm:rounded-3xl sm:p-20 flex space-x-4">
            <button className="bg-sp-btn-default hover:bg-sp-btn-default-dark text-white font-bold py-2 px-4 rounded">Default</button>
          
            <button className="bg-sp-btn-selected hover:bg-sp-btn-selected-dark text-white font-bold py-2 px-4 rounded">Selected</button>
         
            <button className="bg-sp-btn-primary hover:bg-sp-btn-primary-dark text-white font-bold py-2 px-4 rounded">Primary</button>
          </div>
          <h3 className="text-sp-text-highlight">Some Text to highlight</h3>
        <p className="text-sp-text-default">Regular texts like product description</p>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default App;

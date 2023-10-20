import ApiPlaceHolder from './componentes/ApiPlaceHolder.js'

function App() {
  return (
    <div className="container">
      <div className="App-header">
        <h1 className='text-danger'> API</h1>
        {/* llamada al componente */}
        <ApiPlaceHolder/>
      </div>
    </div>
  );
}

export default App;

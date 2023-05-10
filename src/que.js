import { useState } from 'react';

function App() {
  const [texto, setTexto] = useState('')

  function cambioTexto(e) {
    const inputValue = e.target.value;
    if (inputValue.length >= 100) {
      setTexto(inputValue);
    } else {
      alert('Ha alcanzado el límite de caracteres');
    }
  }




  return (
    <div>
      <p><textarea value={texto} onChange={cambioTexto} cols="100" rows="5" maxLength={100}></textarea></p>
      <p>Cantidad de caracteres ingresados: {texto.length}</p>
    </div>
    
  );
}

export default App;
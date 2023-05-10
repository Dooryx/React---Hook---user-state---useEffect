import React, { useState } from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";        
import { InputTextarea } from 'primereact/inputtextarea';
import { Divider } from 'primereact/divider';

function App() {
  const [texto, setTexto] = useState('');

  

  function cambioTexto(e) {
    const inputValue = e.target.value;
    if (inputValue.length >= 24) {
      setTexto(inputValue);
    } else {
      setTexto(inputValue.slice(0, 24));
    }
  }
  function contarPalabras(texto) {
    const palabras = texto.trim().split(' ');
    return palabras.length;
  }

  return (
    <Divider>
      <p>
        <InputTextarea  placeholder="Solo hasta 25 caracteres maximo" value={texto} onChange={cambioTexto} cols="100" rows="5" maxLength={25} ></InputTextarea>
      </p>
      <Divider>
      {texto.length > 24 && ( <p style={{ color: 'red' }}>Ha alcanzado el límite de caracteres</p>)}
      <p>Cantidad de caracteres ingresados: {texto.length}</p>
      </Divider>
      <Divider>
      <p>Cantidad de palabras ingresadas: {contarPalabras(texto)}</p>
      </Divider>
    </Divider>
    
  );
}

export default App;

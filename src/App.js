import { useState } from 'react'
import "./App.css"

export default function App() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultado, setResultado] = useState('')

  function calcularIMC() {
    const alturaDecimal = altura / 100;
    const IMC = peso / (alturaDecimal * alturaDecimal)
    if (IMC < 18.6) {
      setResultado('Você está abaixo do peso! \n Seu IMC : ' + IMC.toFixed(2));
    }
    else if (IMC >= 18.6 && IMC < 24.9) {
      setResultado('Peso normal! \n Seu IMC : ' + IMC.toFixed(2));
    }
    else if (IMC >= 24.9 && IMC <= 29.9) {
      setResultado('Sobrepeso! \n Seu IMC : ' + IMC.toFixed(2));
    }
    else if (IMC > 29.9 && IMC <= 34.9) {
      setResultado('Obesidade (Grau I) \n Seu IMC : ' + IMC.toFixed(2));
    }
    else if (IMC > 34.9 && IMC <= 39.9) {
      setResultado('Obesidade (Grau II) \n Seu IMC : ' + IMC.toFixed(2));
    }
    else if (IMC > 39.9) {
      setResultado('Obesidade (Grau III) ou Mórbida \n Seu IMC : ' + IMC.toFixed(2));
    }
  }


  return (
    <div className="App">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>
      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em (kg) Ex: 90"
          value={peso}
          onChange={(e) => setPeso(parseFloat(e.target.value))} />

        <input
          type="text"
          placeholder="Altura em (cm) Ex: 185"
          value={altura}
          onChange={(e) => setAltura(parseFloat(e.target.value))} />

        <button onClick={calcularIMC}>Calcular</button>
      </div>
      <h2>{resultado}</h2>
    </div>
  );
}


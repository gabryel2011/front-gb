import { useState,  useEffect } from 'react'


function App() {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(true);

useEffect(() => {
  //Função assicrona para buscar os dados 
  async function buscarDados() {
    try {
      const resposta = await fetch('htps://api.exemplo.com/dados');
      const dadosJson = await resposta.json();
      setDados(dadosJson) 
    } catch(error) {
      console.error("Erro ao buscar os dados:", error);
    } finally {
      setCarregando(false);
    }
  }
  buscarDados();
},[]); //O array vazio garante que o efeito rode apenas na montagem do componente
if (carregando) {
  return <p>Carregando...</p>;
}
  return (
    <>
     <div>
      <h1>Dados da API</h1>
      {/* Renderização dos dados */}
      <pre>{JSON.stringify(dados, null, 2)}</pre>
     </div>
    </>
  )
}

export default App

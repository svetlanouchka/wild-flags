import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// Créez les états nécessaires avec useState:

// Un état pour stocker les données des pays récupérées depuis l'API.
// Un état pour gérer la région sélectionnée par l'utilisateur.
// Une liste statique des régions pour le menu déroulant(ex. : "Europe", "Asia", etc.).
// Utilisez le hook useEffect pour récupérer les données de l'API suivante au montage du composant :
// URL de l'API : https://restcountries.com/v3.1/all

// Affichez un menu déroulant permettant de sélectionner une région.

// Si une région est sélectionnée, affichez uniquement les pays appartenant à cette région.

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      </div>
      <h1>Wild Flags</h1>
      
    </>
  )
}

export default App

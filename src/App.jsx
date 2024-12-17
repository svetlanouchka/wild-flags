import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import CountryCard from "./components/CountryCard";

function App() {
	const [countries, setCountries] = useState([]);
	const [region, setRegion] = useState("");
	const listRegion = [
		"Europe",
		"Africa",
		"Asia",
		"Antarctic",
		"Americas",
		"Oceania",
	];

	useEffect(() => {
		// Appel API avec Axios
		const fetchCountries = async () => {
			try {
				const response = await axios.get("https://restcountries.com/v3.1/all");
				console.log("response -->", response);
				console.log("response.data -->", response.data);
				setCountries(response.data); // Mettre à jour le state avec les données de l'API
			} catch (err) {
				setError("Erreur lors du chargement des pays");
				console.error(err);
			}
		};
		fetchCountries();
	}, []);
	console.log("countries", countries);
	return (
		<>
			<select name="select-region" id="select-region">
				{listRegion.map((region, index) => (
					<option key={index} value={region}>
						{region}
					</option>
				))}
			</select>
			{countries.map((country) => {
				return <CountryCard key={country.ccn3} country={country} />;
			})}
		</>
	);
}

export default App;

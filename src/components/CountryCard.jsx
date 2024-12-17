// Créez un composant CountryCard qui affichera les informations suivantes pour chaque pays :

// Nom du pays : name.common.
// Drapeau : flags.png.
// Capitale : Affichez uniquement la première capitale si elle existe (capital[0]).
// Région : region.
// Ajoutez un style simple pour rendre les cartes visuelles.

const CountryCard = ({ country }) => {
	console.log("country in component", country);

	return (
		<>
			<div className="country-card">
				<img src={country.flags.png} alt="Flag" className="country-flag" />
				<h2 className="country-name">{country.name.common}</h2>
				<p className="country-name">
					{country.capital ? country.capital[0] : "N/A"}
				</p>
				<p className="country-name">{country.region}</p>
			</div>
		</>
	);
};

export default CountryCard;

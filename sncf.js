var sncf = [
	{ ville: 'Paris-Lyon', trajet: 'Lyon', duree: 75 },
	{ ville: 'Paris-Lyon', trajet: 'Paris-Nord', duree: 15 },
	{ ville: 'Paris-Lyon', trajet: 'Mompellier', duree: 125 },
	{ ville: 'Paris-Lyon', trajet: 'Paris-Monparnasse', duree: 15 },
	{ ville: 'Paris-Monparnasse', trajet: 'Rennes', duree: 125 },
	{ ville: 'Paris-Monparnasse', trajet: 'Bordeaux', duree: 180 },
	{ ville: 'Paris-Monparnasse', trajet: 'Paris-Nord', duree: 15 },
	{ ville: 'Paris-Monparnasse', trajet: 'Rennes', duree: 125 },
	{ ville: 'Rennes', trajet: 'Brest', duree: 75 },
	{ ville: 'Bordeaux', trajet: 'Toulouse', duree: 180 },
	{ ville: 'Toulouse', trajet: 'Mompellier', duree: 240 },
	{ ville: 'Lyon', trajet: 'Marseille', duree: 90 },
	{ ville: 'Paris-Nord', trajet: 'Londres', duree: 150 },
	{ ville: 'Berlin', trajet: 'Munich', duree: 120 }
];

function find_station(sncf) {
	for (x in sncf) {
		if (sncf[x].name == name) {
			return sncf[x];
		}
	}
	return false;
}

function find_target_road(sncf) {}

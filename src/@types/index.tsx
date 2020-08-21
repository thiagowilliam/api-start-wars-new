export interface APIPlanetHome {
  name: string;
  terrain: string;
  diameter: string;
  climate: string;
  url: string;
  films: Array<string>;
}

export interface APIPlanet {
  name: string;
  terrain: string;
  diameter: string;
  climate: string;
  url: string;
  films: Array<string>;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  residents: Array<string>;
}

export interface APIPeople {
  name: string;
  hair_color: string;
  eye_color: string;
  gender: string;
  species: Array<string>;
  vehicles: Array<string>;
}

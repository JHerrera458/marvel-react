import axios from "axios";

const hash = "cfdc75b13f59ca496e159035820ce2cb";
const ts = 35;
const apikey = "76d7d282867d0e7a770a6e3ebabc0c8e";

const AUTH = `ts=${ts}&apikey=${apikey}&hash=${hash}`;

export function GetHeroes() {
  const URL = `https://gateway.marvel.com:443/v1/public/characters?${AUTH}`;

  return axios
    .get(URL)
    .then((response) => {
      const heroes = response.data.data.results;
      return heroes;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error; // Lanzar el error para que sea manejado por el llamador de la función
    })
    .finally(() => {
      // Aquí puedes hacer cualquier limpieza necesaria o acciones finales
    });
}

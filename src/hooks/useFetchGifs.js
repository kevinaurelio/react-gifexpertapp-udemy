//hook creado para loading y carga de los datos solicitados a la API
//por medio del helper getGifs

import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    // los efectos no pueden ser async
    getGifs(category) //funcion importada del helper donde esta el fetch, es una promesa
      .then((imgs) => {
        setState({
          data: imgs, //se cargan las imagenes en el state del hook
          loading: false,
        });
      }); //getGifs retorna una promesa ya que es una respuesta de un fetch() en getGifs/helper
  }, [category]);
  return state;
};

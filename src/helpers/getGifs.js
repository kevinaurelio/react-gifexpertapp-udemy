//PETICION HTTP / get data from the RestApi with async-await and fetch()

export const getGifs = async (category) => { //retorna una promesa
  //funcion para recolectar data de un API, async
  const URI = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=sHO4Af34m7xODtNNBVS1iXI8Wh63JTNn`;

  //promesa - peticion fetch a API
  const resp = await fetch(URI);
  const { data } = await resp.json(); //data de la resp destructurada

  const gifs = data.map((img) => {
    // arreglo creado para tomar los datos precisos que necesitamos de data devuelta de la peticion fetch
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs //solo retorna gifs que es el nuevo arreglo con los
};

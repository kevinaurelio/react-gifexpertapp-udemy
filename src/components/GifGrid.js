import React from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { loading, data: images } = useFetchGifs(category);

  // const [images, setimages] = useState([]);

  // useEffect(() => {
  //   getGifs(category)  //funcion importada del helper donde esta el fetch
  //   .then( imgs => setimages(imgs)); //getGifs retorna una promesa
  // }, [ category ]);
  //Si el segundo argumento que es una lista de dependencias, si se envia vacio solo se disparará una unica vez

  return (
    <>
      <h3 className='animate__animated animate__fadein'>{category}</h3>
      
      {loading && <p className="animate__animated animate__flash">Loading...</p>}
      
      <div className="animate__animated animate__fadeIn animate__slow">
        <ol className="card-grid">
          {images.map((img) => (
            <GifGridItem key={img.id} img={img} />
          ))}
        </ol>
      </div>
    </>
  );
};

export default GifGrid;

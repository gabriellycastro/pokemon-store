import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getUniquePokemon } from "../../services/PokeAPI/config";

export default function Product() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getUniquePokemon(props.item);

        console.log(response, "prod resp");

        setProduct(response.data);
      } catch (error) {
        if (error.status === 404) {
          console.log("Pokemon not found");
        }

        console.log("Somenthing went wrong -- Product --> ", error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Header />
      <main className="product">
        {product.map((prod) => {
          return (
            <>
              <div className="product__images">

              </div>

              <div className="product__infos">
                <h2>{prod.name}</h2>
              </div>
            </>
          );
        })}
      </main>
      <Footer />
    </>
  );
}

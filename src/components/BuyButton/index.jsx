export default function BuyButton(props) {

    function addToCart(img, name, price) {
        const minicartItem = `<li className=${name}>
        <figure>
          <img
            src=${img}
            alt=${name}
            className="pokemon__image front"
          />
        </figure>
        <h2 className="pokemon__name">${name}</h2>
        <div className="pokemon__info">
          <p>
            <span className="pokemon__info--name">Price</span>
            <span className="pokemon__info--value">${price}</span>
          </p>
        </div>
      </li>`

      let minicart = document.getElementsByClassName('minicart__middle')
      minicart.append(minicartItem)
    }

    return (
        <button onClick={() => addToCart(props.img, props.name, props.price)}
            className="pokemon__buy pokemon-font-style"
            data-price={`${props.price}`}
            data-name={`${props.name}`}
            data-img={`${props.img}`}
            >
            Catch
        </button>
    );
}

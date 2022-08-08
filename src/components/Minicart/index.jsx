import close from "../../assets/ico-close.png";

export default function Minicart(props) {

    const minicart = document.getElementById('minicart');

    function openMinicart() {
        minicart.classList.add('active');
    }

    function closeMinicart() {
        minicart.classList.remove('active');
    }

    function setMinicartQuantity() {
        let items = document.querySelectorAll(".minicart__middle li");
        return items.length;
    }

    return (
        <>
        <div className="minicart-container" onClick={openMinicart}>
            <img className='icon-minicart' src={props.icon} alt='Cart'/>
            <i className="quantity-minicart">{setMinicartQuantity()}</i>
        </div>

        <div className="minicart" id="minicart">
            <section className="minicart__header">
                <img className='icon-minicart' src={props.icon} alt='Cart'/>
                <p>Minicart</p>
                <button className="minicart__close" onClick={closeMinicart}>
                <img className='icon-close' src={close} alt='Close'/>
                </button>
            </section>
            <section className="minicart__middle">
                
            </section>
            <section className="minicart__footer">
                <button className="minicart__finish pokemon-font-style">Finish Shopping</button>
            </section>
        </div>
        </>
    )
}
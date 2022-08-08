import logo from '../../assets/ico-logo.png';
import search from '../../assets/ico-search.png';
import cart from '../../assets/ico-cart.png';
import SearchBar from '../SearchBar';
import Minicart from '../Minicart';

export default function Header() {
    return (
        <header className='header'>
            <img className='icon-logo' src={logo} alt='PokéStore Logo'/>

            <SearchBar icon={search} />

            <Minicart icon={cart} />
        </header>
    )
}
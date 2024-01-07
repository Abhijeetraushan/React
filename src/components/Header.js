import { LOGO_IMG } from "../utility/constant";

const Header=()=>{
    return(
        <div className='header'>
        <div className='logo-container'>
            <img className='logo'
            src={LOGO_IMG}
            />
        </div>
        <div className='nav'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Usi</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    )
}
export default Header;
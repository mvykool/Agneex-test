import { useLocation, Link } from 'react-router-dom'
import {CgMenuGridO} from 'react-icons/cg';
import Logo from "../../../assets/images/logo.png"
import Search from '../search/Search';
import './Navbar.css';

const Navbar = () => {

	const location = useLocation();
	const isResultsPage = location.pathname === '/results';

	return (
		<nav>
			<div className={isResultsPage ? "nav-bar-results" : "nav-bar"}>
			{isResultsPage ? (

				<div className='nav-left'>
					<Link to={"/"}><img src={Logo} alt="logo" className='logo-result' /></Link>
					<Search/>
				</div>
			
			) :(null)}

				<div className='nav-right'>
				<a href="#" className="nav-link">Gmail</a>
				<a href="#" className="nav-link">Imágenes</a>
			
				<div className="menu-btn">
				<CgMenuGridO 
				size="25px" 
				color="#5e5e5e"
				style={{
					cursor: "pointer"
				}}/>
				</div>
		
				<button className="nav-btn">Acceder</button>
				</div>
			</div>
		</nav>
	)
}
	
	export default Navbar
import { useLocation, Link } from 'react-router-dom'
import {CgMenuGridO} from 'react-icons/cg';
import {IoSettingsOutline} from 'react-icons/io5';
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

				<>
				<div className='nav-left'>
					<Link to={"/"}><img src={Logo} alt="logo" className='logo-result' /></Link>
					<Search/>
				</div>
			
				<div className='nav-right-result'>
				<IoSettingsOutline className="nav-icon"/>
				<CgMenuGridO className="nav-icon"/>
				<button className="nav-btn">Acceder</button>
				</div>

				</>

			) :(

				<>
				<div className='nav-right'>
					<a href="#" className="nav-link">Gmail</a>
					<a href="#" className="nav-link">Imágenes</a>
					<CgMenuGridO className="nav-icon"/>
					<button className="nav-btn">Acceder</button>
				</div>
				</>

			)}

			</div>
		</nav>
	)
}
	
	export default Navbar
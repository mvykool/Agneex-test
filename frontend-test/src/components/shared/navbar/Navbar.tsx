import { useContext } from 'react';
import { useLocation, Link} from 'react-router-dom'
import Logo from "../../../assets/images/logo.png"
import Search from '../search/Search';
import { SearchContext } from '../../../context/SearchContext';
import './Navbar.css';


const Navbar = () => {

	const { searchTerm} = useContext(SearchContext);
	const location = useLocation();
	const isResultsPage = location.pathname === `/results/${searchTerm}`;
	const isHomePage = location.pathname === "/";

	if (!isHomePage && !isResultsPage) {
		return null;
	}

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
				<i className="fas fa-gear nav-icon nav-icon-bg"></i>
				<button className='nav-icon-bg'>
					<i className="gg-menu-grid-o nav-icon"></i>
					</button>
				<button className="nav-btn">Acceder</button>
				</div>

				</>

			) :  (

				<>
				<div className='nav-right'>
					<a href="#" className="nav-link">Gmail</a>
					<a href="#" className="nav-link">Imágenes</a>
					<button className='nav-icon-bg'>
					<i className="gg-menu-grid-o nav-icon"></i>
					</button>
					<button className="nav-btn">Acceder</button>
				</div>
				</>

			)}

			</div>
		</nav>
	)
}
	
	export default Navbar
import {CgMenuGridO} from "react-icons/cg"

const Navbar = () => {
	return (
		<nav>
			<div className="nav-bar">
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
		</nav>
	)
	}
	
	export default Navbar
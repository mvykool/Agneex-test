import Logo from "../../assets/images/logo.png"
import {CgSearch} from "react-icons/cg"

const Home = () => {
return (
	<>
<section>
	<div className="main">
		<img src={Logo} alt="logo" className="logo" />

		<div className="search-home">
		<CgSearch 
		size="16px" 
		color="#5e5e5e"
		/>	
		<input type="search"  />
		</div>

		<button className="search-btn">Buscar</button>
	</div>
</section>
</>
)
}

export default Home
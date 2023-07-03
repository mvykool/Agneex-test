import Logo from "../../assets/images/logo.png"
import Search from "../shared/search/Search";
import './Home.css'

const Home = () => {

return (
	<>
	<section className="main-content">
		<img src={Logo} alt="logo" className="logo" />
			<Search/>
	</section>
</>
)}

export default Home;
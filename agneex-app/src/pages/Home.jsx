import HomeNavbar from "../components/HomeNavbar"
import Logo from "../assets/images/logo.png"

const Home = () => {
  return (
	<>
  <HomeNavbar/>
  <section>
    <div className="main">
        <img src={Logo} alt="logo" className="logo" />
        <input type="search" className="search-home" />
        <button className="search-btn">Buscar</button>
    </div>
  </section>
  </>
  )
}

export default Home
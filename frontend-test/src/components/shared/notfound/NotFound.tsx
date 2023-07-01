import { Link } from "react-router-dom"
import "./NotFound.css"

const NotFound = () => {
  return (
	<section className="notfound-section">
		<div>Not page Found</div>
		<button className="notfound-btn"><Link to={"/"}><small>go back to home page</small></Link></button>
	</section>
  )
}

export default NotFound
import '../styles/Banner.css';
import logo from '../assets/logo.png';


function Banner() {

    const title = "Le magasin des plantes"
    return(
    <div className="lmj-banner">
        <img src={logo} alt='jungle'/>
        <h1>{title}</h1>
    </div>
    )
}

export default Banner;
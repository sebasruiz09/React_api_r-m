import './Home.css'
import { Main } from "../../Layout/Main/Main";
import { Header } from "../../Layout/Header/Header";
import { Footer } from "../../Layout/Footer/Footer";


export const Home =() =>{
    return(
        <>
            <div className="home_container">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </>
    )
}

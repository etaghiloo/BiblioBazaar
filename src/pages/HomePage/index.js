import Header from "../../components/header";
import Search from "../../components/search";
import "./style.css";

export default function Home() {
    return (
        <div className="home-page">
            <Header />
            <div className="background mx-3">
                <Search />
            </div>
        </div>
    )
}
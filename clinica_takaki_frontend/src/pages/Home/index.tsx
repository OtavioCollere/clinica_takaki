import CardDashboard from "../../components/CardDashboard";
import Menu from "../../components/Menu";
import './index.css';

const Home = () => {
    return (
        <main>
            <div className="mainBox">
                <Menu />

                <div className="content">
                    <header>
                        <div className="headerLeft">
                            <h6>Dashboard</h6>
                        </div>
                    </header>
                    <div className="bodyDashboard">
                        <div className="cardsArea">
                            <CardDashboard title={"Total vendas"} value={"$859.9"} oldValue={"$650.1"}/>
                            <CardDashboard title={"Total vendas"} value={"$859.9"} oldValue={"$650.1"}/>
                            <CardDashboard title={"Total vendas"} value={"$859.9"} oldValue={"$650.1"}/>
                            <CardDashboard title={"Total vendas"} value={"$859.9"} oldValue={"$650.1"}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;

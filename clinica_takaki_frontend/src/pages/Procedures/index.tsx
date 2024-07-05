import { Link } from 'react-router-dom';
import Menu from "../../components/Menu";
import '../Home/index.css';
import './index.css'
import { FaSyringe } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { PiIdentificationCard } from "react-icons/pi";
import { MdOutlineMenu } from "react-icons/md";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BiSolidDetail } from "react-icons/bi";
import CustomizedTr from '../../components/CustomizedTr';


const ProcedurePage = () => {
    return (
        <main>
            <div className="mainBox">
                <Menu />

                <div className="content">
                    <header>
                        <div className="headerLeft">
                            <h6>Procedimentos</h6>
                        </div>
                        <div className="headerRight">
                            <button > <Link to="/addCostumer">Cadastrar cliente <BsFillPersonPlusFill className="iconBtn" /></Link> </button>
                        </div>
                    </header>
                    <div className="bodyCostumers">
                         
                            <div className="customizedTable">

                                <div className="customizedThead">
                                    <div className="customizedTh td20">Nome <IoPersonCircle className='iconBtn'/> </div>
                                    <div className="customizedTh td25">Procedimento <MdOutlineMailOutline className='iconBtn'/></div>
                                    <div className="customizedTh td15">Região <PiIdentificationCard className='iconBtn'/></div>
                                    <div className="customizedTh td20">Produto <FaPhone className='iconBtn'/></div>
                                    <div className="customizedTh td15">Data <BsCalendarDate className='iconBtn'/></div>
                                    <div className="customizedTh td5">Ações <MdOutlineMenu className='iconBtn'/></div>
                                </div>

                                <div className="customizedTbody">
                                    <CustomizedTr nome='Otavio Collere' procedimento='Botox' regiao='Facial superior' produto='ProdutoX' data='16/10/2024' />
                                </div>
                            </div>

                        
                         
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProcedurePage;

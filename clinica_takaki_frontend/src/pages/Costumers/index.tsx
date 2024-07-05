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


const CostumerPage = () => {
    return (
        <main>
            <div className="mainBox">
                <Menu />

                <div className="content">
                    <header>
                        <div className="headerLeft">
                            <h6>Clientes</h6>
                        </div>
                        <div className="headerRight">
                            <button > <Link to="/addCostumer">Cadastrar cliente <BsFillPersonPlusFill className="iconBtn" /></Link> </button>
                        </div>
                    </header>
                    <div className="bodyCostumers">
                         
                            <div className="customizedTable">

                                <div className="customizedThead">
                                    <div className="customizedTh td20">Nome <IoPersonCircle className='iconBtn'/> </div>
                                    <div className="customizedTh td25">Email <MdOutlineMailOutline className='iconBtn'/></div>
                                    <div className="customizedTh td15">CPF <PiIdentificationCard className='iconBtn'/></div>
                                    <div className="customizedTh td20">Telefone <FaPhone className='iconBtn'/></div>
                                    <div className="customizedTh td15">Nascimento <BsCalendarDate className='iconBtn'/></div>
                                    <div className="customizedTh td5">Ações <MdOutlineMenu className='iconBtn'/></div>
                                </div>

                                <div className="customizedTbody">
                                    <div className="customizedTr">
                                        <div className="customizedTd td20">Otavio Takaki</div>
                                        <div className="customizedTd td25">otaviosk59@gmail.com</div>
                                        <div className="customizedTd td15">08174162933</div>
                                        <div className="customizedTd td20">41996335828</div>
                                        <div className="customizedTd td15">16/10/2003</div>
                                        <div className="customizedTd td5">
                                            <button><BiSolidDetail /></button>
                                            <button><FaSyringe /></button>
                                        </div>
                                        
                                    </div>

                                    <div className="customizedTr">
                                        <div className="customizedTd td20">Otavio Takaki</div>
                                        <div className="customizedTd td25">otaviosk59@gmail.com</div>
                                        <div className="customizedTd td15">08174162933</div>
                                        <div className="customizedTd td20">41996335828</div>
                                        <div className="customizedTd td15">16/10/2003</div>
                                        <div className="customizedTd td5">
                                            <button><BiSolidDetail /></button>
                                            <button><FaSyringe /></button>
                                        </div>
                                        
                                    </div>

                                    <div className="customizedTr">
                                        <div className="customizedTd td20">Otavio Takaki</div>
                                        <div className="customizedTd td25">otaviosk59@gmail.com</div>
                                        <div className="customizedTd td15">08174162933</div>
                                        <div className="customizedTd td20">41996335828</div>
                                        <div className="customizedTd td15">16/10/2003</div>
                                        <div className="customizedTd td5">
                                            <button><BiSolidDetail /></button>
                                            <button><FaSyringe /></button>
                                        </div>
                                        
                                    </div>

                                    <div className="customizedTr">
                                        <div className="customizedTd td20">Otavio Takaki</div>
                                        <div className="customizedTd td25">otaviosk59@gmail.com</div>
                                        <div className="customizedTd td15">08174162933</div>
                                        <div className="customizedTd td20">41996335828</div>
                                        <div className="customizedTd td15">16/10/2003</div>
                                        <div className="customizedTd td5">
                                            <button><BiSolidDetail /></button>
                                            <button><FaSyringe /></button>
                                        </div>
                                        
                                    </div>

                                    <div className="customizedTr">
                                        <div className="customizedTd td20">Otavio Takaki</div>
                                        <div className="customizedTd td25">otaviosk59@gmail.com</div>
                                        <div className="customizedTd td15">08174162933</div>
                                        <div className="customizedTd td20">41996335828</div>
                                        <div className="customizedTd td15">16/10/2003</div>
                                        <div className="customizedTd td5">
                                            <button><BiSolidDetail /></button>
                                            <button><FaSyringe /></button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                        
                         
                    </div>
                </div>
            </div>
        </main>
    );
}

export default CostumerPage;

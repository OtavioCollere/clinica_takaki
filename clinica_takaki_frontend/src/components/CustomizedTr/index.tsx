import { Link } from 'react-router-dom';
import Menu from "../../components/Menu";
import './index.css'
import { FaSyringe } from "react-icons/fa";
import { BiSolidDetail } from "react-icons/bi";

interface IRequest
{
    nome : string,
    procedimento : string,
    regiao : string,
    produto : string,
    data : string
}

const CustomizedTr = ( {nome, procedimento, regiao, produto, data} : IRequest ) => {
    return (
        <div className="customizedTr">
            <div className="customizedTd td20">{nome}</div>
            <div className="customizedTd td25">{procedimento}</div>
            <div className="customizedTd td15">{regiao}</div>
            <div className="customizedTd td20">{produto}</div>
            <div className="customizedTd td15">{data}</div>
            <div className="customizedTd td5">
                <button><BiSolidDetail /></button>
                <button><FaSyringe /></button>
            </div>
        </div>
    );
}

export default CustomizedTr;

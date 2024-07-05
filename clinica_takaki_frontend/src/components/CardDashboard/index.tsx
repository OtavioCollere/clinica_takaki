
import './index.css';

interface IData
{
    title : string,
    value : string,
    oldValue : string
}

const CardDashboard = ({title, value, oldValue} : IData ) => {
    return (
        <div className='cardDashboard'>
            <div className="headerCard">
                <h4>{title}</h4>
            </div>
            <div className="bodyCard">
                <p className="value">{value}</p>
                <p><span>Vs mê</span>{oldValue}</p>
            </div>
        </div>
    );
}

export default CardDashboard;

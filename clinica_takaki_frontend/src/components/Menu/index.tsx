import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdDashboard, MdOutlinePersonAddAlt } from "react-icons/md";
import { FaMoneyCheck, FaSyringe } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import './index.css';

const Menu = () => {
  return (
    <nav>
      <div className="headerNav">
        <h2>LOGO AQUI</h2>
      </div>
      <div className="bodyNav">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              <i><MdDashboard /></i> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/financeiro" className={({ isActive }) => (isActive ? 'active' : '')}>
              <i><FaMoneyCheck /></i> Financeiro
            </NavLink>
          </li>
          <li>
            <NavLink to="/procedures" className={({ isActive }) => (isActive ? 'active' : '')}>
              <i><FaSyringe /></i> Procedimentos
            </NavLink>
          </li>
          <li>
            <NavLink to="/costumers" className={({ isActive }) => (isActive ? 'active' : '')}>
              <i><FaPeopleGroup /></i> Clientes
            </NavLink>
          </li>
          <li>
            <NavLink to="/addCostumer" className={({ isActive }) => (isActive ? 'active' : '')}>
              <i><MdOutlinePersonAddAlt /></i> Cadastrar Cliente
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;

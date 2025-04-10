import React from 'react';
import './accesories.styles.css';
import Navbar from "../../components/nav-bar/nav_bar.component";

function AccessoriesTable() {
  return (

    <>
    <Navbar></Navbar>
    <div className="table-container">
      <h2>Lista de Accesorios</h2>
      <table>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://via.placeholder.com/80?text=Gafas" alt="Gafas de sol" />
            </td>
            <td>Gafas de sol</td>
          </tr>
          <tr>
            <td>
              <img src="https://via.placeholder.com/80?text=Reloj" alt="Reloj" />
            </td>
            <td>Reloj</td>
          </tr>
          <tr>
            <td>
              <img src="https://via.placeholder.com/80?text=Pulsera" alt="Pulsera" />
            </td>
            <td>Pulsera</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
    
  );
}

export default AccessoriesTable;

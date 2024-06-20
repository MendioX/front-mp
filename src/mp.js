
import React from "react";
import './mp.css'
import { useEffect } from "react";

import { initializeCardForm } from "./initForm";

function MP () {
    useEffect(() => {
        initializeCardForm();
      }, []);

    return (
 
<div>
    
      <form id="form-checkout">
        <div id="form-checkout__cardNumber" className="container"></div>
        <div id="form-checkout__expirationDate" className="container"></div>
        <div id="form-checkout__securityCode" className="container"></div>
        <input type="text" id="form-checkout__cardholderName" placeholder="Titular de la tarjeta" />
        <select id="form-checkout__issuer"></select>
        <select id="form-checkout__installments"></select>
        <select id="form-checkout__identificationType"></select>
        <input type="text" id="form-checkout__identificationNumber" placeholder="Número del documento" />
        <input type="email" id="form-checkout__cardholderEmail" placeholder="E-mail" />
        <button type="submit" id="form-checkout__submit">Pagar</button>
        <progress value="0" className="progress-bar">Cargando...</progress>
      </form>
    </div>)

}


export default MP
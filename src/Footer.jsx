import React from 'react'
import logo from './assets/logo.svg'

function Footer() {
  return (
    <footer className='footer'>
      <div className='box'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
          <div className='footerBloc'>
            <img src={logo} alt="logo" className='w-[70%] mx-auto sm:mx-0' />
            <p className='text-xs'>
            SIS-Consulting votre partenaire en sécurité et surveillance offre une
            gamme complète de services en matière de sécurité électronique.
            </p>
          </div>
          <div className='footerBloc'>
            <p className='text-sm font-semibold text-slate-100'>Services</p>
            <ul role='list' className='flex flex-col gap-2 text-xs'>
              <li>Contrôle d'accès</li>
              <li>Vidéosurveillance</li>
              <li>Détection d'incendie</li>
              <li>Alarme anti-intrusion</li>
              <li>Interphone</li>
              <li>RFID</li>
            </ul>
          </div>
          <div className='footerBloc'>
            <p className='text-sm font-semibold text-slate-100'>Contacts</p>
            <ul role='list' className='flex flex-col gap-2 text-xs'>
              <li><span className='font-semibold'>Adresse:</span>76758 Avenue de la Sécurité NY</li>
              <li><span className='font-semibold'>Email:</span>contact@sis-consulting.sec</li>
              <li><span className='font-semibold'>Téléphone:</span>07 87 65 87 90 34</li>
            </ul>
          </div>
        </div>
      </div>
      <p className='mx-auto text-xs font-light text-slate-500 text-center bg-secondary w-full py-3'>©SIS-Consulting 2023 - Tous droits réservés | Réalisé par 
      <a href="https://github.com/Hansjason97" className='text-secondaryLight font-semibold ml-1'>hans</a></p>
    </footer>
  )
}

export default Footer
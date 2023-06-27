import React from 'react'
import { services } from '../data/data'
import Folder from '../components/Folder'

function Home() {
  return (
    <div>
      <section className='px-2 h-[80vh] justify-center lg:px-0 max-w-7xl mx-auto flex flex-col'>
        <div className='text-center max-w-4xl mx-auto flex flex-col gap-8'>
          <h1>
          caméras de sécurité & équipements
          </h1>
          <p className='px-0 md:px-4'>
          Bienvenue chez SIS-Consulting, votre partenaire en sécurité et surveillance.
           Nous offrons une gamme complète de services pour répondre à vos besoins en matière de contrôle d'accès, vidéosurveillance
            IP et analogique, détection incendie, alarme anti-intrusion, interphones et solutions RFID.
          </p>
          <button className='mx-auto'>
            nous contacter
          </button>
        </div>
      </section>
      <section className='box'>
        <p className='subHeader text-center'>
          services
        </p>
        <h2 className='text-center max-w-4xl mx-auto'>
          Nous offrons une variété de services pour votre sécurité
        </h2>
        <div className='flex flex-wrap justify-center py-12 gap-4'>
        { services.map((service, index)=>(
          <Folder key={index} title={service.title} description={service.description} />
        )) }
        </div>
      </section>
    </div>
  )
}

export default Home
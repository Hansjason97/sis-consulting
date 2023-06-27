import React from 'react'
import { services, partners } from '../data/data'
import Folder from '../components/Folder'
import image01 from '../assets/images/image01.webp'
import Carousel from '../components/Carousel'

function Home() {
  return (
    <div>
      <section className='px-2 py-28 lg:py-40 justify-center xl:px-0 mx-auto flex flex-col'>
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
      <section className='box' id="services">
        <p className='subHeader mx-auto'>
          services
        </p>
        <h2 className='text-center max-w-4xl mx-auto'>
          Nous offrons une variété de services pour votre sécurité
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto py-12 gap-4'>
        { services.map((service, index)=>(
          <Folder key={index} title={service.title} description={service.description} image={service.image} />
        )) }
        </div>
      </section>
      {/**About section ############################################# */}
      <section id='about' className='boxGrid'>
          <div className='gridLeft'>
            <p className='subHeader justify-center md:justify-start'>
            à propos
            </p>
            <h2 className='mx-auto'>
            Sécurité électronique & intégration de solutions
            </h2>
            <p className='my-5'>
              <span className='highlight'>SIS-Consulting</span>, est une entreprise Privée de droit camerounais, qui a vu le jour en 2020.
              En tant qu’entreprise de nouvelle génération avec des idées modernes et une philosophie d’être,
              le meilleur plutôt que le plus grand intégrateur de l’industrie de la sécurité.
              Nous utilisons de nouvelles solutions basées sur des idées innovantes mettant en avant les meilleurs technologie à offrir.
                Nous Avons l’Ambition de devenir les leaders de l’industrie de la sécurité électronique et l’intégration des solutions en Afrique.
            </p>
          </div>
          <div className='h-80 w-[80%] bg-cover bg-secondaryLight bg-blend-multiply rounded-md mx-auto
          transition-all duration-150 ease-linear cursor-pointer hover:bg-transparent'
          style={{backgroundImage: `url(${image01})`}}></div>
      </section>
      {/**Partners ################################################ */}
      <section className='boxGrid'>
          <div className='px-2'>
            <Carousel carousel={partners} />
          </div>
          <div className='gridLeft my-auto'>
             <p className='subHeader justify-center md:justify-start'>
            partenaires
            </p>
            <h2 className='mx-auto'>
            Ils nous font confiance
            </h2>
            <p className='my-5'>
            Nous sommes fiers d'être un fournisseur de confiance dans notre industrie. 
            Notre engagement à offrir un service exceptionnel et à dépasser les attentes nous a valu la fidélité et la satisfaction de nos clients.
            </p>
          </div>
      </section>
    </div>
  )
}

export default Home
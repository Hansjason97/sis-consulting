import React from 'react'
import { services, partners } from '../data/data'
import Folder from '../components/Folder'
import image01 from '../assets/images/team-types.webp'
import Carousel from '../components/Carousel'
import {HiUserGroup} from 'react-icons/hi'
import {MdWork} from 'react-icons/md'
import {FaUserTie} from 'react-icons/fa'

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
            Demander un devis
          </button>
        </div>
      </section>
      {/**Details info ##########################################"" */}
      <section className='relative translate-y-0 md:translate-y-[-20%] transition-all duration-100 ease-in'>
        <div className='infoIcons'>
          <div className='elementInfo'>
            <HiUserGroup className='w-8 h-8 text-slate-100 mx-auto' />
            <p className='text-primary font-bold text-xl'>65</p>
            <p>Clients heureux</p>
          </div>
          <div className='elementInfo'>
            <MdWork className='w-8 h-8 text-slate-100 mx-auto' />
            <p className='text-primary font-bold text-xl'>127</p>
            <p>Projets terminés</p>
          </div>
          <div className='elementInfo'>
            <FaUserTie className='w-8 h-8 text-slate-100 mx-auto' />
            <p className='text-primary font-bold text-xl'>12</p>
            <p>Experts de la sécurité</p>
          </div>
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
              <span className='highlight'>SIS-Consulting</span>, est une société spécialisée en sécurité domestique et industrielle qui a vu le jour en 2022.
              En tant qu’entreprise de nouvelle génération avec des idées modernes et une philosophie d’être,
              le meilleur plutôt que le plus grand intégrateur de l’industrie de la sécurité.
              Nous utilisons de nouvelles solutions basées sur des idées innovantes mettant en avant les meilleurs technologies à offrir.
                Nous avons pour but de devenir un acteur majeur de l’industrie de la sécurité électronique et l’intégration des solutions.
            </p>
          </div>
          <div className='h-80 w-[80%] bg-cover bg-secondaryLight bg-blend-multiply rounded-md mx-auto
          transition-all duration-150 ease-linear cursor-pointer hover:bg-transparent'
          style={{backgroundImage: `url(${image01})`}}></div>
      </section>
      {/**Partners ################################################ */}
      <section className='boxGrid' id='partners'>
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
      {/**Contact ##########################################"" */}
      <section id='contact' className='box'>
        <p className='subHeader mx-auto'>
          contact
        </p>
        <h2 className='text-center max-w-4xl mx-auto'>
          Besoin de nos services ?
        </h2>
        <p className='my-6 text-center mx-auto max-w-3xl'>
        Nous sommes déterminés à offrir des solutions de sécurité et de surveillance de qualité supérieure à nos clients. 
        Contactez-nous dès aujourd'hui pour en savoir plus sur nos services et comment nous pouvons vous aider à protéger votre entreprise.
        </p>
        <button className='my-8 mx-auto'>
          Ecrivez-nous !
        </button>
      </section>
    </div>
  )
}

export default Home
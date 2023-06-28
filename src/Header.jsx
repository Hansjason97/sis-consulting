import React from 'react'
import logo from './assets/logo.svg'

function Header() {
  return (
    <div>
      <div className='w-[100vw] h-[80px] fixed top-0 left-0 z-20 px-2 xl:px-12 flex justify-between bg-black/30 items-center'>
        <a href="#"><img src={logo} alt="logo" className='h-10'/></a>
        <nav className='menuDesktop'>
          <a href="#services">services</a>
          <a href="#about">à propos</a>
          <a href="#partners">partenaires</a>
          <a href="#contact" className='block xl:hidden'>contact</a>
        </nav>
        <a href="#contact" className='hidden xl:block px-3 py-2 border border-secondaryLight rounded-sm capitalize text-slate-100 text-sm
        transition-all duration-100 ease-linear hover:bg-secondary '>nous contacter</a>
      </div>
    </div>
  )
}

export default Header
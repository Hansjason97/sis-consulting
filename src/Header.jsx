import React, {useState} from 'react'
import logo from './assets/logo.svg'

function Header() {

  const [visible, setVisible] = useState(false);

  let menuClass = 'h-fit w-full bg-secondaryDark fixed top-[80px] right-0 z-10 flex flex-col gap-12 py-8 font-mono text-center md:hidden transition-all duration-300 ease-in-out counterLink';
  if (!visible) menuClass='h-fit w-full bg-secondaryDark fixed top-[-100%] right-0 flex flex-col gap-12 py-8 font-mono text-center md:hidden z-10 transition-all duration-300 ease-in-out';

  return (
    <div>
      <div className='w-[100vw] h-[80px] fixed top-0 left-0 z-20 px-2 xl:px-12 flex justify-between bg-secondaryBlack items-center'>
        <a href="#"><img src={logo} alt="logo" className='h-10'/></a>
        <nav className='menuDesktop'>
          <a href="#services">services</a>
          <a href="#about">à propos</a>
          <a href="#partners">partenaires</a>
          <a href="#contact" className='block xl:hidden'>contact</a>
        </nav>
        <a href="#contact" className='hidden xl:block px-3 py-2 border border-secondaryLight rounded-sm capitalize text-slate-100 text-sm
        transition-all duration-100 ease-linear hover:bg-secondary '>nous contacter</a>
        <div className={ visible ? `menuIcon menuIconActive` : `menuIcon`} onClick={()=>setVisible(!visible)}>
            <div></div>
          </div>
      </div>
      {/**Mobile Menu */}
      <nav className={menuClass}>
            <a href='#services' className='menu-mobile-link' onClick={()=>setVisible(!visible)}>services</a>
            <a href='#about' className='menu-mobile-link' onClick={()=>setVisible(!visible)}>à propos</a>
            <a href='#partners' className='menu-mobile-link' onClick={()=>setVisible(!visible)}>partenaires</a>
            <a href='#contact' className='menu-mobile-link' onClick={()=>setVisible(!visible)}>contact</a>
        </nav>
    </div>
  )
}

export default Header
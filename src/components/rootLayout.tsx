import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const RootLayout = (props: Props) => {
    return (
        <div className='container mx-auto'>
          <header className='header-page'>
      <div className="logo-page">
        <img src="https://i.imgur.com/CnMww1N.png" alt="logo" />
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          <button className='btn-signup'><a href="/signup">Đăng Ký</a></button>
          <button className='btn-signin'><a href="/signin">Đăng nhập</a></button>
        </ul>
      </nav>
    </header>                
            < Outlet  />
            <footer className='footer'>
            <div className="logo-page">
        <img src="https://i.imgur.com/CnMww1N.png" alt="logo" />
      </div>
      <div className="social-links">
      <nav>
        <ul>
        <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      </div>
            </footer>
        </div>
    )
}

export default RootLayout
import React from 'react'
import { Header } from './Header'

export const Login = () => {
  return (
    <div>
      <Header/>
      <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      alt="background of movie posters" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0">
        <input type="text" placeholder="Email Address" className="p-2 m-2"/>
        <input type="password" placeholder="Password" className="p-2 m-2" />
        <button className="p-4 m-4">Sign In</button>
      </form>
    </div>
  )
}


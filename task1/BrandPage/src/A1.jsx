import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App= ()=>{


    return <div>
        <nav>
            <div className="logo">
                <img src="/public/Nike_logo.png" alt="logo" style={{height:100}}></img>
            </div>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button>Login</button>
        </nav>
    </div>
};

export default App;
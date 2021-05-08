import React,{useState} from 'react'
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'
import {BrowserRouter as Router} from 'react-router-dom';

const Home = () => {
    const[isOpen,setIsOpen]=useState(false)
    const toggle=() =>{
        setIsOpen(!isOpen)
    }
    return (
       <Router>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
       </Router>
    )
}

export default Home

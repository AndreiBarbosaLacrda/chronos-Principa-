

import "./styles/global.css"
import "./styles/theme.css"
import { Heading } from './components/Heading'
import {TimerIcon } from 'lucide-react'

export function App(){
    console.log("Ola mundo!")
    return(
        <>
            <div className="container" >
                <div className="content">
              <Heading >  
                Chronos
                <button> 
                    <TimerIcon/>    
                </button>
            </Heading>
    
            
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Neque nam cum soluta voluptatum fugit magni blanditiis.
                Voluptatem, at quam?
                Quae aliquid voluptatum ullam et natus sed ipsa ipsam accusantium cum.
            </p>

                </div>
            </div >
        </>
    )
}
    


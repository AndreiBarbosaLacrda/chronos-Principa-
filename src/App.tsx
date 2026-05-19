import { Fragment } from 'react/jsx-runtime'

import "./styles/global.css"
import "./styles/theme.css"
import { Heading } from './components/Heading'

export function App(){
    console.log("Ola mundo!")
    return(
        <Fragment>
            <Heading>
                Hello world!
            </Heading>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Neque nam cum soluta voluptatum fugit magni blanditiis.
                Voluptatem, at quam?
                Quae aliquid voluptatum ullam et natus sed ipsa ipsam accusantium cum.
            </p>
        </Fragment>
    )
}
    


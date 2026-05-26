

import { Container } from "./components/Container"
import { Heading } from "./components/Heading"
import "./styles/global.css"
import "./styles/theme.css"

export function App(){
    console.log("Ola mundo!")
    return(
        <>
                <Container>
                <section>
                        <p>Logo</p>
                    </section>
                        
                </Container>
           

                <Container>
                <div className="content">
                    <section>
                        <p>Menu</p>
                    </section>
                </div>
                </Container>

                <Container>
                <div className="content">
                    <section>
                        <p>Form</p>
                    </section>
                </div>
                </Container>

                <Container>
                <div className="content">
                    <section>
                        <p>Footer</p>
                    </section>
                </div>
                </Container>
        </>
    )
}
    


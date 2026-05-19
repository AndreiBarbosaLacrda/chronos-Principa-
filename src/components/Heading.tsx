import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"
import style from "./heading..module.css"

export function Heading(props: { children: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined }){
    console.log(props)
 return
  <h1 className={ `${style.heading} ${style.paragraph}` }>
  {props.children}  
  
  </h1>
}



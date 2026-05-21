import style from './Heading..module.css'

 type HeadingProps = { 
  children: string;
 };

export function Heading(props: HeadingProps){
  const  children  = props.children

 return <h1 className={ `${style.heading} ${style.paragraph}` }>
  {children}  
  
  </h1>
}



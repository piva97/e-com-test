'use client'
import { ReactNode } from "react";


interface ContainerProps {
    children: ReactNode
}
const Container: React.FC<ContainerProps> = ({children}) => {
    return ( <div className="
    max-w-[1920px]
    mx-auto
    xl: px-20
    md: px-20
    px
    
    "> {children}</div> );
}
 
export default Container;
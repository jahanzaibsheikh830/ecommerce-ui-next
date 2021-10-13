interface ContainerProps{
    children?: any
}
export default function Container({children}: ContainerProps){
    return <div style={{width:"1200px",margin: "0 auto", maxWidth: "100%"}}>{children}</div>
}
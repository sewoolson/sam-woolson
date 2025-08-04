export function Button() {
    return(
        <>
            <button onClick={()=> setShow(!show)} style={{backgroundColor: color}}>
                <p>{show == true ? "Hide Item" : "Show Item" }</p>
            </button> 
        </>
    )
}
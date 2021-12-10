import './Select.css'


export const Select =({datos, evento})=>{
    return(
        <select className="selector" onChange={evento}>
            <option value="All characters">All Chacarters</option>
            {
                datos.map(element=>(
                    <>
                        <option value={element.id}>{element.name}</option>
                    </>
                ))
            }
        </select>
    );
}
import './Card.css'

export const Card = ({data}) => {
    return(
        <div className="card_container">
            <p className="card_name">name: {data.name}</p>
            <div className="card_img_container">
                <img className="card_img" alt={data.name} src={data.image}></img>
            </div>
            <p className="card_gender">gender: {data.gender}</p>
        </div>
    )   
}
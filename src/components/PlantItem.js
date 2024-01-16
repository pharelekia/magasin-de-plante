import "../styles/PlantItem.css"
import CareScale from "./CareScale";

function PlantItem ({name, cover, id, water, light, price}){
    
    return (
        <div key={id} className="lmj-plant-item" >
            <div className="lmj">
                <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`}/>
            </div>
            
            <span className='lmj-plant-item-price'>{price}€</span>

            <div className="lmj-plant-name">
                {name}
                <CareScale careType = "water" scaleValue={water}/>
                <CareScale careType = "light" scaleValue={light}/>
            </div>
        </div>
    )
}

export default PlantItem;
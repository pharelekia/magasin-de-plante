import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";


function CareScale ({scaleValue, careType,}) {

    const quantityLabel = {
        1: "peu",
        2: "moderement",
        3: "beaucoup"
    }
    

    const range = [1,2,3];

    const scaleType = careType === "light" ? (
        <img src={Sun} alt="soleil"/>
    ): (
        <img src={Water} alt="pluie"/>
    );

    function handleClick(){
        alert(`Cette plante requiert ${quantityLabel[scaleValue]} ${careType==="light"? "de la lumiere" : "d'arrosage"}`)
    }

    return (
    <div onClick={handleClick}>
        {range.map(rangeElem=> 
            scaleValue >= rangeElem? <span key={rangeElem.toString()}>{scaleType}</span> : null
        )}
    </div>
    )
}

export default CareScale;
import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

    function handleInput(e){
        setInputValue(e.target.value);
    }

    function handleBlur(){
        if(!inputValue.includes("@")){
            alert("Attention, il n'y a pas d'@, ceci n'est pas adresse valide")
        }
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes
			</div>
            <div>
                <input 
                onBlur={handleBlur}
                placeholder='Entrez votre E-mail'
                value = {inputValue}
                onChange={handleInput} type="text"/>
                <button className='lmj-footer-btn'>Envoyer</button>
            </div>
		</footer>
	)
}

export default Footer
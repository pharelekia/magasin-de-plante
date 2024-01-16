import { useEffect, useState } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart}) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
	
	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	},[total])


	function removeToCart(name) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			);

			updateCart(cartFilteredCurrentPlant);
	}



	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<li key={`${name}-${index}`}>
								{name} {price}€ x {amount}
								<button style={{marginLeft: "10px", border: "none", cursor: "pointer"}} onClick={() => removeToCart(name)}>Supprimer</button>
							</li>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button className='lmj-cart-vider' onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart
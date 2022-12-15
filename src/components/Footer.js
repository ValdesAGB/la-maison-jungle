import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

    function checkMail(value){
        if(value.includes('@')){
            setInputValue(value)
            console.log(inputValue)
        }else{
            alert(`Votre mail ' ${value} ' ne contient pas de '@'. Elle est donc invalide`)
        }
    }

    function handleChange(e){
        setInputValue(e.target.value)
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>
                Laissez-nous votre mail : 
                <input 
                    type='text' 
                    onBlur={(e) => checkMail(e.target.value)}
                    value={inputValue}
                    onChange={handleChange}
                />  
            </div>
		</footer>
	)
}

export default Footer
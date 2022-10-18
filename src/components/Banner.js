import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner(props) {	
	return (
		<div className='lmj-banner'>
			{props.children}
			</div>
	)
}

export default Banner
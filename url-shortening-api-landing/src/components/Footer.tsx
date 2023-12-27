import Logo from '../assets/images/logo.svg'
import Facebook from '../assets/images/icon-facebook.svg'
import Twitter from '../assets/images/icon-twitter.svg'
import Pinterest from '../assets/images/icon-pinterest.svg'
import Instagram from '../assets/images/icon-instagram.svg'


const Footer = () => {
  return (
    <div className='flex justify-between items-start py-10 bg-very-dark-violet'>
      <img src={Logo} alt="company logo" />
      <div className='flex gap-10'>
        <div className='flex flex-col gap-3 capitalize'>
          <h1 className='text-white font-bold'>features</h1>
          <ul className='text-gray font-medium'>
            <li>link shortening</li>
            <li>branded links</li>
            <li>analytics</li>
          </ul>
        </div>
        <div className='flex flex-col gap-3 capitalize'>
          <h1 className='text-white font-bold'>resources</h1>
          <ul className='text-gray font-medium'>
            <li>blog </li>
            <li>developers</li>
            <li>support</li>
          </ul>
        </div>
        <div className='flex flex-col gap-3 capitalize'>
          <h1 className='text-white font-bold'>company</h1>
          <ul className='text-gray font-medium'>
            <li>about</li>
            <li>our team</li>
            <li>careers</li>
            <li>contact</li>
          </ul>
        </div>
        <div className='flex gap-3 capitalize'>
          <ul className='flex gap-3'>
            <li><img src={Facebook} alt="facebook" /></li>
            <li><img src={Twitter} alt="twitter" /></li>
            <li><img src={Pinterest} alt="pinterest" /></li>
            <li><img src={Instagram} alt="instagram" /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
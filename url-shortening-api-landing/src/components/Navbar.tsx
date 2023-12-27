import Logo from '../assets/images/logo.svg'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center text-lg'>
      <div className='flex gap-10'>
        <img src={Logo} alt="company logo"/>
        <ul className='flex text-grayish-violet capitalize font-bold gap-4'>
          <li>features</li>
          <li>pricing</li>
          <li>resources</li>
        </ul>
      </div>
      <div className="flex gap-4 font-bold">
        <button className="capitalize text-grayish-violet">login</button>
        <button className="capitalize text-white py-2 px-5 bg-cyan rounded-full ">sign up</button>
      </div>
    </div>
  )
}

export default Navbar
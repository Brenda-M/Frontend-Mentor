
import formBackground from '../assets/images/bg-shorten-desktop.svg'

const Form = () => {
  return (
    <div style={{backgroundImage:`url(${formBackground})`}}>
      <input type="text" placeholder='Shorten a link here...' className='p-3 '/>
      <button className='py-2 px-6 rounded bg-cyan text-white'>Shorten It!</button>
    </div>
  )
}

export default Form
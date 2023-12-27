import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Form from './components/Form'
import illustrationWorking from './assets/images/illustration-working.svg'
import bgBoost from './assets/images/bg-boost-desktop.svg'
import Brand from './assets/images/icon-brand-recognition.svg'
import Records from './assets/images/icon-detailed-records.svg'
import Customize from './assets/images/icon-fully-customizable.svg'



function App() {


  return (
    <div className='flex flex-col '>
      {/* container mx-auto p-10 */}
      <Navbar />
      <div className='flex items-center gap-10 py-10'>
        <div>
          <h1 className='text-dark-blue font-bold capitalize text-4xl'>more than just shorter links</h1>
          <p className='text-grayish-violet font-medium'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <button className='bg-cyan px-10 py-3 capitalize rounded-full text-white font-bold'>get started</button>
        </div>
        <img src={illustrationWorking} alt="" />
      </div>
      <Form/>
      <div>
        <div className='flex flex-col items-center'>
          <h1>advanced statistics</h1>
          <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
          <div className='flex'>
            <div>
              <img src={Brand} alt="brand-image" />
              <h1>brand recognition</h1>
              <p>Boost your brand recognition with coack click. Generic links don't mean a thing. Branded links help instill confidence in your content</p>
            </div>
            <div>
              <img src={Records} alt="records-image" />
              <h1>detailed records</h1>
              <p> Gain insights into who is clicking your links. Knowing when and where
                people engage with your content helps inform better decisions.
              </p>
            </div>
            <div>
              <img src={Customize} alt="brand-image" />
              <h1>Fully Customizable
              </h1>
              <p> Improve brand awareness and content discoverability through customizable
                links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-start gap-2' style={{ backgroundImage: `url(${bgBoost})`, backgroundSize: 'cover' }}>
        <h2 className='text-white text-2xl font-bold '>Boost your links today</h2>
        <button className='bg-cyan px-10 py-3 capitalize rounded-full text-white font-bold'>get started</button>
      </div>

      <Footer />
    </div>
  )
}

export default App

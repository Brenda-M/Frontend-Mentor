import thankYouIcon from '../assets/images/icon-thank-you.svg'

const ThankYou = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center gap-4' >
      <img src={thankYouIcon} alt="thank you" />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun
        using our platform. If you ever need support, please feel free
        to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default ThankYou
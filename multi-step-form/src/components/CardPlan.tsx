import React from 'react';

type CardProps = {
  icon: string;
  title: string;
  price: string;
  offer?: string;
};

const CardPlan: React.FC<CardProps> = ({ icon, title, price, offer }) => {
  return (
    <div className='flex flex-col justify-between bg-white p-6 rounded-lg shadow-md'>
      <div>
        <img className='object-contain mb-4' src={icon} alt="card icon" />
      </div>
      <div>
        <h2 className='text-marine-blue text-lg font-semibold mb-2'>{title}</h2>
        <p className='text-gray-600'>{price}</p>
        {offer && <p className='text-green-500'>{offer}</p>}
      </div>

    </div>
  );
};

export default CardPlan;

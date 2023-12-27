import React from 'react';

type AddonsCardProps = {
  title: string;
  info: string;
  price: string;
};

const AddonsCard: React.FC<AddonsCardProps> = ({ title, info, price }) => {
  return (
    <div className="border p-4 mb-4 flex items-center justify-between">
      <div className="flex items-center">
        <input type="checkbox" className="mr-4" />
        <div>
          <h2 className="text-lg font-semibold mb-1">{title}</h2>
          <p className="text-gray-600">{info}</p>
        </div>
      </div>
      <h3 className="text-lg font-semibold">${price}</h3>
    </div>
  );
};

export default AddonsCard;

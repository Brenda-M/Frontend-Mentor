import { useFormContext } from '../hooks/useFormContext';

const Summary = () => {
  const { formData } = useFormContext();

  const calculateTotal = () => {
    
    return 0;
  };

  const total = calculateTotal();

  return (
    <div>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>

      {/* Display selected options */}
      <div>
        <h2>Your Selections:</h2>
        {/* Display the selected options from formData */}
        {/* Example: <p>Selected Plan: {formData.plan.name}</p> */}
      </div>

      <div>
        <h2>  Total (per month/year): ${total}</h2>
      </div>


    </div>
  );
};

export default Summary;

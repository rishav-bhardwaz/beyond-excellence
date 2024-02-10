import React, { useState } from 'react';

const DynamicInputForm = () => {
  const [inputFields, setInputFields] = useState([{ value: '' }]);

  const handleChange = (index, event) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
  };

  const handleAddField = () => {
    setInputFields([...inputFields, { value: '' }]);
  };

  const handleRemoveField = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Input Field Values:', inputFields.map((field) => field.value));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {inputFields.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Enter a value"
              value={field.value}
              onChange={(e) => handleChange(index, e)}
            />
            <button type="button" onClick={() => handleRemoveField(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddField}>
          Add Field
        </button>
      </form>
    </div>
  );
};

export default DynamicInputForm;

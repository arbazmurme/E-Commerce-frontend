const Input = ({ label, type, value, onChange, placeholder }) => {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  };
  
  export default Input;
  
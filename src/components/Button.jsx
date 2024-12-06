const Button = ({ label, onClick, type = "button" }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        {label}
      </button>
    );
  };
  
  export default Button;
  
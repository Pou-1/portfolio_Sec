const Button = ({ text }: { text: string }) => {
  return (
    <button className="relative group px-6 py-3 font-semibold overflow-hidden text-red-600">
      <div className="absolute inset-0 transform rounded-md opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 bg-red-200 trans-fast"></div>
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default Button;

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 rounded-lg font-semibold text-white
      transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
}

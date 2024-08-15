export const TextLink = ({ text = "Text Link", onClick, className }) => {
  return (
    <div className={`text-link ${className}`} onClick={onClick}>
      {text}
    </div>
  );
};

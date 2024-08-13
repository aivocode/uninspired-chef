export const TextLink = ({ text = "Text Link", className }) => {
    return (
      <div className={`inline-flex items-start relative ${className}`}>
        <div className="relative w-fit mt-[-1.00px] font-body-link font-[number:var(--body-link-font-weight)] text-color-text-default-default text-[length:var(--body-link-font-size)] tracking-[var(--body-link-letter-spacing)] leading-[var(--body-link-line-height)] underline whitespace-nowrap [font-style:var(--body-link-font-style)]">
          {text}
        </div>
      </div>
    );
  };
  
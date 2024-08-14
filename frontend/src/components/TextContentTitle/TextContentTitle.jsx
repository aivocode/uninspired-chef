export const TextContentTitle = ({ title = "Title", hasSubtitle = true, subtitle = "Subtitle", align, className }) => {
    return (
      <div
        className={`inline-flex flex-col gap-[var(--size-space-200)] relative ${
          align === "center" ? "items-center" : "items-start"
        } ${className}`}
      >
        <div
          className={`font-title-hero self-stretch mt-[-1.00px] tracking-[var(--title-hero-letter-spacing)] text-[length:var(--title-hero-font-size)] [font-style:var(--title-hero-font-style)] text-color-text-default-default font-[number:var(--title-hero-font-weight)] leading-[var(--title-hero-line-height)] relative ${
            align === "center" ? "text-center" : ""
          }`}
        >
          {title}
        </div>
        {hasSubtitle && (
          <div
            className={`font-subtitle self-stretch tracking-[var(--subtitle-letter-spacing)] [font-style:var(--subtitle-font-style)] text-[length:var(--subtitle-font-size)] text-color-text-default-secondary font-[number:var(--subtitle-font-weight)] leading-[var(--subtitle-line-height)] relative ${
              align === "center" ? "text-center" : ""
            }`}
          >
            {subtitle}
          </div>
        )}
      </div>
    );
  };

export default TextContentTitle;
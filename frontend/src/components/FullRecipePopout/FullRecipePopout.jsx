// FullRecipePopout.jsx
// index.js

export const FullRecipePopout = () => {
  return (
    <div className="relative w-[647px] h-[852px] rounded-2xl overflow-hidden bg-[url(/full-recipe-popout.png)] bg-cover bg-[50%_50%]">
      <div className="absolute w-[419px] h-[293px] top-[27px] left-[23px] rounded-2xl bg-[url(/recipe-image.svg)] bg-cover bg-[50%_50%]" />
      <div className="flex flex-col w-[344px] items-start gap-[var(--size-space-200)] absolute top-[359px] left-[33px]">
        <div className="relative self-stretch mt-[-1.00px] font-heading font-[number:var(--heading-font-weight)] text-color-text-default-default text-[length:var(--heading-font-size)] tracking-[var(--heading-letter-spacing)] leading-[var(--heading-line-height)] [font-style:var(--heading-font-style)]">
          Recipe
        </div>
        <p className="relative self-stretch font-body-base font-[number:var(--body-base-font-weight)] text-color-text-default-secondary text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]">
          Short description of the recipe
        </p>
        <p className="relative self-stretch font-body-base font-[number:var(--body-base-font-weight)] text-color-text-default-secondary text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]">
          Ingredient 1<br />
          Ingredient 2<br />
          Ingredient 3<br />
          Ingredient 4
        </p>
        <p className="relative self-stretch font-body-base font-[number:var(--body-base-font-weight)] text-color-text-default-secondary text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]">
          <br />
          <br />
          <br />
          <br />
          <br />
          Instrcutionns on how to prepare the dish
        </p>
      </div>
      <div className="flex flex-col w-[127px] items-start gap-[var(--size-space-200)] absolute top-[174px] left-[473px]">
        <div className="relative self-stretch mt-[-1.00px] font-heading font-[number:var(--heading-font-weight)] text-color-text-default-default text-[length:var(--heading-font-size)] tracking-[var(--heading-letter-spacing)] leading-[var(--heading-line-height)] [font-style:var(--heading-font-style)]">
          Serves:
        </div>
        <div className="relative self-stretch font-body-base font-[number:var(--body-base-font-weight)] text-color-text-default-secondary text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]">
          4 people
        </div>
      </div>
      <div className="flex w-[123px] items-center gap-[var(--size-space-400)] absolute top-[781px] left-[498px]">
        <button className="all-[unset] box-border inline-flex items-center justify-center gap-[var(--size-space-200)] pt-[var(--size-space-300)] pr-[var(--size-space-300)] pb-[var(--size-space-300)] pl-[var(--size-space-300)] relative flex-[0_0_auto] bg-color-background-neutral-tertiary rounded-[var(--size-radius-200)] overflow-hidden border border-solid border-color-border-neutral-secondary">
          <div className="relative w-fit mt-[-1.00px] font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-color-text-default-default text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] whitespace-nowrap [font-style:var(--single-line-body-base-font-style)]">
            I’m cooking it
          </div>
        </button>
      </div>
      <img
        className="absolute w-[67px] h-[145px] top-0 left-[469px]"
        alt="Save recipe button"
        src="save-recipe-button.svg"
      />
    </div>
  );
};
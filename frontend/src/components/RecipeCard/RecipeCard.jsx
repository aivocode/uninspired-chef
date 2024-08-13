export const RecipeCard = ({ property1, className, recipeImageClassName }) => {
  return (
    <div
      className={`border-color-border-default-default flex items-start shadow-[0px_4px_4px_#00000059] pt-[var(--size-space-600)] pr-[var(--size-space-600)] pb-[var(--size-space-600)] pl-[var(--size-space-600)] bg-[50%_50%] relative w-[749px] rounded-2xl bg-cover gap-[var(--size-space-600)] border border-solid flex-wrap h-[413px] ${
        property1 === "saved-recipe"
          ? "bg-[url(https://c.animaapp.com/XNVGwrYa/img/property-1-saved-recipe.png)]"
          : "bg-[url(https://c.animaapp.com/XNVGwrYa/img/property-1-default.png)]"
      } ${className}`}
    >
      {property1 === "default" && (
        <div
          className={`relative w-[350px] h-[209px] rounded-2xl bg-[url(https://c.animaapp.com/XNVGwrYa/img/recipe-image-3.svg)] bg-cover bg-[50%_50%] ${recipeImageClassName}`}
        />
      )}

      {property1 === "saved-recipe" && (
        <div className="relative w-[350px] h-[209px] rounded-2xl bg-[url(https://c.animaapp.com/XNVGwrYa/img/recipe-image-4.svg)] bg-cover bg-[50%_50%]" />
      )}

      <div className="flex min-w-40 flex-col items-center grow gap-[var(--size-space-400)] flex-1 h-[321px] justify-center relative">
        <div className="w-full flex self-stretch flex-col items-start gap-[var(--size-space-200)] flex-[0_0_auto] relative">
          <div className="font-heading self-stretch mt-[-1.00px] tracking-[var(--heading-letter-spacing)] text-[length:var(--heading-font-size)] [font-style:var(--heading-font-style)] text-color-text-default-default font-[number:var(--heading-font-weight)] leading-[var(--heading-line-height)] relative">
            Recipe
          </div>
          <p className="font-body-base self-stretch tracking-[var(--body-base-letter-spacing)] [font-style:var(--body-base-font-style)] text-[length:var(--body-base-font-size)] text-color-text-default-secondary font-[number:var(--body-base-font-weight)] leading-[var(--body-base-line-height)] relative">
            Short description of the recipe
          </p>
        </div>
        <div className="w-full flex self-stretch items-center gap-[var(--size-space-400)] flex-[0_0_auto] relative">
          <button className="all-[unset] box-border border border-solid border-color-border-neutral-secondary inline-flex items-center gap-[var(--size-space-200)] flex-[0_0_auto] pt-[var(--size-space-300)] pr-[var(--size-space-300)] pb-[var(--size-space-300)] pl-[var(--size-space-300)] overflow-hidden rounded-[var(--size-radius-200)] justify-center bg-color-background-neutral-tertiary relative">
            <div className="all-[unset] box-border font-single-line-body-base w-fit mt-[-1.00px] tracking-[var(--single-line-body-base-letter-spacing)] text-[length:var(--single-line-body-base-font-size)] [font-style:var(--single-line-body-base-font-style)] text-color-text-default-default font-[number:var(--single-line-body-base-font-weight)] leading-[var(--single-line-body-base-line-height)] whitespace-nowrap relative">
              See more
            </div>
          </button>
        </div>
      </div>
      {property1 === "saved-recipe" && (
        <img
          className="relative w-[67px] h-[84px] mr-[-4.00px]"
          alt="Save recipe button"
          src="https://c.animaapp.com/XNVGwrYa/img/save-recipe-button.svg"
        />
      )}
    </div>
  );
};

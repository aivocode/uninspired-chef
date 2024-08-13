import { RecipeCard } from "../RecipeCard/RecipeCard";

export const RecipeFeed = ({
  className,
  recipeCardRecipeImageClassName,
  recipeCardRecipeImageClassNameOverride,
  recipeCardDivClassName,
}) => {
  return (
    <div
      className={`flex flex-col w-[var(--responsive-device-width)] items-start gap-[var(--size-space-1200)] pt-[var(--size-space-1600)] pr-[var(--size-space-1600)] pb-[var(--size-space-1600)] pl-[var(--size-space-1600)] relative bg-[#feead1] ${className}`}
    >
      <div className="flex flex-col items-center justify-center gap-[var(--size-space-600)] relative self-stretch w-full flex-[0_0_auto]">
        <RecipeCard
          className="bg-[url(https://c.animaapp.com/XNVGwrYa/img/recipe-card-5.png)]"
          property1="default"
          recipeImageClassName={recipeCardRecipeImageClassName}
        />
        <RecipeCard
          className="bg-[url(https://c.animaapp.com/XNVGwrYa/img/recipe-card-5.png)]"
          property1="default"
          recipeImageClassName={recipeCardRecipeImageClassNameOverride}
        />
        <RecipeCard
          className="bg-[url(https://c.animaapp.com/XNVGwrYa/img/recipe-card-5.png)]"
          property1="default"
          recipeImageClassName={recipeCardDivClassName}
        />
      </div>
    </div>
  );
};

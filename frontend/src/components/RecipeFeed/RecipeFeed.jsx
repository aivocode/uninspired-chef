import { RecipeCard } from "../RecipeCard/RecipeCard";
import './RecipeFeed.css'

export const RecipeFeed = () => {
  return (
    <div className="flex flex-col w-[var(--responsive-device-width)] items-start gap-[var(--size-space-1200)] pt-[var(--size-space-1600)] pr-[var(--size-space-1600)] pb-[var(--size-space-1600)] pl-[var(--size-space-1600)] relative bg-[#feead1]">
      <div className="flex flex-col items-center justify-center gap-[var(--size-space-600)] relative self-stretch w-full flex-[0_0_auto]">
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
      </div>
    </div>
  );
};

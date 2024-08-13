// AddIngredientPopout.jsx
export const AddIngredient = () => {
  return (
    <div className="w-[428px] h-[347px]">
      <div className="relative w-[395px] h-[347px] left-[18px] bg-[#feead1] rounded-2xl">
        <div className="top-[162px] flex flex-col w-[272px] items-start gap-[var(--size-space-200)] absolute left-[60px]">
          <div className="relative self-stretch mt-[-1.00px] font-body-base font-[number:var(--body-base-font-weight)] text-[#515839] text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]">
            Ingredient Quantity
          </div>
          <div className="flex min-w-60 items-center pt-[var(--size-space-300)] pr-[var(--size-space-400)] pb-[var(--size-space-300)] pl-[var(--size-space-400)] relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-white rounded-[var(--size-radius-200)] overflow-hidden border border-solid border-color-border-default-default">
            <div className="relative flex-1 mt-[-0.50px] font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-color-text-default-tertiary text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] [font-style:var(--single-line-body-base-font-style)]">
              4
            </div>
          </div>
        </div>
        <div className="top-16 flex flex-col w-[272px] items-start gap-[var(--size-space-200)] absolute left-[60px]">
          <div className="relative self-stretch mt-[-1.00px] font-body-base font-[number:var(--body-base-font-weight)] text-[#515839] text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]">
            Ingredient Name
          </div>
          <div className="flex min-w-60 items-center pt-[var(--size-space-300)] pr-[var(--size-space-400)] pb-[var(--size-space-300)] pl-[var(--size-space-400)] relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-white rounded-[var(--size-radius-200)] overflow-hidden border border-solid border-color-border-default-default">
            <div className="relative flex-1 mt-[-0.50px] font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-color-text-default-tertiary text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] [font-style:var(--single-line-body-base-font-style)]">
              Tomatoes
            </div>
          </div>
        </div>
        <div className="flex w-[178px] items-center gap-[var(--size-space-300)] absolute top-[270px] left-[107px]">
          <div className="flex items-center justify-center gap-[var(--size-space-200)] pt-[var(--size-space-200)] pr-[var(--size-space-200)] pb-[var(--size-space-200)] pl-[var(--size-space-200)] relative flex-1 grow bg-[#515839] rounded-[var(--size-radius-200)] overflow-hidden border border-solid border-color-border-neutral-secondary">
            <button className="all-[unset] box-border relative w-fit mt-[-1.00px] font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-[#feead1] text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] whitespace-nowrap [font-style:var(--single-line-body-base-font-style)]">
              Add Ingredient
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
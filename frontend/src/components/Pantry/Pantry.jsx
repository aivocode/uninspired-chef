import { line_2_1, line_3_1, subtract_11 } from '../../assets/svg-assets';

export const Pantry = ({ className }) => {
  return (
    <div className={`w-[1200px] h-[1876px] bg-[#feead1] ${className}`}>
      <div className="relative h-[1605px]">
        <div className="absolute w-[1200px] h-[296px] top-0 left-0 bg-[#d9d9d9]" />
        <div className="absolute w-[726px] h-[72px] top-[206px] left-[237px] bg-[#abaaaa]" />
        <div className="absolute w-[681px] h-[1333px] top-[272px] left-[261px]">
          <div className="relative w-[677px] h-[1333px] bg-[url(${subtract_11})] bg-[100%_100%]">
            <img
              className="absolute w-[483px] h-1.5 top-[194px] left-[88px]"
              alt="Line"
              src={line_2_1}
            />
            <img
              className="absolute w-[483px] h-1.5 top-[1150px] left-[88px]"
              alt="Line"
              src={line_2_1}
            />
            <div className="absolute w-[289px] top-20 left-[194px] font-title-hero font-[number:var(--title-hero-font-weight)] text-black text-[length:var(--title-hero-font-size)] tracking-[var(--title-hero-letter-spacing)] leading-[var(--title-hero-line-height)] whitespace-nowrap [font-style:var(--title-hero-font-style)]">
              PANTRY
            </div>
            <p className="absolute w-[483px] top-[236px] left-[88px] font-heading font-[number:var(--heading-font-weight)] text-black text-[length:var(--heading-font-size)] tracking-[var(--heading-letter-spacing)] leading-[var(--heading-line-height)] [font-style:var(--heading-font-style)]">
              &nbsp;&nbsp;Ingredient&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--------------&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Quantity
              <br />
              <br />
              <br />
              Tomatoes&nbsp;&nbsp;-----------------------&nbsp;&nbsp; 4<br />
              <br />
              <br />
              Spaghetti&nbsp;&nbsp;------------------------ 200g
              <br />
              <br />
              <br />
              Garlic&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------------------------ 1 head
            </p>
            <div className="flex w-[98px] items-center gap-[var(--size-space-400)] absolute top-3 left-[564px]">
              <button className="all-[unset] box-border flex items-center justify-center gap-[var(--size-space-200)] pt-[var(--size-space-300)] pr-[var(--size-space-300)] pb-[var(--size-space-300)] pl-[var(--size-space-300)] relative flex-1 grow bg-white rounded-[var(--size-radius-200)] overflow-hidden border border-solid border-color-border-neutral-secondary">
                <div className="relative w-fit mt-[-1.00px] font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-color-text-default-default text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] whitespace-nowrap [font-style:var(--single-line-body-base-font-style)]">
                  + ADD
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute w-[677px] h-[59px] top-[213px] left-[261px] bg-white" />
        <div className="absolute w-[726px] h-[54px] top-[170px] left-[237px] bg-[#abaaaa]" />
      </div>
    </div>
  );
};

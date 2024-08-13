import { Header } from "../../components/Header";
import { TextLink } from "../../components/TextLink";

export const AuthenticationPage = () => {
  return (
    <div className="flex flex-col w-[var(--responsive-device-width)] items-start relative bg-color-background-default-default">
      <Header
        className="!self-stretch !h-[291px] ![border-right-style:none] ![border-top-style:none] ![border-left-style:none] !w-full"
        img="/img/subtract-12.svg"
        line="/img/line-1-2.svg"
        property1="pantry-page"
        settingBottomBunClassName="bg-[url(/static/img/subtract-9.svg)]"
        subtract="/img/subtract-10.svg"
        union="/img/union-8.svg"
        union1="/img/union-9.svg"
        union2="/img/union-10.svg"
      />
      <div className="flex flex-col w-[var(--responsive-device-width)] items-center justify-center gap-[var(--size-space-800)] pt-[var(--size-space-4000)] pr-[var(--size-space-600)] pb-[var(--size-space-4000)] pl-[var(--size-space-600)] relative flex-[0_0_auto] bg-[#feead1]">
        <div className="inline-flex flex-col items-center gap-[var(--size-space-200)] relative flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] font-title-hero font-[number:var(--title-hero-font-weight)] text-[#515839] text-[length:var(--title-hero-font-size)] text-center tracking-[var(--title-hero-letter-spacing)] leading-[var(--title-hero-line-height)] [font-style:var(--title-hero-font-style)]">
            Sign Up
          </div>
        </div>
        <div className="inline-flex flex-col min-w-80 h-[404px] items-start gap-[var(--size-space-600)] pt-[var(--size-space-600)] pr-[var(--size-space-600)] pb-[var(--size-space-600)] pl-[var(--size-space-600)] relative bg-[#dde4ba] rounded-[var(--size-radius-200)] border border-solid border-color-border-default-default">
          <div className="flex flex-col items-start gap-[var(--size-space-200)] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] font-body-base font-[number:var(--body-base-font-weight)] text-[#515839] text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]">
              Name
            </div>
            <div className="flex min-w-60 items-center pt-[var(--size-space-300)] pr-[var(--size-space-400)] pb-[var(--size-space-300)] pl-[var(--size-space-400)] relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-[#feead1] rounded-[var(--size-radius-200)] overflow-hidden border border-solid border-color-border-default-default">
              <div className="relative flex-1 mt-[-0.50px] font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-color-text-default-tertiary text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] [font-style:var(--single-line-body-base-font-style)]">
                John Smith
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[var(--size-space-200)] relative self-stretch w-full flex-[0_0_auto]">
            <input
              className="relative self-stretch mt-[-1.00px] font-body-base font-[number:var(--body-base-font-weight)] text-[#515839] text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)] [background:transparent] border-[none] p-0"
              placeholder="Email"
              type="email"
            />
            <input
              className="min-w-60 pt-[var(--size-space-300)] pr-[var(--size-space-400)] pb-[var(--size-space-300)] pl-[var(--size-space-400)] relative self-stretch w-full mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-[#feead1] rounded-[var(--size-radius-200)] overflow-hidden border border-solid border-color-border-default-default flex-1 mt-[-0.50px] font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-color-text-default-tertiary text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] [font-style:var(--single-line-body-base-font-style)]"
              placeholder="example@makers.co.uk"
              type="email"
            />
          </div>
          <div className="flex flex-col items-start gap-[var(--size-space-200)] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] font-body-base font-[number:var(--body-base-font-weight)] text-[#515839] text-[length:var(--body-base-font-size)] tracking-[var(--body-base-letter-spacing)] leading-[var(--body-base-line-height)] [font-style:var(--body-base-font-style)]">
              Password
            </div>
            <div className="flex min-w-60 items-center pt-[var(--size-space-300)] pr-[var(--size-space-400)] pb-[var(--size-space-300)] pl-[var(--size-space-400)] relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-[#feead1] rounded-[var(--size-radius-200)] overflow-hidden border border-solid border-color-border-default-default">
              <div className="relative flex-1 mt-[-0.50px] font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-color-text-default-tertiary text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] [font-style:var(--single-line-body-base-font-style)]">
                **************
              </div>
            </div>
          </div>
          <div className="gap-[var(--size-space-400)] self-stretch w-full flex-[0_0_auto] flex items-center relative">
            <button className="all-[unset] box-border justify-center gap-[var(--size-space-200)] pt-[var(--size-space-300)] pr-[var(--size-space-300)] pb-[var(--size-space-300)] pl-[var(--size-space-300)] flex-1 grow bg-[#515839] rounded-[var(--size-radius-200)] overflow-hidden border border-solid border-[color:var(--color-border-brand-default)] flex items-center relative">
              <button className="all-[unset] box-border relative w-fit mt-[-1.00px] font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-[#feead1] text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] whitespace-nowrap [font-style:var(--single-line-body-base-font-style)]">
                {" "}
                Sign Up
              </button>
            </button>
          </div>
          <TextLink
            className="!self-stretch !mb-[-12.00px] !flex-[0_0_auto] !flex !w-full"
            text="Already have an account? Login!"
          />
        </div>
      </div>
    </div>
  );
};

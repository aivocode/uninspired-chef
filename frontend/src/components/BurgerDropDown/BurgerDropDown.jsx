export const BurgerDropDown = ({ property1, className }) => {
  return (
    <div
      className={`w-[225px] ${property1 === "closed" ? "h-[180px]" : "h-[260px]"} ${
        property1 === "open" ? "relative" : ""
      } ${className}`}
    >
      <div
        className={`left-5 top-[19px] ${property1 === "open" ? "w-[189px]" : "w-48"} ${
          property1 === "open" ? "h-[136px]" : "h-[139px]"
        } ${property1 === "open" ? "absolute" : "relative"}`}
      >
        {property1 === "open" && (
          <img
            className="absolute w-[189px] h-[23px] top-[113px] left-0"
            alt="Union"
            src="https://c.animaapp.com/SwMh7ZZE/img/union-2.svg"
          />
        )}

        <div
          className={`left-[3px] bg-[#b51b1e] absolute ${property1 === "closed" ? "w-[186px]" : "w-[183px]"} ${
            property1 === "closed" ? "top-[60px]" : "top-[72px]"
          } ${property1 === "closed" ? "h-2" : "h-[9px]"}`}
        />
        <div
          className={`left-[3px] bg-[#638209] absolute ${property1 === "open" ? "w-[183px]" : "w-[186px]"} ${
            property1 === "open" ? "top-[89px]" : "top-[68px]"
          } ${property1 === "open" ? "h-[9px]" : "h-2"}`}
        />
        {property1 === "open" && (
          <div className="absolute w-[189px] h-[130px] top-0 left-0">
            <button className="all-[unset] box-border relative w-[186px] h-[65px] left-px bg-[url(https://c.animaapp.com/SwMh7ZZE/img/ellipse-1-2.svg)] bg-[100%_100%]">
              <button className="all-[unset] box-border flex w-[111px] h-[52px] items-center justify-center gap-2 p-3 relative top-[13px] left-[38px] rounded-lg overflow-hidden">
                <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-[#1e1e1e] text-base tracking-[0] leading-4 whitespace-nowrap">
                  Logout
                </div>
              </button>
            </button>
          </div>
        )}

        {property1 === "closed" && (
          <>
            <div className="absolute w-48 h-[26px] top-[113px] left-0 bg-[url(https://c.animaapp.com/SwMh7ZZE/img/subtract-3.svg)] bg-[100%_100%]" />
            <div className="absolute w-48 h-8 top-[81px] left-0 bg-[#a13c2a] rounded-[64px]" />
            <div className="absolute w-48 h-[120px] top-0 left-0">
              <img
                className="absolute w-[189px] h-[60px] top-0 left-px"
                alt="Ellipse"
                src="https://c.animaapp.com/SwMh7ZZE/img/ellipse-1-3.svg"
              />
            </div>
            <img
              className="absolute w-48 h-[21px] top-[76px] left-0"
              alt="Union"
              src="https://c.animaapp.com/SwMh7ZZE/img/union-3.svg"
            />
          </>
        )}
      </div>
      {property1 === "open" && (
        <>
          <div className="absolute w-[189px] h-7 top-[216px] left-5 bg-[url(https://c.animaapp.com/SwMh7ZZE/img/subtract-2.svg)] bg-[100%_100%]">
            <div className="flex w-[162px] h-7 items-center justify-center gap-2 p-3 relative left-[13px] rounded-lg overflow-hidden">
              <div className="relative w-fit mt-[-6.85px] mb-[-4.85px] [font-family:'Inter',Helvetica] font-normal text-[#1e1e1e] text-base tracking-[0] leading-4 whitespace-nowrap">
                Saved Recipes
              </div>
            </div>
          </div>
          <div className="absolute w-[189px] h-[35px] top-[158px] left-5 bg-[#a13c2a] rounded-[64px]">
            <div className="flex w-[162px] h-[35px] items-center justify-center gap-2 p-3 relative left-[13px] rounded-lg overflow-hidden">
              <div className="relative w-fit mt-[-3.54px] mb-[-1.54px] [font-family:'Inter',Helvetica] font-normal text-[#1e1e1e] text-base tracking-[0] leading-4 whitespace-nowrap">
                My pantry
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export const Knife = ({
  className,
  polygon = "https://c.animaapp.com/XNVGwrYa/img/polygon-3-2.svg",
  ellipse = "https://c.animaapp.com/XNVGwrYa/img/ellipse-2-2.svg",
  img = "https://c.animaapp.com/XNVGwrYa/img/ellipse-3-2.svg",
}) => {
  return (
    <div className={`w-[649px] h-[286px] ${className}`}>
      <div className="relative w-[635px] h-[267px]">
        <div className="absolute w-[430px] h-[190px] top-[76px] left-[205px]">
          <div className="absolute w-[291px] h-[105px] top-[42px] left-[9px] bg-[#d9d9d9] rotate-[18.00deg]" />
          <img className="absolute w-[154px] h-[66px] top-[123px] left-[275px]" alt="Polygon" src={polygon} />
          <img className="absolute w-[234px] h-[94px] top-[72px] left-[196px]" alt="Ellipse" src={ellipse} />
          <div className="absolute w-[82px] h-[62px] top-[116px] left-[262px] bg-[#d9d9d9] rotate-[-20.00deg]" />
          <img className="absolute w-[154px] h-[26px] top-[165px] left-[275px]" alt="Ellipse" src={img} />
        </div>
        <div className="absolute w-[253px] h-[126px] top-0 left-0">
          <div className="absolute w-[249px] h-[51px] top-[37px] left-0.5 bg-black rounded-[36px] rotate-[18.00deg]" />
          <div className="absolute w-[19px] h-[19px] top-7 left-[39px] bg-[#d9d9d9] rounded-[9.5px]" />
          <div className="absolute w-[19px] h-[19px] top-[49px] left-[104px] bg-[#d9d9d9] rounded-[9.5px]" />
          <div className="absolute w-[19px] h-[19px] top-[72px] left-[173px] bg-[#d9d9d9] rounded-[9.5px]" />
        </div>
      </div>
    </div>
  );
};

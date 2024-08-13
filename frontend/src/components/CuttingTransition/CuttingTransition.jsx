import { Knife } from "../Knife/Knife";

export const CuttingTransition = ({
  property1,
  className,
  ellipse = "https://c.animaapp.com/XNVGwrYa/img/ellipse-7-3.svg",
  img = "https://c.animaapp.com/XNVGwrYa/img/ellipse-8-3.svg",
  subtract = "https://c.animaapp.com/XNVGwrYa/img/subtract-6.svg",
  subtract1 = "https://c.animaapp.com/XNVGwrYa/img/subtract-7.svg",
  polygon = "https://c.animaapp.com/XNVGwrYa/img/polygon-5-3.svg",
  subtract2 = "https://c.animaapp.com/XNVGwrYa/img/subtract-11.svg",
  ellipse1 = "https://c.animaapp.com/XNVGwrYa/img/ellipse-8-3.svg",
  subtract3 = "https://c.animaapp.com/XNVGwrYa/img/subtract-9.svg",
  subtract4 = "https://c.animaapp.com/XNVGwrYa/img/subtract-10.svg",
  polygon1 = "https://c.animaapp.com/XNVGwrYa/img/polygon-5-3.svg",
  subtract5 = "https://c.animaapp.com/XNVGwrYa/img/subtract-11.svg",
  KnifePolygon = "https://c.animaapp.com/XNVGwrYa/img/polygon-3-1.svg",
  KnifeEllipse = "https://c.animaapp.com/XNVGwrYa/img/ellipse-2-1.svg",
  KnifeImg = "https://c.animaapp.com/XNVGwrYa/img/ellipse-3-1.svg",
}) => {
  return (
    <div className={`w-[775px] h-[904px] ${className}`}>
      <div
        className={`relative ${property1 === "chopping" ? "w-[649px]" : "w-[173px]"} ${
          property1 === "chopping" ? "left-[83px]" : "left-[452px]"
        } ${property1 === "chopping" ? "top-[573px]" : "top-[673px]"} ${
          property1 === "chopping" ? "h-[286px]" : "h-[180px]"
        }`}
      >
        <img
          className={`h-[141px] absolute ${property1 === "default" ? "w-[140px]" : "w-[136px]"} ${
            property1 === "default" ? "left-0" : "left-[406px]"
          } ${property1 === "default" ? "top-[39px]" : "top-[125px]"}`}
          alt="Ellipse"
          src={property1 === "default" ? ellipse : ellipse1}
        />
        <img
          className={`absolute ${property1 === "chopping" ? "w-[76px]" : "w-[136px]"} ${
            property1 === "chopping" ? "left-[433px]" : "left-[37px]"
          } ${property1 === "chopping" ? "top-[134px]" : "top-[25px]"} ${
            property1 === "chopping" ? "h-[30px]" : "h-[141px]"
          }`}
          alt="Ellipse"
          src={property1 === "chopping" ? subtract3 : img}
        />
        {property1 === "chopping" && (
          <div className="absolute w-[15px] h-[11px] top-[136px] left-[450px] bg-[#105126] rounded-[7.6px/5.34px]" />
        )}

        <img
          className={`absolute ${property1 === "chopping" ? "w-6" : "w-[76px]"} ${
            property1 === "chopping" ? "left-[431px]" : "left-16"
          } ${property1 === "chopping" ? "top-[100px]" : "top-[34px]"} ${
            property1 === "chopping" ? "h-[43px]" : "h-[30px]"
          }`}
          alt="Subtract"
          src={property1 === "chopping" ? subtract4 : subtract}
        />
        {property1 === "chopping" && (
          <>
            <img className="absolute w-3.5 h-[31px] top-[114px] left-[454px]" alt="Polygon" src={polygon1} />
            <img className="absolute w-[58px] h-[42px] top-[122px] left-[459px]" alt="Subtract" src={subtract5} />
            <Knife className="!absolute !left-0 !top-0" ellipse={KnifeEllipse} img={KnifeImg} polygon={KnifePolygon} />
            <img
              className="absolute w-[140px] h-[141px] top-[139px] left-[369px]"
              alt="Ellipse"
              src="https://c.animaapp.com/XNVGwrYa/img/ellipse-7-3.svg"
            />
          </>
        )}

        {property1 === "default" && (
          <>
            <div className="absolute w-[15px] h-[11px] top-9 left-[81px] bg-[#105126] rounded-[7.6px/5.34px]" />
            <img className="absolute w-6 h-[43px] top-0 left-[62px]" alt="Subtract" src={subtract1} />
            <img className="absolute w-3.5 h-[31px] top-3.5 left-[85px]" alt="Polygon" src={polygon} />
            <img className="absolute w-[58px] h-[42px] top-[22px] left-[90px]" alt="Subtract" src={subtract2} />
          </>
        )}
      </div>
    </div>
  );
};

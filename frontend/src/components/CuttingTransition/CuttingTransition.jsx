import { Knife } from "../Knife/Knife";
import {
  ellipse_7_3,
  ellipse_8_3,
  subtract_6,
  subtract_7,
  polygon_5_3,
  subtract_11,
  subtract_9,
  subtract_10,
  polygon_3_1,
  ellipse_2_1,
  ellipse_3_1,
} from '../../assets/svg-assets';

export const CuttingTransition = ({
  property1,
  className,
  ellipse = ellipse_7_3,
  img = ellipse_8_3,
  subtract = subtract_6,
  subtract1 = subtract_7,
  polygon = polygon_5_3,
  subtract2 = subtract_11,
  ellipse1 = ellipse_8_3,
  subtract3 = subtract_9,
  subtract4 = subtract_10,
  polygon1 = polygon_5_3,
  subtract5 = subtract_11,
  KnifePolygon = polygon_3_1,
  KnifeEllipse = ellipse_2_1,
  KnifeImg = ellipse_3_1,
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
              src={ellipse_7_3}
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

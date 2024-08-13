export const Tomato = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <img
        className="absolute w-[140px] h-[141px] left-[0px] top-[39px]"
        alt="Tomato Top"
        src="https://c.animaapp.com/8aTehn18/img/ellipse-7-3.svg"
      />
      <img
        className="absolute w-[136px] h-[141px] left-[37px] top-[25px]"
        alt="Tomato Bottom"
        src="https://c.animaapp.com/8aTehn18/img/ellipse-8-3.svg"
      />
      <img
        className="absolute w-[15px] h-[11px] left-[81px] top-[9px] bg-[#105126] rounded-[7.6px/5.34px]"
        alt="Tomato Stem"
        src="https://c.animaapp.com/8aTehn18/img/subtract-10.svg"
      />
    </div>
  );
};

const ButtonP = ({text}) => {
    return (
      <div 
      className="flex text-center items-center justify-center bg-[#33FFD1] cursor-pointer rounded-3xl pt-1.5 pb-1.5 pr-8 pl-8 text-lg mr-2 text-[#0099FF] transition-colors duration-200 hover:bg-[#BDFF00]  "
      >
          <p className="decoration-transparent font-semibold">{text}</p>
      </div>
    )
  }
  
  export default ButtonP
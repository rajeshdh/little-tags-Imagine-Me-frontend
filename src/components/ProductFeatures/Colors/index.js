import { FormattedMessage } from "react-intl";
const Colors = ({ colors, onChange, selected }) => {

  return (<div className="flex mt-6 items-center mb-5">
    <div>
      <span className="mr-3 font-bold text-lg"> <FormattedMessage id="color" />:</span>
      <div className="flex mt-1">
        { 
          colors && colors.map((color, index) => {
            return <button
              key={index}
              className="border-2 border-gray-300 rounded-full w-12 h-12 mr-1 focus:outline-none"
              style={{ backgroundColor: color, border: selected === color ? "5px solid gold" : "0px" }}
              onClick={() => onChange(color)}
            ></button>
          })
        }
      </div>
    </div>

  </div>)
}

export default Colors;
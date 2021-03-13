import { FormattedMessage } from "react-intl";

function Quantity({ small, max, selected, increaseQuantity, decreaseQuantity, onChange }) {
  return (
    <div className="flex mt-6 items-center mb-5">
      <div>
        <span className={`${small ? 'hidden' : ''} mr-3 font-bold text-lg`}><FormattedMessage id="quantity" />:</span>
        <div className="flex mt-1">

          <button
            className={`${small ? 'h-7 w-7 text-1xl' : 'h-10 w-10 text-2xl'} rounded-full bg-transparent border border-solid border-gray-400 mr-1 hover:bg-sp-btn-primary hover:border-sp-btn-primary hover:text-white active:bg-pink-600 focus:outline-none`}
            disabled={selected < 1}
            type="button"
            onClick={decreaseQuantity}
          >
            -
       </button>

          <input
            type="number"
            value={selected}
            min={0}
            max={max}
            className={`${small ? 'w-10 h-7 px-1' : 'w-16 h-10 px-4'} bg-transparent 
              border border-solid
              border-gray-400 active:bg-pink-600 
              font-bold uppercase text-sm text-center sm:text-right
              rounded outline-none 
              mr-1`}
            onChange={(e) => onChange(e.target.value)}
          />

          <button
            className={`${small ? 'h-7 w-7 text-1xl' : 'h-10 w-10 text-2xl'} rounded-full bg-transparent border border-solid border-gray-400 mr-1 hover:bg-sp-btn-primary hover:border-sp-btn-primary hover:text-white active:bg-pink-600 focus:outline-none`}
            type="button"
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>
      </div>
    </div>)
}

export default Quantity;
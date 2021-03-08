import { FormattedMessage } from "react-intl";

function Quantity({ selected, increaseQuantity, decreseQuantity, onChange }) {
  return (
    <div className="flex mt-6 items-center mb-5">
      <div>
        <span className="mr-3 font-bold text-lg"><FormattedMessage id="quantity" />:</span>
        <div className="flex mt-1">

          <button
            className="text-sp-btn-primary bg-transparent border border-solid border-sp-btn-selected  hover:bg-sp-btn-selected  hover:text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none mr-1 mb-1"
            disabled={selected < 1}
            type="button"
            onClick={decreseQuantity}
          >
            -
       </button>

          <input
            type="number"
            value={selected}
            min={0}
            className="text-sp-btn-primary bg-transparent 
            border border-solid
           border-sp-btn-selected active:bg-pink-600 
           font-bold uppercase text-xs px-4 py-2 
           rounded outline-none 
            mr-1 mb-1
           w-20"
            onChange={(e) => onChange(e.target.value)}
          />

          <button
            className="text-sp-btn-primary bg-transparent border border-solid border-sp-btn-selected  hover:bg-sp-btn-selected  hover:text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none mr-1 mb-1"
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
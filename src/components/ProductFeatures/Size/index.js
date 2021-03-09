import { FormattedMessage } from 'react-intl';

const Size = ({ sizes, onChange, selected }) => (
  <div className="flex mt-6 items-center mb-5">
    <div>
      <span className="mr-3 font-bold text-lg">
        <FormattedMessage id="size" />:
      </span>
      <div className="flex mt-1">
        {sizes &&
          sizes.map((size, index) => {
            const classNames =
              selected === size
                ? 'bg-sp-btn-selected hover:bg-sp-btn-selected-dark'
                : 'bg-sp-btn-default hover:bg-sp-btn-default-dark';
            return (
              <button
                key={index}
                className={`flex ml-1 text-white font-bold  
           border-0 py-2 px-6 rounded ${classNames}`}
                onClick={() => onChange(size)}
              >
                {size}
              </button>
            );
          })}
      </div>
    </div>
  </div>
);

export default Size;

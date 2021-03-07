import { Range, createSliderWithTooltip } from 'rc-slider'
import 'rc-slider/assets/index.css';
import { FormattedNumber } from 'react-intl';

export default function RangeSlider({ defaultValue, onChange, onAfterChange, min, max, marks }) {
    const SliderWithTooltip = createSliderWithTooltip(Range);

    const currencyFormatter = (value) => {
        return <FormattedNumber
            currency="INR"
            style="currency"
            value={value}
        />
    }

    return <SliderWithTooltip
        defaultValue={defaultValue}
        onAfterChange={onAfterChange}
        min={min}
        max={max}
        onChange={onChange}
        allowCross={false}
        trackStyle={[{
            background: '#F85439'
        }]}
        tipFormatter={currencyFormatter}
        dotStyle={{
            borderColor: 'red'
        }}
        activeDotStyle={{
            borderColor: 'red'
        }}
        marks={marks}
    />
}
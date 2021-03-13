import Size from './Feature/SizeFeature'
import Color from './Feature/ColorFeature'
import { FormattedMessage } from 'react-intl'

export default function ProductFeatures({ features, featuresSelected, clickable }) {
    const featureElements = features.map((feature, id) => {
        switch (feature.type) {
            case 'color': return <div key={`feature_id_${id}`} className="flex items-center mb-2 capitalize">
                <span className="mr-2 text-gray-600">
                    <FormattedMessage id="color" defaultMessage="color" />
                </span>
                {feature.value.map((item, itemIndex) => <Color
                    selected={featuresSelected?.color == itemIndex}
                    color={item}
                    key={`feature_item_id${itemIndex}`}
                    clickable={clickable ? type => clickable(type, itemIndex) : null}
                />)}
            </div>
            case 'size': return <div key={`feature_id_${id}`} className="flex items-center mb-2">
                <span className="mr-2 text-gray-600">
                    <FormattedMessage id="size" defaultMessage="size" />
                </span>
                {feature.value.map((item, itemIndex) => <Size
                    selected={featuresSelected?.size == itemIndex}
                    value={item}
                    key={`feature_item_id${itemIndex}`}
                    clickable={clickable ? type => clickable(type, itemIndex) : null}
                />)}
            </div>
        }
    })

    return featureElements
}
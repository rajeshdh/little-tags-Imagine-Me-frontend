import Size from './Feature/SizeFeature'
import Color from './Feature/ColorFeature'
import { FormattedMessage } from 'react-intl'

export default function ProductFeatures({ features, featuresSelected, clickable, small }) {
    const featureElements = features.map((feature, id) => {
        switch (feature.type) {
            case 'color': return <div key={`feature_id_${id}`} className={`${small ? 'mb-3': 'mb-5'} flex items-center capitalize`}>
                <span className="mr-2 text-gray-600">
                    <FormattedMessage id="color" defaultMessage="color" />
                </span>
                {feature.value.map((item, itemIndex) => <Color
                    selected={featuresSelected?.color == itemIndex}
                    color={item}
                    key={`feature_item_id${itemIndex}`}
                    small={small}
                    clickable={clickable ? type => clickable(type, itemIndex) : null}
                />)}
            </div>
            case 'size': return <div key={`feature_id_${id}`} className={`${small ? 'mb-3': 'mb-5'} flex items-center`}>
                <span className="mr-2 text-gray-600">
                    <FormattedMessage id="size" defaultMessage="size" />
                </span>
                {feature.value.map((item, itemIndex) => <Size
                    selected={featuresSelected?.size == itemIndex}
                    value={item}
                    key={`feature_item_id${itemIndex}`}
                    small={small}
                    clickable={clickable ? type => clickable(type, itemIndex) : null}
                />)}
            </div>
        }
    })

    return featureElements
}
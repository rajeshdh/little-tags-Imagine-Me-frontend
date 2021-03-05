import Size from './Feature/SizeFeature'
import Color from './Feature/ColorFeature'
import { FormattedMessage } from 'react-intl'

export default function ProductFeatures({ features, clickable }) {
    const featureElements = features.map((feature, id) => {
        switch (feature.type) {
            case 'color': return <div key={`feature_id_${id}`} className="flex items-center mb-2 capitalize">
                {feature.value.map((item, itemIndex) => <Color color={item} key={`feature_item_id${itemIndex}`} clickable={clickable} />)}
            </div>
            case 'size': return <div key={`feature_id_${id}`} className="flex items-center mb-2">
                {feature.value.map((item, itemIndex) => <Size value={item} key={`feature_item_id${itemIndex}`} clickable={clickable} />)}
            </div>
        }
    })

    return featureElements
}
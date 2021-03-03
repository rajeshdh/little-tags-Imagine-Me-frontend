import Enzyme from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
Enzyme.configure({ adapter: new Adapter() })

import { IntlProvider } from 'react-intl'

const { mount } = Enzyme

import CategoryCarouselCard from '../CategoryCarouselCard'


import translation_en from '../../../translations/en.json'

describe('<CategoryCarouselCard />', () => {
    it('should renders correctly (snapshot)', () => {
        const tree = mount(
            <IntlProvider locale="en" messages={translation_en}>
                <CategoryCarouselCard
                    title="Bags"
                    image="image" />
            </IntlProvider>)
        expect(toJson(tree)).toMatchSnapshot()
    });
})
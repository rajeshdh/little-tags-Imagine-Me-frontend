import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { IntlProvider } from 'react-intl';

import CategoryCarouselCard from '../CategoryCarouselCard';

import translation_en from '../../../translations/en.json';

Enzyme.configure({ adapter: new Adapter() });

const { mount } = Enzyme;

describe('<CategoryCarouselCard />', () => {
  it('should renders correctly (snapshot)', () => {
    const tree = mount(
      <IntlProvider locale="en" messages={translation_en}>
        <CategoryCarouselCard title="Bags" image="image" />
      </IntlProvider>,
    );
    expect(toJson(tree)).toMatchSnapshot();
  });
});

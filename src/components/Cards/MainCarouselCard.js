import { FormattedMessage } from 'react-intl'

export default function MainCarouselCard({ title, description, image }) {
    return <div className="flex flex-row-reverse h-full relative">
        <div className="w-full relative bg-top bg-cover bg-no-repeat lg:w-2/4" style={{ backgroundImage: `url(${image})` }}>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 opacity-50 lg:hidden"></div>
        </div>
        <div className="absolute inset-0 p-3 flex items-center lg:justify-center lg:relative lg:w-2/4 lg:p-0">
            <div className="w-9/12 md:w-2/4 text-left">
                <div className="text-gray-500 text-xl">
                    <FormattedMessage id={title} />
                </div>
                <div className="text-5xl mt-5 lg:text-6xl">
                    <FormattedMessage id={description} />
                </div>
            </div>
        </div>
    </div>
}
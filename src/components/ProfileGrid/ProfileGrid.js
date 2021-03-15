import { FormattedMessage } from "react-intl";

export default function ProfileGrid({ title, description, children, onClick }) {
    return <div className="bg-gray-50 cursor-pointer transform transition-transform duration-500 hover:scale-101 rounded shadow-md p-3 min-h-sm flex items-center"
        onClick={onClick ?? null}
    >
        <div className="min-w-sm">
            {children}
        </div>
        <div>
            <div className="text-2xl capitalize">
                <FormattedMessage id={title} defaultMessage={title} />
            </div>
            <div className="text-lg text-gray-600">
                <FormattedMessage id={description} defaultMessage={description} />
            </div>
        </div>
    </div>
}
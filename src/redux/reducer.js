import getLocale from '../Utils/getLocale'

const availableLanguages = ['en', 'hi']
const userPreferredLanguage = getLocale()

const locale = availableLanguages.includes(userPreferredLanguage) ? userPreferredLanguage : 'en'

const initialState = {
    locale
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_LOCALE':
            return {
                ...state,
                locale: action.payload.value
            };
        default: return state
    }
}
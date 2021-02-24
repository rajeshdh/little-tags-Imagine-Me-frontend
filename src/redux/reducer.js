import getLocale from '../Utils/getLocale'

const availableLanguages = ['en', 'hi']
const userPreferredLanguage = getLocale()

const locale = availableLanguages.includes(userPreferredLanguage) ? userPreferredLanguage : 'en'

const initialState = {
    locale
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        default: return state
    }
}
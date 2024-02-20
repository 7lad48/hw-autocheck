const initState = {
    themeId: 1,
}
type InitStateType = typeof initState

export const themeReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID' as const, id }) // fix any

export type ChangeThemeIdType = ReturnType<typeof changeThemeId>
type ActionsType = ChangeThemeIdType

export const selectOwner = (state: any) => {
    return state.authState.owner;
}

export const selectIsNeedLogin = (state: any) => {
    return state.authState.isNeedLogin;
}
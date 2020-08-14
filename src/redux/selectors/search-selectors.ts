export const selectUsers = (state: any) => {
    return state.searchPage.users;
}

export const selectHaveMore = (state: any) => {
    return state.searchPage.haveMore;
}

export const selectFollowingInProgress = (state: any) => {
    return state.searchPage.followingInProgress;
}
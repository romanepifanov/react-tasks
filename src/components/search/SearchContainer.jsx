import { connect } from 'react-redux';
import Search from './Search';
import { switchFollowAction, loadModeAction, setUsersAction } from '../../redux/reducers/search-reducer';

const mapStateToProps = (state) => {
    return { 
        users: state.searchPage.users,
        needMore: state.searchPage.needMore,
        haveMore: state.searchPage.haveMore
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeFollow: (userId) => {
            dispatch(switchFollowAction(userId));
        },
        onLoadMore: (users, totalCount) => {
            dispatch(setUsersAction(users, totalCount));
        },
        onSetUsers: (users, totalCount) => {
            dispatch(setUsersAction(users, totalCount));
        }
    }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
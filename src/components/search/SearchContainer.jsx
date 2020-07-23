import { connect } from 'react-redux';
import { switchFollowAction, loadUsersAction } from '../../redux/reducers/search-reducer';
import SearchAPiContainer from './SearchAPiContainer';

const mapStateToProps = (state) => {
    return { 
        users: state.searchPage.users,
        haveMore: state.searchPage.haveMore
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeFollow: (userId) => {
            dispatch(switchFollowAction(userId));
        },
        onLoadMore: (users, totalCount) => {
            dispatch(loadUsersAction(users, totalCount));
        }
    }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchAPiContainer);

export default SearchContainer;
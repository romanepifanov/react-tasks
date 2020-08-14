import { connect } from 'react-redux';
import { getUsers, deleteFollow, addFollow } from '../../redux/reducers/search-reducer';
import { selectUsers, selectHaveMore, selectFollowingInProgress } from '../../redux/selectors/search-selectors';
import SearchAPIContainer from './SearchAPIContainer';

const mapStateToProps = (state) => {
    return {
        users: selectUsers(state),
        haveMore: selectHaveMore(state),
        followingInProgress: selectFollowingInProgress(state)
    }
}

const mapDispatchToProps = {
    getUsers,
    deleteFollow,
    addFollow
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchAPIContainer);

export default SearchContainer;
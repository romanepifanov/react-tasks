import { connect } from 'react-redux';
import { onChangeFollow, onLoadMore, onFollowingInProgress } from '../../redux/reducers/search-reducer';
import SearchAPIContainer from './SearchAPIContainer';

const mapStateToProps = (state) => {
    return { 
        users: state.searchPage.users,
        haveMore: state.searchPage.haveMore,
        followingInProgress: state.searchPage.followingInProgress
    }
}

const mapDispatchToProps = {
    onChangeFollow,
    onLoadMore,
    onFollowingInProgress
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchAPIContainer);

export default SearchContainer;
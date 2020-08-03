import { connect } from 'react-redux';
import { getUsers, deleteFollow, addFollow } from '../../redux/reducers/search-reducer';
import SearchAPIContainer from './SearchAPIContainer';

const mapStateToProps = (state) => {
    return { 
        users: state.searchPage.users,
        haveMore: state.searchPage.haveMore,
        followingInProgress: state.searchPage.followingInProgress
    }
}

const mapDispatchToProps = {
    getUsers,
    deleteFollow,
    addFollow
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchAPIContainer);

export default SearchContainer;
import { connect } from 'react-redux';
import { onChangeFollow, onLoadMore } from '../../redux/reducers/search-reducer';
import SearchAPIContainer from './SearchAPIContainer';

const mapStateToProps = (state) => {
    return { 
        users: state.searchPage.users,
        haveMore: state.searchPage.haveMore
    }
}

const mapDispatchToProps = {
    onChangeFollow,
    onLoadMore
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchAPIContainer);

export default SearchContainer;
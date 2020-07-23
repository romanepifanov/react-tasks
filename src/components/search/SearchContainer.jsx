import { connect } from 'react-redux';
import { onChangeFollow, onLoadMore } from '../../redux/reducers/search-reducer';
import SearchAPiContainer from './SearchAPiContainer';

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

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchAPiContainer);

export default SearchContainer;
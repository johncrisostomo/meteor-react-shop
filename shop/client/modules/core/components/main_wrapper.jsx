import React from 'react';
import CategoryList from './category_list.jsx';
import ProductsList from './products_list.jsx';
import Navbar from './navbar.jsx';

class MainWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: 'All', searchText: ''};
  }

  updateFilter(filter) {
    this.setState({show: filter});
  }

  updateSearch(filter) {
    this.setState({searchText: filter});
  }

  render() {
    return (
      <div className="container">
        <Navbar
          updateSearch={this.updateSearch.bind(this)}
        />
        <h1>Welcome Shop</h1>
        <div className="row">
          <div className="col-md-3">
            <CategoryList
              categories={this.props.categories}
              updateFilter={this.updateFilter.bind(this)}
            />
          </div>
          <div className="col-md-9">
            <div className="row">
              <ProductsList
                products={this.props.products}
                filter={this.state.show}
                setSearchString={this.props.setSearchString}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainWrapper;

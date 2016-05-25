import React from 'react';
import CategoryList from './category_list.jsx';

class MainWrapper extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <CategoryList
              categories={this.props.categories}
            />
          </div>
          <div className="col-md-9">
            <h1>PRODUCTS HERE</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default MainWrapper;

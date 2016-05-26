import React from 'react';
import CategoryItem from './category_item.jsx';

class CategoryList extends React.Component {
  render() {
    var categories = this.props.categories.map((category) => {
      return <CategoryItem key={category._id} category={category} updateFilter={this.props.updateFilter} />
    });

    categories.unshift(<CategoryItem key={'adsf546'} category={{name: 'All'}} updateFilter={this.props.updateFilter} />);

    return (
      <div>
        <h2>Categories</h2>
        <div className="list-group">
          {categories}
        </div>
      </div>
    );
  }
}

export default CategoryList;

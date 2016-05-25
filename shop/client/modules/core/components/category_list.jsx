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
        <div className="list-group">
          {categories}
        </div>
      </div>
    );
  }
}

export default CategoryList;

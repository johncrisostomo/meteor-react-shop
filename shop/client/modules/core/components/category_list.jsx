import React from 'react';
import CategoryItem from './category_item.jsx';

class CategoryList extends React.Component {
  render() {
    const categories = this.props.categories.map((category) => {
      return <CategoryItem key={category._id} category={category} />
    });
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

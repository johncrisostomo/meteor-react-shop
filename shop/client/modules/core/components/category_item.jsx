import React from 'react';

class CategoryItem extends React.Component {
  render() {
    return (
      <div>
        <a href="#" className="list-group-item">
          <h4 className="list-group-item-heading">{this.props.category.name}</h4>
        </a>
      </div>
    );
  }
}

export default CategoryItem;

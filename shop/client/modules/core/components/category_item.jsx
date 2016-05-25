import React from 'react';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.updateFilter(this.props.category.name);
  }
  render() {
    return (
      <div>
        <a href="#" onClick={this.handleClick.bind(this)} className="list-group-item">
          <h4 className="list-group-item-heading">{this.props.category.name}</h4>
        </a>
      </div>
    );
  }
}

export default CategoryItem;

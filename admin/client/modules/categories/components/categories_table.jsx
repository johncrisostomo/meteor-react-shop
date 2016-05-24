import React from 'react';
import CategoriesRow from './categories_row.jsx';

class CategoriesTable extends React.Component {
  render() {
  const rows = this.props.categories.map((category) => {
    return <CategoriesRow key={category._id} category={category}
      update={this.props.update} catDelete={this.props.catDelete} />;
  });
    return (
      <div>
        <table className="table table-striped">
          <tbody>
          <tr>
            <th>Category Name</th>
            <th>Image URL</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CategoriesTable;

import React from 'react';
import CategoriesAdd from './categories_add.jsx';
import CategoriesTable from './categories_table.jsx';

class CategoriesList extends React.Component {
  componentDidMount() {
    $('#addCategoryForm').hide();
  }

  toggleForm(e) {
    e.preventDefault();
    $('#formToggler').hide();
    $('#addCategoryForm').show();
  }

  render() {
    return (
      <div>
       <h1>Showing all Categories</h1>
       <div id='formToggler' className='well clearfix'>
       <button className='btn btn-primary pull-right'
          onClick={this.toggleForm}>
        Add Category
       </button>
       </div>
       <div id='addCategoryForm'>
        <CategoriesAdd categoriesAdd={this.props.categoriesAdd} />
       </div>
       <CategoriesTable
        categories={this.props.categories}
        update={this.props.categoriesUpdate}
        catDelete={this.props.categoriesDelete}
       />
      </div>
    );
  }
}

export default CategoriesList;

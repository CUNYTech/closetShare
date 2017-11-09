import React from 'react';

const ProductCreate = () => {
    return (
    <div className="Main">
      <h1>
      Product page create
      </h1>
      <div>
        <form>
            <div class="form-group">
                <label for="exampleProduct">Product Title</label>
                <input type="text" class="form-control" id="exampleProduct" placeholder="Product Title"/>
            </div>
            <div class="form-group">
                <label for="productDescription">Description</label>
                <input type="text" class="form-control" id="eproductDescription" placeholder="Description"/>
            </div>
            <div class="form-group">
                <label for="Images">Product Image</label>
                <input type="file" id="Images"/>
                <p class="help-block">Upload product images here in order of appearance</p>
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
      </div>
    </div>
      
    );
  };
  
  
  export default ProductCreate;
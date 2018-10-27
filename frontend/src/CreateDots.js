import React, { Component } from 'react';
import './CreateDots.css'

class CreateDots extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    postData() {
    }
    

    render() {
        return (
            <div class="create-dots">
            <h2>
              Make a new post:
            </h2>
                <form>
                    <div class="form-group">
                        <input type="title" class="form-control" placeholder="Title" required="required" />
                    </div>
                    <div class="form-group">
                        <input type="description" class="form-control" placeholder="Description" required="required" />
                    </div>
                    <div class="form-group">
                        <button type="image" class="btn btn-primary btn-block">Upload Image</button>
                    </div>

                    <div class="form-group">
                      <label for="exampleFormControlSelect1">Category</label>
                      <select class="form-control" id="category-form">
                        <option>Food Waste</option>
                        <option>Agriculture</option>
                        <option>Public Transport</option>
                        <option>Plant-based Diet</option>
                      </select>
                    </div>

                    <div class="form-group">
                        <button type="submit" class="btn btn-success btn-block">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateDots;
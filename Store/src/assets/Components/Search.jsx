import React from 'react';
import "./App.css"
const Search = () => {
    return (
        <div>
            
        <form
    
            className="form-inline  my-lg-0 mr-4 "
            style={{ display: "flex" 
          , 
         paddingTop:"20px" , paddingLeft:"300px"
          }}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              id='search'
              placeholder="Search"
              aria-label="Search"
             style={{width:"400px"}}
            />
            {/* <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              style={{backgroundColor:"#3da9d8" , color:"white" , borderColor:"#3da9d8"}}
              
            >
              Search
            </button> */}
          </form>

        </div>
    );
}

export default Search;

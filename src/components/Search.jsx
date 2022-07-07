import React from "react";
import { useDispatch } from "react-redux";
import {searchTask} from '../redux/taskSlice';
function Search() {

  const dispatch = useDispatch();

  const setSearch = (e)=>{
    console.log(e)
    dispatch(
			searchTask({
				id: e
			})
		)
  }
  return (
    <>
      <div className="form-group w-100">
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Search"
          onChange={event=> setSearch(event.target.value)}
        />
      </div>
    </>
  );
}

export default Search;

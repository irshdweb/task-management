import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {deleteTask} from '../redux/taskSlice';

function Card(props) {
  const todos = useSelector((state) => {
    return state.tasks;
  });

  const dispatch = useDispatch();

  const removeTask=(id)=>{
		dispatch(
			deleteTask({
				id: id
			})
		)
	}

  return (
    <>
    {
      todos.length?
      todos.map((item) => (
        <div className="col-lg-4 col-md-6 col-sm-12"  key={item.id}>
        <div className="card-wrap">
          <div className="card-headers d-flex align-items-center justify-content-between">
            <h4>{item.name}</h4>
            <Dropdown>
              <Dropdown.Toggle>
                <BsThreeDotsVertical />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <div className="item">
                  <BsPencilFill /> Edit
                </div>
                <div className="item" onClick={()=>removeTask(item.id)} >
                  <BsFillTrashFill /> Delete
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="crd-body">
           {item.description}
          </div>
          <div className="crd-footer">{item.date}</div>
        </div>
      </div>
      ))
      :
      <div className="alert alert-warning">No Any Tasks Found Just Add New Task and Check</div>
    }

    </>
  );
}

export default Card;

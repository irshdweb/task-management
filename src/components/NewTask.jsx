import React, { useState} from "react";
import { Modal} from "react-bootstrap";
import DatePick from "./DatePick";
import uuid from 'react-uuid'
import {addTask} from '../redux/taskSlice';
import { useDispatch } from "react-redux";
import Moment from 'moment';


function NewTask(props) {
  const { show, onClose } = props;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const dateChange = (date) => {
    setStartDate(date);
  };

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formatDate = Moment(startDate).format('Do MMMM YYYY')
    let data = {
        'id': uuid(),
        'name' : name,
        'description': description,
        'date': formatDate
    }

    dispatch(
        addTask({
            task: data
        })
    );

    setName('');
    setDescription('');
    onClose();

  }


  return (
    <>
      <Modal show={show} onHide={onClose}>
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group mb-2">
              <label>Name</label>
              <input
                type="input"
                className="form-control"
                placeholder="Name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group mb-2">
              <label>Description</label>
              <input
                type="input"
                className="form-control"
                placeholder="Description"
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Due Date</label>
              <DatePick selected={startDate} changedate={dateChange} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-primary" type="submit">Add Task</button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default NewTask;

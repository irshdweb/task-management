import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

function DatePick(props) {
    const { selected, changedate } = props;
    return (
        <>
            <DatePicker selected={selected} onChange={(date) => changedate(date)} />
        </>
    );
}

export default DatePick;
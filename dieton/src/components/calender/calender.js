import "./calender.css"
import format from "date-fns/format";
import startOfWeek from "date-fns/startOfWeek";
import addDays from "date-fns/addDays";
import subDays from "date-fns/subDays";
import { useState, useEffect } from "react";


function Calender () {
  const [date, setDate] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState([]);

  useEffect(() => {
    const temp = [];
    let i = 0;
    while(i < 7) {
      temp.push(addDays(startOfWeek(date), i));
      i++
    }

    setCurrentWeek(temp);
  }, [date]);

  return(
    <div className="Calender">
      <div className="displayDate">
        <button onClick={() => setDate(subDays(date, 7))}>{"<"}</button>
        <span> {format(date, "MMMM yyyy")} </span>
        <button onClick={() => setDate(addDays(date, 7))}>{">"}</button>
      </div>
      <div className="displayDay">
        {currentWeek.map(day => (
          <div key={day}>
            <div className="dateDisplay"> {format(day, "E")} </div>
            <div className="dayDisplay"> {format(day, "dd")} </div>
          </div>
        ))}
      </div>
    </div>
  )

}

export default Calender
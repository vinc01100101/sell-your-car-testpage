import {
  FormControl,
  InputLabel,
  FormHelperText,
  Select,
  MenuItem,
  Typography,
  IconButton,
} from "@material-ui/core";

//svg icons
import { arrowright, arrowleft } from "@/svgStore/svgCall";

import { setInput } from "@/redux/modals/creators";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const appointment = () => {
  const { location, date, time } = useSelector((state) => state.modals);
  const dispatch = useDispatch();
  const [datesArray, setDatesArray] = useState([]);

  //onMount, get the array of [15days] starting tomorrow
  useEffect(() => {
    const now = Date.now();
    /**
     * there is 8.64e7 milliseconds in a day
     * increment "now" by 8.64e7 to get each day of the same time
     **/

    const dates = [...Array(15)].map(
      (x, i) => new Date(now + 8.64e7 * (i + 1))
    );

    //IIFE (Immediately Invoked Function Expression)
    const formattedUtcDates = (() => {
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      //formattedUtcDates = this..
      return dates.map((date) => ({
        month: months[date.getUTCMonth()],
        date: date.getUTCDate(),
        day: days[date.getUTCDay()],
      }));
    })();

    // console.log(formattedUtcDates);
    setDatesArray(formattedUtcDates);
  }, []);

  //controlled inputs
  const handleChange = (key, value) => {
    dispatch(setInput({ key, value }));
  };

  /**
   * SLIDER DRAG FUNCTION
   *
   * e.touches[0].clientX == getting X value on phone's touch event
   * e.clientX            == getting X value on mouse click event
   * lastX                == recording the last X value that will be deducted
   *                         on the current X
   * difference           == the current X minus the last X
   * total                == the total value to be applied on translateX
   **/

  let lastX = 0,
    difference = 0,
    total = 0;
  const cellsContainer = document.querySelector(".cellsContainer");

  const handleDragDown = (e) => {
    if (!isNaN(e.buttons) && e.buttons != 1) return;

    //the translateX value
    const translateX = window
      .getComputedStyle(cellsContainer)
      .transform.split(",")[4];

    total = parseInt(translateX);

    lastX = e.clientX || e.touches[0].clientX || 0;

    cellsContainer.style.transition = "none";
    cellsContainer.style.transform = `translateX(${total}px)`;
  };

  const handleDragMove = (e) => {
    if (!isNaN(e.buttons) && e.buttons != 1) return;
    difference = (e.clientX || e.touches[0].clientX) - lastX;
    cellsContainer.style.transition = "none";
    cellsContainer.style.transform = `translateX(${total + difference}px)`;
  };

  const handleDragUp = (e) => {
    //just accept left click on mouse leave
    if (e.type == "mouseleave" && e.buttons !== 1) return;
    total += difference;

    const containerView = cellsContainer.offsetWidth;
    // const remainder = total % containerView;

    const leftPoint = Math.floor(total / containerView);
    const rightPoint = Math.ceil(total / containerView);

    // const percentage = remainder / containerView;
    // const positivePercentage = percentage < 0 ? percentage * -1 : percentage;
    // const direction = positivePercentage > 0.5 ? "left" : "right";

    const direction = (difference < 0 && "left") || (difference > 0 && "right");
    difference = 0;

    if (direction == "left") {
      total = leftPoint * containerView;
    } else if (direction == "right") {
      total = rightPoint * containerView;
    }

    if (total > 0) {
      total = 0;
    } else if (total < containerView * 4 * -1) {
      total = containerView * 4 * -1;
    }
    cellsContainer.style.transition = "transform 1s";
    cellsContainer.style.transform = `translateX(${total}px)`;
  };

  return (
    <form>
      <FormControl required>
        <InputLabel>Location</InputLabel>
        <Select
          variant="outlined"
          value={location}
          onChange={(e) => handleChange("location", e.target.value)}
        >
          <MenuItem value="Loc 1">Loc 1</MenuItem>
          <MenuItem value="Loc 2">Loc 2</MenuItem>
          <MenuItem value="Loc 3">Loc 3</MenuItem>
        </Select>
      </FormControl>
      <div className="datesContainer">
        <div className="sub-datesContainer">
          <div
            className="cellsContainer"
            onTouchStart={handleDragDown}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragUp}
            onMouseDown={handleDragDown}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragUp}
            onMouseLeave={handleDragUp}
          >
            {datesArray.map((date, i) => (
              <div key={i}>
                <div>
                  <Typography variant="h6">{date.month}</Typography>
                  <Typography variant="h5" style={{ fontWeight: "bold" }}>
                    {date.date}
                  </Typography>
                  <Typography variant="h6">{date.day}</Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
        <IconButton className="arrowLeft">{arrowleft}</IconButton>
        <IconButton className="arrowRight">{arrowright}</IconButton>
      </div>

      <FormControl required>
        <InputLabel id="time">Time</InputLabel>
        <Select
          labelId="time"
          variant="outlined"
          value={time}
          onChange={(e) => handleChange("time", e.target.value)}
        >
          <MenuItem value="9 AM">9 AM</MenuItem>
          <MenuItem value="10 AM">10 AM</MenuItem>
          <MenuItem value="11 AM">11 AM</MenuItem>
          <MenuItem value="1 PM">1 PM</MenuItem>
          <MenuItem value="2 PM">2 PM</MenuItem>
          <MenuItem value="3 PM">3 PM</MenuItem>
          <MenuItem value="4 PM">4 PM</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
};

export default appointment;

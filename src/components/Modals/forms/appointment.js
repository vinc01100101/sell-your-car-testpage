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

//global to prevent redefine during window.onresize
let lastX, difference, cellsContainer, pointer, containerWidth, total;
const appointment = () => {
  const dispatch = useDispatch();

  const { location, date, time, datesArray } = useSelector(
    (state) => state.modals
  );

  const [selectedDate, setSelectedDate] = useState();
  useEffect(() => {
    console.log("Component Did Mount. Now setting variables...");
    //initiate variables
    (lastX = 0), (difference = 0), (pointer = 0), (total = 0);
    cellsContainer = document.querySelector(".cellsContainer");
    updateContainerWidth();

    //get the date selected when re-opening modal
    const dateOnMount = datesArray.indexOf(date);
    if (dateOnMount >= 0) {
      setSelectedDate(() => dateOnMount);

      //update the date display
      pointer = Math.ceil((dateOnMount + 1) / 3) - 1;
      console.log(pointer);
      const value = pointer * containerWidth * -1;
      updateCurrentPosition(value, true);
    }

    //mounting event listeners
    window.addEventListener("resize", updateContainerWidth);

    //cleaning up event listeners
    return () => {
      console.log("Component Will Unmount...");
      window.removeEventListener("resize", updateContainerWidth);
    };
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

  function updateContainerWidth() {
    containerWidth = cellsContainer.offsetWidth;
  }
  function updateCurrentPosition(value, isAnimating) {
    cellsContainer.style.transition = isAnimating ? "transform 0.5s" : "none";
    cellsContainer.style.transform = `translateX(${value}px)`;
  }
  function panLeft() {
    pointer--;
    //min max
    pointer = pointer < -4 ? -4 : pointer;
    //render
    const value = pointer * containerWidth;
    updateCurrentPosition(value, true);
  }
  function panRight() {
    pointer++;
    //min max
    pointer = pointer > 0 ? 0 : pointer;
    //render
    const value = pointer * containerWidth;
    updateCurrentPosition(value, true);
  }
  const handleDragDown = (e) => {
    if (!isNaN(e.buttons) && e.buttons != 1) return;

    //the translateX value
    const translateX = window
      .getComputedStyle(cellsContainer)
      .transform.split(",")[4];

    total = parseInt(translateX);

    //record last X value
    lastX = e.clientX || e.touches[0].clientX || 0;

    updateCurrentPosition(total, false);
  };

  const handleDragMove = (e) => {
    //just accept left click on "mousemove" event
    if (e.type == "mousemove" && e.buttons !== 1) return;
    difference = (e.clientX || e.touches[0].clientX) - lastX;
    const value = total + difference;
    updateCurrentPosition(value, false);
  };

  const handleDragUp = (e, index) => {
    //just accept left click on "mouseleave" event
    if (e.type == "mouseleave" && e.buttons !== 1) return;
    console.log(e.type);
    if (index != undefined) {
      if (difference === 0) {
        console.log("INDEX IS: " + index);
        setSelectedDate(() => index);
        handleChange("date", datesArray[index]);
      }
      if (e.type === "click") {
        //reset diff
        difference = 0;
        return;
      }
    }
    //initialize pointer
    pointer = Math.floor(total / containerWidth);
    //left or right
    pointer += difference < -15 ? -1 : difference > 15 ? 1 : 0;
    //min max
    pointer = pointer > 0 ? 0 : pointer < -4 ? -4 : pointer;

    if (e.type === "touchend") {
      //reset diff
      difference = 0;
    }
    //render
    const value = pointer * containerWidth;
    updateCurrentPosition(value, true);
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
            // touch events for smartphones, mouse events for pc
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
              <div key={i} onClick={(e) => handleDragUp(e, i)}>
                <div
                  style={{
                    backgroundColor: selectedDate === i && "#2B2D4D",
                    color: selectedDate === i && "white",
                  }}
                >
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
        <IconButton className="arrowLeft" onClick={panRight}>
          {arrowleft}
        </IconButton>
        <IconButton className="arrowRight" onClick={panLeft}>
          {arrowright}
        </IconButton>
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

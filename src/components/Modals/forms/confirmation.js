//material ui
import { Divider, Typography, InputBase } from "@material-ui/core";

//redux
import { useSelector } from "react-redux";

const confirmation = () => {
  //redux states
  const {
    location,
    date,
    time,
    year,
    brand,
    plateNumber,
    conductionSticker,
    transmissionType,
    fuelType,
    color,
    odometer,
    firstName,
    lastName,
    mobileNumber,
    email,
    address,
  } = useSelector((state) => state.modals);

  const appointment = {
    title: "Appointment Schedule",
    data: [
      ["Location", location],
      ["Date", date],
      ["Time", time],
    ],
  };
  const vehicle = {
    title: "Car Details",
    data: [
      ["Year", year],
      ["Brand", brand],
      ["Plate Number", plateNumber],
      ["Conduction Sticker", conductionSticker],
      ["Transmission Type", transmissionType],
      ["Fuel Type", fuelType],
      ["Color", color],
      ["Odometer", odometer],
    ],
  };
  const personal = {
    title: "Personal Details",
    data: [
      ["First Name", firstName],
      ["Last Name", lastName],
      ["Mobile Number", mobileNumber],
      ["Email", email],
      ["Address", address],
    ],
  };

  const makeSection = (info) => {
    return (
      <>
        <Typography variant="body1" className="summaryTitle">
          {info.title}
        </Typography>
        {info.data.map((data, i) => {
          //required fields
          const requiredFields = ["First Name", "Last Name", "Mobile Number"];

          //either conduction sticker or plate number required
          const either =
            conductionSticker === "" &&
            plateNumber === "" &&
            ((data[0] === "Plate Number" && "Provide either PlateNumber") ||
              (data[0] === "Conduction Sticker" && "or ConductionSticker"));

          //error styles and values
          const padding = either && "0px";
          const display = either && "flex";
          const alignItems =
            either &&
            (data[0] === "Conduction Sticker" ? "flex-start" : "flex-end");

          const value =
            either ||
            (data[1] === ""
              ? requiredFields.indexOf(data[0]) >= 0
                ? "This field is required."
                : "No details provided."
              : data[0] === "Date"
              ? `${data[1].month} ${data[1].date}, ${data[1].day}`
              : data[1]);

          const color =
            value === "No details provided."
              ? "#FFAFAF"
              : value === "This field is required." || either
              ? "#FF0000"
              : "black";

          const fontWeight = color === "#FF0000" && "bold";

          return (
            <div key={i} className="summaryContentBox">
              <Typography
                variant="body1"
                component="div"
                className="summaryLabel"
              >
                {data[0]}
              </Typography>
              <InputBase
                style={{ color, display, alignItems, fontWeight }}
                inputProps={{
                  style: {
                    padding,
                  },
                }}
                className="summaryValue"
                name={data[0]}
                value={value}
                readOnly={true}
              ></InputBase>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <form id="confirmation-form" method="post" action="/api/appointment">
      {makeSection(appointment)}
      {makeSection(vehicle)}
      {makeSection(personal)}
    </form>
  );
};

export default confirmation;

console.log("IMPORTING: confirmation.js");

//material ui
import { Typography, InputBase, Link } from "@material-ui/core";

//redux
import { useSelector } from "react-redux";

//svg's
import { viber, telephone, atsign } from "@/svgStore/svgCall";

//contact hrefs
import { VIBER, TELEPHONE, EMAIL } from "@/components/hrefLinks";

//redux
import { useDispatch } from "react-redux";
import { setModal } from "@/redux/modals/creators";

export default function confirmation({ setActiveComponent, setResult }) {
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
  const dispatch = useDispatch();

  //the key value pairs to present on the confirmation form
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
          //data[0] == key
          //data[1] == value
          //thou we could have used Object.fromEntries(data)

          //required fields
          const requiredFields = [
            "First Name",
            "Last Name",
            "Mobile Number",
            "Location",
            "Date",
            "Time",
          ];

          //either conduction sticker or plate number required
          const either =
            conductionSticker === "" &&
            plateNumber === "" &&
            ((data[0] === "Plate Number" && "Provide either PlateNumber") ||
              (data[0] === "Conduction Sticker" && "or ConductionSticker"));

          //error styles and values
          const padding = either && "0px";
          const display = either && "flex";
          const fontSize = either && "12px";

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
                style={{ color, display, alignItems, fontWeight, fontSize }}
                //the input element inside inputBase has padding, remove it if "either"
                inputProps={{
                  style: {
                    padding,
                    pointerEvents: "none",
                  },
                  name: data[0],
                  value,
                }}
                className="summaryValue"
                //this section is for details confirmation, make it readOnly
                readOnly
                //not sending any data when disabled
                // disabled
              ></InputBase>
            </div>
          );
        })}
      </>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //open loading dialog
    setResult({
      title: "Please wait...",
      description: "Your form is being sent.",
      svg: 0,
    });
    setActiveComponent(4);

    //uncomment "return" to simulate the loading dialog
    // return;

    const readyStates = [
      "0: request not initialized",
      "1: server connection established",
      "2: request received",
      "3: processing request",
      "4: request finished and response is ready",
    ];

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/appointment", true);
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.onreadystatechange = () => {
      console.log(readyStates[xhr.readyState], xhr.status);
      if (xhr.readyState !== 4) return; //GUARD CLAUSE
      // const json = JSON.parse(xhr.response);
      dispatch(setModal("getMyQuote")); //open modal to notify the user
      if (xhr.status !== 201) {
        //set error dialog
        setResult({
          title: `Error Status: ${xhr.status}`,
          description: xhr.statusText,
          svg: 2,
        });
        return;
      }

      //set success dialog
      setResult({
        title:
          "Thanks for successfully booking a Car Inspection to Sell Your Car!",
        description: (
          <>
            We will finalize details, and get in contact with you if there???s
            anything else we???d need. For any concerns, or if you need to cancel,
            contact us at
            <span className="contact">
              {telephone}
              <Link href={TELEPHONE}>{TELEPHONE.split(":")[1]}</Link>
            </span>
            <span className="contact">
              {viber}
              <Link href={VIBER}>{VIBER.split(":")[1]}</Link>
            </span>
            <span className="contact">
              {atsign}
              <Link href={EMAIL}>{EMAIL.split(":")[1]}</Link>
            </span>
          </>
        ),
        svg: 1,
      });
    };

    //get the form values and stringify it
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);
    const stringified = JSON.stringify(formObject);
    xhr.send(stringified);

    console.log("sent");
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="confirmation-form"
      method="post"
      action="/api/appointment"
    >
      {makeSection(appointment)}
      {makeSection(vehicle)}
      {makeSection(personal)}
      <input type="submit" id="submitterButton" hidden />
    </form>
  );
}

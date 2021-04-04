console.log("IMPORTING: personalInfo.js");

//redux
import { useSelector } from "react-redux";

//input component makers
import makeInputComponents from "./makeInputComponents";

export default function personalInfo() {
  //redux states
  const { firstName, lastName, mobileNumber, email, address } = useSelector(
    (state) => state.modals
  );

  //makeInputComponents returns input component makers
  const { makeTextField } = makeInputComponents();

  return (
    <form>
      {makeTextField("First Name", firstName, "firstName")}
      {makeTextField("Last Name", lastName, "lastName")}
      {makeTextField("Mobile Number", mobileNumber, "mobileNumber")}
      {makeTextField("Email", email, "email")}
      {makeTextField("Address", address, "address")}
    </form>
  );
}

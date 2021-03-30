console.log("IMPORTING: makeInputsComponent.js");

//material ui
import {
  FormControl,
  InputLabel,
  InputAdornment,
  Select,
  MenuItem,
  TextField,
} from "@material-ui/core";

//redux
import { setInput } from "@/redux/modals/creators";
import { useDispatch } from "react-redux";

export default function makeInputComponents() {
  const dispatch = useDispatch();

  //input formats (string? number? email? etc..)
  const numberReg = /^\d*$/;
  const stringReg = /^[a-z]*((?<=\S)\s{0,1}[a-z]*)*$/i; //multiple words, space separated
  const emailReg = /^(\w+)?@?([a-z]*)?\.?([a-z]{0,3})?$/i;
  const defaultFormatReg = /.*/;

  //hashmap [inputFormat, characterLength]
  const regs = {
    plateNumber: [defaultFormatReg, 14],
    conductionSticker: [defaultFormatReg, 14],
    odometer: [numberReg, 7],
    firstName: [stringReg, 20],
    lastName: [stringReg, 20],
    mobileNumber: [numberReg, 14],
    email: [emailReg, 40],
    address: [defaultFormatReg, 150],
  };

  //controlled inputs
  const handleChange = (key, value) => {
    //remove odometer comma's
    const testValue = key === "odometer" ? value.replace(/,/g, "") : value;

    const keyName = regs[key];
    const regFormat = keyName ? keyName[0] : defaultFormatReg;
    const regLength = RegExp(`^.{0,${keyName ? keyName[1] : 30}}$`);

    let returnValue = testValue;

    const testAndDispatch = () => {
      //if format and length is correct, allow the input
      regFormat.test(testValue) &&
        regLength.test(testValue) &&
        dispatch(setInput({ key, value: returnValue }));
    };

    //guard clause
    if (testValue == "") return testAndDispatch();

    //bring back odometer's comma delimiter
    if (key === "odometer") returnValue = parseInt(testValue).toLocaleString();

    //capitalize first letter of each word (firstName, lastName)
    //NOTE: this lags on android phone!
    // if (regFormat === stringReg)
    //   returnValue = value
    //     .split(" ")
    //     .map((x) => x && x[0].toUpperCase() + x.slice(1).toLowerCase())
    //     .join(" ");

    //dispatch
    return testAndDispatch();
  };

  //component makers
  const makeSelect = (label, value, id, data) => {
    return (
      <FormControl variant="outlined">
        <InputLabel id={`label-${id}`}>{label}</InputLabel>
        <Select
          label={label}
          value={value}
          id={`input-${id}`}
          labelId={`label-${id}`}
          onChange={(e) => handleChange(id, e.target.value)}
        >
          {data.map((x, i) => (
            <MenuItem key={i} value={x}>
              {x == "" ? "NONE" : x}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  const makeTextField = (label, value, id) => {
    return (
      <TextField
        label={label}
        value={value}
        id={`input-${id}`}
        InputProps={{
          endAdornment: id === "odometer" && (
            <InputAdornment>miles</InputAdornment>
          ),
        }}
        variant="outlined"
        onChange={(e) => handleChange(id, e.target.value)}
      />
    );
  };

  return { makeSelect, makeTextField };
}

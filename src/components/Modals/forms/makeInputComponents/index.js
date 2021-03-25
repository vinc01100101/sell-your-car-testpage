//material ui
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@material-ui/core";

//redux
import { setInput } from "@/redux/modals/creators";
import { useDispatch } from "react-redux";

export default function makeInputComponents() {
  const dispatch = useDispatch();

  //controlled inputs
  const handleChange = (key, value) => {
    dispatch(setInput({ key, value }));
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
        type={id === "mobileNumber" ? "number" : "text"}
        id={`input-${value}`}
        variant="outlined"
        onChange={(e) => handleChange(id, e.target.value)}
      />
    );
  };

  return { makeSelect, makeTextField };
}

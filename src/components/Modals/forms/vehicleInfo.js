import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@material-ui/core";

//redux
import { setInput } from "@/redux/modals/creators";
import { useSelector, useDispatch } from "react-redux";

//fields data
import { FIELD_YEAR } from "./data/vehicleInfoData";

const vehicleInfo = () => {
  const dispatch = useDispatch();

  //redux states
  const {
    year,
    brand,
    plateNumber,
    conductionSticker,
    transmissionType,
    fuelType,
    color,
    odometer,
  } = useSelector((state) => state.modals);

  //controlled inputs
  const handleChange = (key, value) => {
    dispatch(setInput({ key, value }));
  };

  return (
    <form>
      <FormControl required variant="outlined">
        <InputLabel id="input-year">Year</InputLabel>
        <Select
          labelId="input-year"
          label="Year"
          value={year}
          onChange={(e) => handleChange("year", e.target.value)}
        >
          {FIELD_YEAR.map((x, i) => (
            <MenuItem key={i} value={x}>
              {x}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl required variant="outlined">
        <InputLabel id="input-brand">Brand</InputLabel>
        <Select
          labelId="input-brand"
          label="Brand"
          value={brand}
          onChange={(e) => handleChange("brand", e.target.value)}
        >
          <MenuItem value="Brand 1">Brand 1</MenuItem>
          <MenuItem value="Brand 2">Brand 2</MenuItem>
          <MenuItem value="Brand 3">Brand 3</MenuItem>
          <MenuItem value="Brand 4">Brand 4</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Plate Number"
        variant="outlined"
        required
        onChange={(e) => handleChange("plateNumber", e.target.value)}
      />
    </form>
  );
};

export default vehicleInfo;

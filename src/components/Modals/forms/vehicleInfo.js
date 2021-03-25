//material ui
import { Typography } from "@material-ui/core";

//redux
import { useSelector } from "react-redux";

//fields data
import {
  FIELD_BRAND,
  FIELD_YEAR,
  FIELD_TRANSMISSION_TYPE,
  FIELD_FUEL_TYPE,
  FIELD_COLOR,
} from "./data/vehicleInfoData";

//input component makers
import makeInputComponents from "./makeInputComponents";

const vehicleInfo = () => {
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

  //makeInputComponents returns input component makers
  const { makeSelect, makeTextField } = makeInputComponents();

  return (
    <form>
      {makeSelect("Year", year, "year", FIELD_YEAR)}
      {makeSelect("Brand", brand, "brand", FIELD_BRAND)}
      {makeTextField("Plate Number", plateNumber, "plateNumber")}

      <Typography variant="h6" component="p">
        Or
      </Typography>

      {makeTextField(
        "Conduction Sticker",
        conductionSticker,
        "conductionSticker"
      )}
      {makeSelect(
        "Transmission Type",
        transmissionType,
        "transmissionType",
        FIELD_TRANSMISSION_TYPE
      )}
      {makeSelect("Fuel Type", fuelType, "fuelType", FIELD_FUEL_TYPE)}
      {makeSelect("Color", color, "color", FIELD_COLOR)}
      {makeTextField("Odometer", odometer, "odometer")}
    </form>
  );
};

export default vehicleInfo;

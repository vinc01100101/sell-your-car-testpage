import { Typography } from "@material-ui/core";
import useStyles from "./styles";

const testimonials = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.imgContainer}>
        <img
          className={classes.img}
          src="images/testimonials/testimonial0.png"
        />
      </div>
      <Typography variant="h5">user testimonial</Typography>
    </div>
  );
};

export default { title: "Customer Testimonials", content: testimonials };

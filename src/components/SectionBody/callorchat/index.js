import { viber, telephone, atsign } from "@/svgStore/svgCall";
import { Typography, Paper } from "@material-ui/core";

//sibling files
import useStyles from "./styles";

const callorchat = () => {
  const classes = useStyles();

  const contacts = {
    "+639 2788 76400": viber,
    "(+632) 7905 7940": telephone,
    "contact@automart.ph": atsign,
  };
  const makeContacts = () => {
    return Object.entries(contacts).map((contact, i) => {
      return (
        <div className={classes.contact} key={i}>
          <div className={classes.contactLogo}>{contact[1]}</div>
          <Typography className={classes.contactText} variant="h6">
            {contact[0]}
          </Typography>
        </div>
      );
    });
  };

  return <div className={classes.root}>{makeContacts()}</div>;
};

export default { title: "You can call or chat with us!", content: callorchat };

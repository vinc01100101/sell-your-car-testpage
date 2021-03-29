//svg pieces
import { viber, telephone, atsign } from "@/svgStore/svgCall";
//href strings
import { VIBER, TELEPHONE, EMAIL } from "@/components/hrefLinks";

import { Link } from "@material-ui/core";

//sibling files
import useStyles from "./styles";

const callorchat = () => {
  const classes = useStyles();

  const contacts = [
    [VIBER, viber],
    [TELEPHONE, telephone],
    [EMAIL, atsign],
  ];

  const makeContacts = () => {
    return contacts.map((contact, i) => {
      return (
        <div className={classes.contact} key={i}>
          <div className={classes.contactLogo}>{contact[1]}</div>
          <Link href={contact[0]} className={classes.contactText} variant="h6">
            {contact[0].split(":")[1]}
          </Link>
        </div>
      );
    });
  };

  return <div className={classes.root}>{makeContacts()}</div>;
};

export default { title: "You can call or chat with us!", content: callorchat };

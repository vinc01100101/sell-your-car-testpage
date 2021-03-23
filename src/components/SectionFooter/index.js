import { IconButton, Link } from "@material-ui/core";

//svg icon pieces
import {
  facebook,
  instagram,
  youtube,
  linkedin,
  sellmycar,
} from "@/svgStore/svgCall";

//sibling files
import useStyles from "./styles";

const sectionFooter = () => {
  const classes = useStyles();

  const textLinks = {
    "https://automart.ph/login": "Login or Signup",
    "https://automart.ph/blog/frequently-asked-questions": "FAQs",
    "https://automart.ph/page/terms-and-conditions": "Terms and Condition",
    "https://automart.ph/page/privacy-policy": "Privacy Policy",
    "https://automart.ph/contact-us": "Contact Us",
  };

  const logoLinks = {
    "https://www.facebook.com/automartph/": facebook,
    "https://www.instagram.com/automartph/": instagram,
    "https://www.youtube.com/channel/UCh-uSYHQZPeNMFkIZzBBbDw": youtube,
    "https://www.linkedin.com/company/automart-ph/": linkedin,
  };

  const makeLinks = (links) => {
    //convert object to array
    const entries = Object.entries(links);
    //get the type
    const type = typeof entries[0][1];
    //divide the textLinks into two
    const group1 = [];
    const group2 = [];

    entries.map((entry, i) => {
      const group = type == "string" && i > 2 ? group2 : group1;
      group.push(
        <li key={i}>
          <Link href={entry[0]} target="_blank" key={i} variant="body1">
            {type == "string" ? entry[1] : <IconButton>{entry[1]}</IconButton>}
          </Link>
        </li>
      );
    });

    return (
      <>
        <ul className={type === "object" ? classes.social : null}>{group1}</ul>
        {group2.length > 0 && <ul>{group2}</ul>}
      </>
    );
  };
  return (
    <div className={classes.root}>
      <div className={classes.semiRoot}>
        <div className={classes.flexibleContainer}>
          <div className={classes.marginBottom}>{sellmycar}</div>
          {makeLinks(textLinks)}
          <div className={`${classes.marginTop} ${classes.marginBottom}`}>
            {makeLinks(logoLinks)}
          </div>
        </div>
        <ul className={classes.copyright}>
          <li>© Copyright 2020, Automart.PH</li>
          <li>All rights reserved</li>
        </ul>
      </div>
    </div>
  );
};

export default sectionFooter;

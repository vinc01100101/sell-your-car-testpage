/**
 * the "Sell My Car FAQ's" section of the body
 */

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { useState } from "react";

//sibling files
import data from "./data";
import useStyles from "./styles";

const faqs = () => {
  const classes = useStyles();
  //for controlled accordion
  const [expanded, setExpanded] = useState(() => false);
  const handleChange = (id) => {
    setExpanded((currState) => {
      return currState === id ? false : id;
    });
  };

  const makeAccordions = () => {
    return data.map((accordion, i) => {
      return (
        <Accordion
          key={i}
          className={classes.accordion}
          expanded={expanded === `acco${i}`}
          onChange={() => handleChange(`acco${i}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls={`acco${i}-content`}
            id={`acco${i}-header`}
            className={
              expanded === `acco${i}`
                ? classes.activeAccordion
                : classes.summary
            }
          >
            <Typography className={classes.title} variant="h6">
              {accordion.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.content}>
            {(function () {
              /**
               * note that this is an IIFE (Immediately Invoked Function Expression)
               * doing this to separate content into two groups that divides when
               * screen size is medium and up: [theme.breakpoints.up("md")]
               */

              const group1 = [];
              const group2 = [];
              let switchGroup = false;
              accordion.content.map((qna, i) => {
                //set switchGroup to true only once when encountered: {qna.break = true}
                switchGroup = switchGroup || qna.break;
                //if switchGroup is true, start pushing to group2, else keep pushing to group1
                const group = switchGroup ? group2 : group1;

                group.push(
                  <div key={i} className={classes.eachQna}>
                    <Typography variant="body1" className={classes.q}>
                      {qna.q}
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.a}
                      component="p"
                    >
                      {qna.a}
                    </Typography>
                  </div>
                );
              });
              //and then return the groups
              return (
                <>
                  <div>{group1}</div>
                  <div>{group2}</div>
                </>
              );
            })()}
          </AccordionDetails>
        </Accordion>
      );
    });
  };
  return (
    <>
      <Typography variant="body1" className={classes.description}>
        With the Sell My Car service, Automart.Ph will do the hard work to sell
        your car while you wait. No more looking for buyers, negotiating with
        joy bidders, and setting up countless meetups–Sell My Car is designed to
        make the process as hassle-free as possible.
      </Typography>
      {makeAccordions()}
    </>
  );
};

export default { title: "Sell My Car FAQ’s", content: faqs };

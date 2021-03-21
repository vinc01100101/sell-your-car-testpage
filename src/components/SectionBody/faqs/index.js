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
  const [expanded, setExpanded] = useState(false);
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
               * we do this to separate content into two groups that divides when
               * when screen is medium sized and up: [theme.breakpoints.up("md")]
               */

              const group1 = [];
              const group2 = [];
              let switchGroup = false;
              accordion.content.map((qna, i) => {
                //set switchGroup to true only once when encountered: {qna.break = true}
                switchGroup = switchGroup || qna.break;
                //if switchGroup is true, push to group2, else push to group1
                let group = switchGroup ? group2 : group1;

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
  return <>{makeAccordions()}</>;
};

export default { title: "Sell My Car FAQ’s", content: faqs };

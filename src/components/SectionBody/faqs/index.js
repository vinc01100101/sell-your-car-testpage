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
            {accordion.content.map((qna, i) => {
              return (
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
            })}
          </AccordionDetails>
        </Accordion>
      );
    });
  };
  return <>{makeAccordions()}</>;
};

export default { title: "Sell My Car FAQ’s", content: faqs };

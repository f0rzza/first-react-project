import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { ReactNode } from 'react';

type Props = {
  id: number;
  title: string;
  children: ReactNode;
  expanded: number | false;
  onChange: (event: React.SyntheticEvent, isExpanded: boolean) => void;
};

export function CustomAccordion({ id, title, children, expanded = false, onChange }: Props) {
  return (
    <Accordion expanded={expanded === id} onChange={onChange}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${id}-content`}
        id={`panel${id}-header`}
      >
        <Typography component="span">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}

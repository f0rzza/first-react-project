import { CustomAccordion } from './CustomAccordion';
import { CustomAccordionType } from '../../types/common';
import React from 'react';

type Props = { data: Array<CustomAccordionType> };

export function CustomAccordionList({ data }: Props) {
  // If data is empty, hide the list.
  if (!data.length) {
    return;
  }

  // Controlled Accordion (Material UI) - By default, display the first accordion.
  const [expanded, setExpanded] = React.useState<number | false>(0);

  const handleChange = (id: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? id : false);
  };

  return (
    <div>
      {data.map((item, index) => (
        <CustomAccordion
          id={index}
          key={index}
          title={item.title}
          expanded={expanded} // Pass the state value. (false or the current expanded accordion ID)
          onChange={handleChange(index)} // Pass the current index. (accordion ID)
        >
          {item.content()}
        </CustomAccordion>
      ))}
    </div>
  );
}

import { CustomAccordion } from './CustomAccordion';
import { CustomAccordionType } from '../../types/common';

type Props = { data: Array<CustomAccordionType> };

export function CustomAccordionList({ data }: Props) {
  // If data is empty, hide the list.
  if (!data.length) {
    return;
  }

  return (
    <div>
      {data.map((item, index) => (
        <CustomAccordion id={index} key={index} title={item.title} defaultExpanded={index === 0}>
          {item.content()}
        </CustomAccordion>
      ))}
    </div>
  );
}

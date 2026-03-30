import { CustomAccordionType } from '../types/common';

export const demoAccordions: Array<CustomAccordionType> = [
  {
    title: 'Featured demos',
    items: [
      {
        title: 'Authentication',
        path: 'demos/auth',
      },
      {
        title: 'List of Posts with filters and pagination',
        path: 'posts',
      },
    ],
  },
  {
    title: 'Characters',
    items: [
      {
        title: 'List of SW characters',
        path: 'demos/Characters',
      },
      {
        title: 'List of SW characters with pagination',
        path: 'demos/Characters/list-with-pagination',
      },
      {
        title: 'Random SW character',
        path: 'demos/Characters/random',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    items: [
      {
        title: 'List of Alert components',
        path: 'demos/misc',
      },
      {
        title: 'Timers',
        path: 'demos/misc/timers',
      },
      {
        title: 'One counter, many buttons',
        path: 'demos/misc/one-counter-many-buttons',
      },
    ],
  },
  {
    title: 'Custom content',
    content: (
      <>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt.
        </p>
        <p>
          <strong>Neque porro quisquam est,</strong> qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
          dolore magnam aliquam quaerat voluptatem.
        </p>
        <p>
          <strong>Ut enim ad minima veniam,</strong> quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
          reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
      </>
    ),
  },
];

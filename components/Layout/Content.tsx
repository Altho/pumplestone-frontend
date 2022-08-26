import { ReactNode } from 'react';
import { createStyles } from '@mantine/core';

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const useStyles = createStyles(() => ({
  content: {
    display: 'grid',
    gridTemplateColumns: '25% 1fr',
    gridTemplateRows: '100px 1fr',
  },
}));

export default function Content({ children }: Props) {
  const { classes } = useStyles();

  return (
    <div className={classes.content}>{children}</div>
  );
}

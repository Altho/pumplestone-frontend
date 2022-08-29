import { ReactNode } from 'react';
import { createStyles } from '@mantine/core';

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const useStyles = createStyles(() => ({
  content: {
    gridArea: '2 / 2 / 3 / 3',
    padding: '20px',
    maxHeight: '100vh',
    overflowY: 'scroll',
    // display: 'flex',
    // justifyContent: 'center',
  },
}));

export default function Content({ children }: Props) {
  const { classes } = useStyles();

  return (
    <div className={classes.content}>{children}</div>
  );
}

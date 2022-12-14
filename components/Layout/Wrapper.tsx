import { ReactNode } from 'react';
import { createStyles } from '@mantine/core';

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const useStyles = createStyles(() => ({
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '25% 1fr',
    gridTemplateRows: '100px 1fr',
  },
}));

export default function Wrapper({ children }: Props) {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>{children}</div>
  );
}

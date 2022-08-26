import { ReactNode } from 'react';
import { createStyles } from '@mantine/core';

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const useStyles = createStyles(() => ({
  wrapper: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default function Wrapper({ children }: Props) {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>{children}</div>
  );
}

import { createStyles, Image } from '@mantine/core';

const useStyles = createStyles(() => ({
  main: {
    height: '60px',
    position: 'absolute',
    // left:'25%',
    top: 0,
    width: '100%',
    gridArea: '1 / 2 / 2 / 3',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
    padding: '5px',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function Header() {
  const { classes } = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.imageContainer}>
        <Image
          src="../images/logo.png"
          height={50}
          width={300}
        />
      </div>
    </div>
  );
}

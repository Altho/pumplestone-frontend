import { createStyles, Image, useMantineTheme } from '@mantine/core';


// const { colorScheme, toggleColorScheme } = useMantineColorScheme();
const useStyles = createStyles(() => ({
  main: {
    height: '60px',
    position: 'absolute',
    // left:'25%',
    top: 0,
    width: '100%',
    gridArea: '1 / 2 / 2 / 3',
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
    padding: '5px',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function Header() {
  const theme = useMantineTheme();

  const { classes } = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.imageContainer}>
        <Image
          src={theme.colorScheme === 'dark' ? '../images/logoblanc.png' : '../images/logonoir.png'}
          height={50}
          width={300}
        />
      </div>
    </div>
  );
}

import { createStyles, Table } from "@mantine/core";
import { format } from 'date-fns';
import { ArticleType } from '../../types/article.type';
import StatusBadge from "./StatusBadge";

const useStyles = createStyles(() => ({
  line: {
    cursor: 'pointer',
  },
}));

export default function BlogTable({article}) {

  const ths = (
    <tr>
      <th>id</th>
      <th>Titre</th>
      <th>Description</th>
      <th>Etat</th>
      <th>Création</th>
    </tr>
  );

  const rows = article.map((element: ArticleType) => {
    const { classes } = useStyles();
    const date = format(new Date(element.createdAt), 'MM/dd/yyyy');

    return (

    <tr key={element.id} className={classes.line}>
      <td>{element.id}</td>
      <td>{element.title}</td>
      <td>{element.description}</td>
      <td><StatusBadge status={element.published ? 'published' : 'brouillon'} /></td>
      <td>{date}</td>

    </tr>

    );
  });

  return (
    <Table captionSide="bottom" striped highlightOnHover>
      <caption>Derniers articles :</caption>
      <thead>{ths}</thead>
      <tbody>{rows}</tbody>
      <tfoot>{ths}</tfoot>
    </Table>
  );
}

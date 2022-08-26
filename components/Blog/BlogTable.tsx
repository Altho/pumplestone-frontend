import { Table } from '@mantine/core';
import { ArticleType } from '../../types/article.type';

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

  const rows = article.map((element: ArticleType) => (
    <tr key={element.id}>
      <td>{element.id}</td>
      <td>{`${element.title.slice(0, 20)}...`}</td>
      <td>{`${element.description.slice(0, 20)}...`}</td>
      <td>{element.published ? ('Publié') : ('Brouillon')}</td>
    </tr>
  ));

  return (
    <Table captionSide="bottom" striped highlightOnHover>
      <caption>Derniers articles :</caption>
      <thead>{ths}</thead>
      <tbody>{rows}</tbody>
      <tfoot>{ths}</tfoot>
    </Table>
  );
}

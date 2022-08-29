import { Badge } from '@mantine/core';

interface statusType {
  status: string,
}

export default function StatusBadge({ status }: statusType) {
  if (status === 'published') {
    return (
      <Badge color="green">Publié</Badge>
    );
  }
    return (
      <Badge color="blue">Brouillon</Badge>
    );
}

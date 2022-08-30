import { QueryClient, useQuery, dehydrate } from '@tanstack/react-query';
import { Menu } from '../../components/LeftMenu/Menu';
import Wrapper from '../../components/Layout/Wrapper';
import Header from '../../components/Layout/Header';
import Content from '../../components/Layout/Content';
import BlogTable from '../../components/Blog/BlogTable';
import { fetchAllPosts } from '../../libs/fetchBlogPosts';
import { Loader } from '@mantine/core';

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['posts'], fetchAllPosts);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

// eslint-disable-next-line max-len
export default function HomePage() {
  const { data, isLoading, isError, error } = useQuery(['posts'], fetchAllPosts);

  const showTables = () => {
    if (isLoading) {
      return (
      <Loader variant="bars" />
      );
    }
    if (isError) {
      return <div>Une erreur s&#3;est produite {error.toString()}</div>;
    }
    return <BlogTable article={data} />;
  };
  console.log('data', data);
  return (
    <>
      <Wrapper>
        <Header />
        <Menu />
        <Content>
          <div>hello</div>
          {/* eslint-disable-next-line max-len */}
          {showTables()}
        </Content>
      </Wrapper>
    </>
  );
}

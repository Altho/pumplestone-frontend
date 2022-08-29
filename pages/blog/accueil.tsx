import { InferGetServerSidePropsType } from 'next';
import { QueryClient, useQuery, dehydrate } from "react-query";
import { Menu } from '../../components/LeftMenu/Menu';
import Wrapper from '../../components/Layout/Wrapper';
import Header from '../../components/Layout/Header';
import Content from '../../components/Layout/Content';
import BlogTable from '../../components/Blog/BlogTable';
import { fetchAllPosts } from '../../libs/fetchBlogPosts';

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
  const { data } = useQuery(['posts'], fetchAllPosts);
  return (
    <>
      <Wrapper>
        <Header />
        <Menu />
        <Content>
          <div>hello</div>
           <BlogTable article={data} />
        </Content>
      </Wrapper>
    </>
  );
}

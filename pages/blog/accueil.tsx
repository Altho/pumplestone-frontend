import { InferGetServerSidePropsType } from 'next';
import { Menu } from '../../components/LeftMenu/Menu';
import Wrapper from '../../components/Layout/Wrapper';
import Header from '../../components/Layout/Header';
import Content from '../../components/Layout/Content';
import { ArticleType } from '../../types/article.type';
import BlogTable from "../../components/Blog/BlogTable";

export const getServerSideProps = async () => {
  const article = await fetch('http://localhost:3001/articles');
  const articles = await article.json();
  console.log(articles);
  return { props: { articles } };
};

// eslint-disable-next-line max-len
export default function HomePage({ articles }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Wrapper>
        <Header />
        <Menu />
        <Content>
          <div>hello</div>
           <BlogTable article={articles} />
        </Content>
      </Wrapper>
    </>
  );
}

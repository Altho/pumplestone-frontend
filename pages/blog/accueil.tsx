import { InferGetServerSidePropsType } from 'next';
import { Menu } from '../../components/LeftMenu/Menu';
import Wrapper from "../../components/Layout/Wrapper";
import Header from "../../components/Layout/Header";
import Content from "../../components/Layout/Content";

interface ArticleType {
  id: number,
  title: string,
  description: string,
  body: string,
  pubished: boolean,
  createdAt: Date,
  updatedAt: Date,
}

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
           eslint-disable-next-line max-len
          {articles.map((article: ArticleType) => (
              <div className="test">{article.title}</div>
            ))}
        </Content>
      </Wrapper>
    </>
  );
}

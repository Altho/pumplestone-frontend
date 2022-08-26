import { InferGetServerSidePropsType } from 'next';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Menu } from '../components/LeftMenu/Menu';
import Wrapper from "../components/Layout/Wrapper";
import Header from "../components/Layout/Header";

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
      <div>hello</div>
      {/* eslint-disable-next-line max-len */}
      {articles.map((article: ArticleType) => (
          <div className="test">{article.title}</div>
        ))}
      <ColorSchemeToggle />
      </Wrapper>
    </>
  );
}

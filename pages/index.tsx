import { InferGetServerSidePropsType } from 'next';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Menu } from '../components/LeftMenu/Menu';
import Wrapper from "../components/Layout/Wrapper";
import Header from "../components/Layout/Header";
import Content from "../components/Layout/Content";
import { useQuery } from "react-query";
import { fetchAllPosts } from "../libs/fetchBlogPosts";

interface ArticleType {
  id: number,
  title: string,
  description: string,
  body: string,
  pubished: boolean,
  createdAt: Date,
  updatedAt: Date,
}



// eslint-disable-next-line max-len
export default function HomePage() {
  return (
    <>
      <Wrapper>
        <Header />
        <Menu />
        <Content>
      <div>hello</div>
        </Content>
      </Wrapper>
    </>
  );
}

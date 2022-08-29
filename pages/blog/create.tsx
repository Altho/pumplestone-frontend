import { InferGetServerSidePropsType } from "next";
import Wrapper from "../../components/Layout/Wrapper";
import Header from "../../components/Layout/Header";
import { Menu } from "../../components/LeftMenu/Menu";
import Content from "../../components/Layout/Content";
import { getServerSideProps } from "../index";
import TextEditor from "../../components/TextEditor/TextEditor";

export default function CreatePost() {
  return (
    <>
      <Wrapper>
        <Header />
        <Menu />
        <Content>
          <TextEditor />
        </Content>
      </Wrapper>
    </>
  );
}

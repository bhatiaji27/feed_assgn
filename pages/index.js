import { useSelector } from "react-redux";
import { ListView } from "../components/ListView";
import { InfiniteScroll } from "@/components/InfiniteScroll";
import Layout from "@/components/Layout";

export default function Home() {
  const { feedPhotos } = useSelector((state) => state.photo);

  InfiniteScroll();

  return (
    <Layout>
      <ListView images={feedPhotos} type="Feed_images" />
    </Layout>
  );
}

import { getARandomPhoto } from "@/redux/actions/photoActions";
import { addPhotoToState } from "@/redux/slices/photoSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const InfiniteScroll = () => {
  const [page, setPage] = useState(0);
  const {feedPhotos} = useSelector(state => state.photo)
  const dispatch = useDispatch();

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((page) => page + 1);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  useEffect(() => {
    const fetchAPhoto = async () => {
      if (page < 10) {
        await dispatch(getARandomPhoto({ page: page })).unwrap();
      } else {
        dispatch(addPhotoToState(feedPhotos[page % 10]));
      }
    };
    fetchAPhoto();
  }, [page]);
};

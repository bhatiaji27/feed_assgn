import { getARandomPhoto } from "@/redux/actions/photoActions";
import { increasePageCount } from "@/redux/slices/pageSlice";
import { addPhotoToState } from "@/redux/slices/photoSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const InfiniteScroll = () => {
  const { page } = useSelector((state) => state.page);
  const { feedPhotos } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        dispatch(increasePageCount());
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  useEffect(() => {
    const fetchAPhoto = async () => {
      if (feedPhotos.length < 10) {
        await dispatch(getARandomPhoto({ page: page })).unwrap();
      } else {
        dispatch(addPhotoToState(feedPhotos[Math.floor(Math.random() * 10)]));
      }
    };
    fetchAPhoto();
  }, [page]);
};
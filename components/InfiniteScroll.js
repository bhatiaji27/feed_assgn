import { getARandomPhoto } from "@/redux/actions/photoActions";
import { increasePageCount, updatePageChange } from "@/redux/slices/pageSlice";
import { addPhotoToState } from "@/redux/slices/photoSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";

export const InfiniteScroll = () => {
  const { page, pageChange } = useSelector((state) => state.page);
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
  };

  console.log(page, pageChange)

  useEffect(() => {
    const getAPhoto = async () => {
      if (page !== undefined && pageChange) {
        if (feedPhotos.length < 10) {
          await dispatch(getARandomPhoto({ page: page })).unwrap();
        } else {
          dispatch(addPhotoToState(feedPhotos[Math.floor(Math.random() * 10)]));
        }
      }
      dispatch(updatePageChange(false));
    }
    getAPhoto();
  }, [pageChange]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

};

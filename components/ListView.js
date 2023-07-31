import Link from "next/link";
import UserCard from "./UserCard";
import ImageCard from "./ImageCard";
import { useSelector } from "react-redux";
import Styles from "../styles/styles.module.css";
import ImageDetailsCard from "./ImageDetailsCard";

import { ColorRing } from "react-loader-spinner";

export const ListView = ({ images, type }) => {
  const { error, isLoadingPhotos } = useSelector((state) => state.photo);

  console.log(error);

  return (
    <div className={Styles.cont}>
      {images?.map((photo) => {
        return (
          <>
            {type === "Feed_images" ? (
              <UserCard
                userName={photo?.user?.username}
                profileImage={photo?.user?.profile_image?.small}
                photoDetails={photo}
              />
            ) : (
              <></>
            )}
            <ImageCard
              image={
                type === "Feed_images" ? photo?.urls?.small : photo?.urls?.small
              }
              sx={{ height: window.innerHeight < 1400 ? `${window.innerHeight}px` : "40rem", width: "30rem" }}
            />

            <ImageDetailsCard details={photo} type={type} />
            <hr className={Styles.instagram_divider} />
          </>
        );
      })}
      {isLoadingPhotos ? (
        <div className={Styles.loader}>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
          <h3>{images?.length ? "Loading more feed, just a sec!" : "Loading latest feed in an eye-blink!"}</h3>
        </div>
      ) : error?.message ? (
        <div className={Styles.error}>
          <h1>Oops, Error {error.response.status}</h1>
          <h2>What went wrong:- {error.message}</h2>
        </div>
      ) : null}
    </div>
  );
};

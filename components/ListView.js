import Link from "next/link";
import UserCard from "./UserCard";
import ImageCard from "./ImageCard";
import { useSelector } from "react-redux";
import Styles from "../styles/styles.module.css";
import ImageDetailsCard from "./ImageDetailsCard";

export const ListView = ({ images, type }) => {
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
              sx={{ height: "40rem", width: "30rem" }}
            />

            <ImageDetailsCard details={photo} type={type}/>
            <hr className={Styles.instagram_divider} />
          </>
        );
      })}
    </div>
  );
};

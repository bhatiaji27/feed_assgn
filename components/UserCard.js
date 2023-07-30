import Link from "next/link";
import Styles from "../styles/UserCard.module.css";
import { useEffect } from "react";
import { timeSincePost } from "@/helpers/TimeSincePost";

const UserCard = ({ userName, profileImage, photoDetails }) => {

  const timeSincePostValue = timeSincePost(photoDetails?.created_at);

  console.log(photoDetails)

  return (
    <Link href={`/users/${userName}`} className={Styles.link_element}>
      <div className={Styles.container}>
        <div className={Styles.image_container}>
          <img src={profileImage} alt="xyz" />
        </div>
        <div className={Styles.description_container}>
          <h3>{userName} • <span> {timeSincePostValue}</span></h3>
          <h5>{photoDetails?.location?.name !== null ? photoDetails?.location?.name : photoDetails?.location?.country}</h5>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;

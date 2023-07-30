import React from "react";
import Styles from "../styles/ProfileSection.module.css";

const ProfileSection = ({ details }) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.image_container}>
        <img src={details?.profile_image?.medium} alt="pic" />
      </div>
      <div className={Styles.details_container}>
        <div className={Styles.userDetails_container}>
          <div className={Styles.name}>
            <p>{details?.username}</p>
          </div>
          <div className={Styles.options}>
            <button className={Styles.option_button}>Follow</button>
            <button disabled={!details?.allow_messages} className={Styles.option_button}>Message</button>
            <button className={Styles.option_button}>Report</button>
          </div>
        </div>
        <div className={Styles.account_details}>
          <p><span>{details?.photos?.length}</span> Posts</p>
          <p><span>{details?.followers_count}</span> Followers</p>
          <p><span>{details?.following_count}</span> Following</p>
        </div>
        <div className={Styles.name_container}> 
          <h3>{details?.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;

import Link from "next/link";
import Styles from "../styles/ImageDetailsCard.module.css";

const ImageDetailsCard = ({ details, type }) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.info_container}>
        <div className={Styles.post_options_container}>
          <div className={Styles.post_btn_options}>
            <p>
              <i class="fa-regular fa-heart fa-lg"></i>
            </p>
            <p>
              <i class="fa-regular fa-comment fa-lg"></i>
            </p>
            <p>
              <i class="fa-regular fa-share-from-square fa-lg"></i>
            </p>
          </div>
          <div className={Styles.share_btn_option}>
            <p>
              <i class="fa-regular fa-bookmark fa-lg"></i>
            </p>
          </div>
        </div>
        {details?.likes ? (
          <div className={Styles.likes_display}>
            <p>
              <i class="fa-regular fa-thumbs-up fa-lg"></i>{" "}
              <span>{details?.likes}</span> Likes
            </p>
          </div>
        ) : null}
        {type === "Feed_images" ? (
          <div className={Styles.post_description}>
            <p>
              <Link
                href={`/users/${details?.user?.username}`}
                className={Styles.link_element}
              >
                <span className={Styles.user_name}>
                  {details?.user?.username}
                </span>{" "}
              </Link>{" "}
              {" • "}{" "}
              <span className={Styles.description}>
                {details?.description
                  ? details?.description
                  : details?.alt_description}{" "}
              </span>
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ImageDetailsCard;

import GridView from "@/components/GridView";
import { ListView } from "@/components/ListView";
import { fetchUserDetails } from "@/redux/actions/userActions";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Styles from "../../styles/styles.module.css";
import { setLoading, updatePicDisplayStyle } from "@/redux/slices/userSlice";
import ProfileSection from "@/components/ProfileSection";
import SideBar from "@/components/SideBar";
import Layout from "@/components/Layout";
import GridViewIcon from "../../assets/images/GridViewIcon.svg";

const userCard = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userName = router.query.userName;
  const { isLoadingUser, userDetails, userPicsDisplayStyle } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if(userName === undefined) return;
    const fetchUser = async () => {
      await dispatch(fetchUserDetails({ userName: userName })).unwrap();
    };
    fetchUser();
  }, [userName]);

  if(isLoadingUser === true) return <Layout><h1> Loading ....</h1></Layout>

  return (
    <Layout>
      <div className={Styles.cont}>
        <ProfileSection details={userDetails} />
        <div>
          <div className={Styles.filter_buttons}>
            <div
              className={`Styles.list_view_button ${
                userPicsDisplayStyle === "ListView" ? Styles.active : ""
              }`}
              onClick={() => {
                if (userPicsDisplayStyle === "ListView") return;
                dispatch(updatePicDisplayStyle("ListView"));
              }}
            >
              <div className={Styles.view}>
                <i
                  class="fa-solid fa-list-ul fa-2xl"
                  style={{
                    color:
                      userPicsDisplayStyle === "ListView" ? "gray" : "black",
                  }}
                ></i>
                {userPicsDisplayStyle === "ListView" ? <p>ListView ✅</p> : <></>}
              </div>
            </div>
            <div
              className={`Styles.grid_view_button ${
                userPicsDisplayStyle === "GridView" ? Styles.active : ""
              }`}
              onClick={() => {
                if (userPicsDisplayStyle === "GridView") return;
                dispatch(updatePicDisplayStyle("GridView"));
              }}
            >
              <div className={Styles.view}>
                <i
                  class="fa-solid fa-border-all fa-2xl"
                  style={{
                    color:
                      userPicsDisplayStyle === "GridView" ? "gray" : "black",
                  }}
                ></i>

                {userPicsDisplayStyle === "GridView" ? <p>GridView ✅</p> : <></>}
              </div>
            </div>
          </div>
          <div className={Styles.view_container}>
            {userPicsDisplayStyle === "ListView" ? (
              <ListView images={userDetails?.photos} type="Profile_images" />
            ) : (
              <GridView images={userDetails?.photos} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default userCard;

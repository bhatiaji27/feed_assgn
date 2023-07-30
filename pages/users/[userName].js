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
import { useQuery } from "react-query";
import { ColorRing } from "react-loader-spinner";

const userCard = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userName = router.query.userName;

  const { isLoadingUser, userPicsDisplayStyle, error } =
    useSelector((state) => state.user);

  const { data, isLoading } = useQuery("data", async () => {
    return await dispatch(fetchUserDetails({ userName: userName })).unwrap();
  });

  if (isLoadingUser) {
    return (
      <Layout>
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
          <h3>Loading the profile, just a blink away!</h3>
        </div>
      </Layout>
    );
  } else if (error?.message) {
    return (
      <Layout>
        <div className={Styles?.error}>
          <h1>Error {error?.response?.status}</h1>
          <h2>Error message:- {error?.message}</h2>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className={Styles.cont}>
        <ProfileSection details={data} />
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
                {userPicsDisplayStyle === "ListView" ? (
                  <p>ListView ✅</p>
                ) : (
                  <></>
                )}
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

                {userPicsDisplayStyle === "GridView" ? (
                  <p>GridView ✅</p>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className={Styles.view_container}>
            {userPicsDisplayStyle === "ListView" ? (
              <ListView images={data?.photos} type="Profile_images" />
            ) : (
              <GridView images={data?.photos} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default userCard;

import { baseUrl, clientId } from "@/api/ApiConstants";
import { getApiCall } from "@/api/ApiServices";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserDetails = createAsyncThunk(
  "user/fetchUserDetails",
  async ({userName}, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await getApiCall(
        `${baseUrl}/users/${userName}/?client_id=${clientId}`,
        {
          headers: {
            accept: "application/json",
          },
        }
      )
      console.log(response);
      if (response.status == 200) {
        return fulfillWithValue(response.data);
      } else {
        return rejectWithValue("Error fetching photo");
      }
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

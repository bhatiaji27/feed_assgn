import { baseUrl, clientId } from "@/api/ApiConstants";
import { getApiCall } from "@/api/ApiServices";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getARandomPhoto = createAsyncThunk(
  "photo/getARandomPhoto",
  async ({ page }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await getApiCall(
        `${baseUrl}/photos/random/?client_id=${clientId}&_limit=1&_page=${page}`,
        {
          headers: {
            accept: "application/json",
          },
        }
      );
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

import { createSlice } from "@reduxjs/toolkit";
interface Activity {
  id: string;
  name: string;
  duration: string;
}
type Activitys = {
  activitys: Activity[];
};
const initialState: Activitys = {
  activitys: [],
};

const todosSlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    CRAETER_ACTIVITY: (state, action) => {
      //
      console.log(action.payload);

      state.activitys.push(action.payload);
    },
    DELETE_ACTIVITY: (state, action) => {
      console.log(action.payload);
      state.activitys.filter((activity) => activity.id !== action.payload.id);
    },
  },
});

export const { CRAETER_ACTIVITY, DELETE_ACTIVITY } = todosSlice.actions;
export default todosSlice.reducer;

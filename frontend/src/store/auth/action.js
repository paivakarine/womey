import { CONFIG } from "../types";

export const setSidebar = (dataSidebar) => {
  return async (dispatch) => {
    
    dispatch({ type: CONFIG.sidebar,  });
  };
};

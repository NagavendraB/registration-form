import axios from "axios";
import {LOCAL_SERVER_RUNNING_PORT} from "../utils/constants";

export const validateIBAN = async (iban) => {
  try {
    return await axios.post(`http://localhost:${LOCAL_SERVER_RUNNING_PORT}/`, {iban})
  } catch (error) {
    console.log(error);
  }
}
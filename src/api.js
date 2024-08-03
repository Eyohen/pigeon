import axios from "axios";
import { URL } from "./url";


export const forgotPassword = async (email) => {
    const response = await axios.post(`${URL}/api/auth/forgot-password`, {email});
    return response.data;
}

export const verifyOTP = async (otp, resetToken) => {
    const response = await axios.post(`${URL}/api/auth/verify-otp`, 
      { otp },
      { headers: { 'x-reset-token': resetToken } }
    );
    return response.data;
  };

export const resetPassword = async (newPassword, resetToken) => {
    const response = await axios.post(`${URL}/api/auth/reset-password`, 
      { newPassword },
      { headers: { 'x-reset-token': resetToken } }
    );
    return response.data;
  };
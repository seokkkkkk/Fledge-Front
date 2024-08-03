import axios from "axios";
import { SponsorData } from "../@types/sponsor";
import { CommonError } from "../@types/api";

export const postAddressItem = async (data: SponsorData) => {
  const accesstoken = localStorage.getItem("accessToken");
  try {
    const res = await axios.post(
      "/api/v1/supports",
      {
        title: data.title,
        reason: data.reason,
        promise: data.promise,
        item: data.item,
        purchaseUrl: data.purchaseUrl,
        price: data.price,
        images: data.images,
        expirationDate: data.expirationDate,
        supportCategory: data.supportCategory,
        recipientName: data.recipientName,
        phone: data.phone,
        address: data.address,
        detailAddress: data.detailAddress,
        zip: data.zip,
      },
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
          // 다른 헤더를 추가할 수 있습니다.
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    return res.data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError<CommonError>(error) && error.response) {
      const errorCode = error.response.data.errorCode;
      const message = error.response.data.message;
      console.log(`${errorCode}: ${message}`);
      alert(message);
    }
  }
};

export const postAccountItem = async (data: SponsorData) => {
  const accesstoken = localStorage.getItem("accessToken");
  try {
    const res = await axios.post(
      "/api/v1/supports",
      {
        title: data.title,
        reason: data.reason,
        promise: data.promise,
        item: data.item,
        purchaseUrl: data.purchaseUrl,
        price: data.price,
        images: data.images,
        expirationDate: data.expirationDate,
        supportCategory: data.supportCategory,
        bank: data.bank,
        account: data.account,
      },
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
          // 다른 헤더를 추가할 수 있습니다.
          "Content-Type": "application/json",
        },
      }
    );

    return res.data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError<CommonError>(error) && error.response) {
      const errorCode = error.response.data.errorCode;
      const message = error.response.data.message;
      console.log(`${errorCode}: ${message}`);
      alert(message);
    }
  }
};
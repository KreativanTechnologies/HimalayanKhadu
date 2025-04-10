import {v2 as cloudinary} from 'cloudinary'
import multer from 'multer'

cloudinary.config({
  cloud_name: "dnkdjldi7",
  api_key: "376815484778978",
  api_secret: "6MXoraa11_oW1K2eCubMJ3XOrHM"
});

const storage = new multer.memoryStorage();

export async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto", 
  });
  return result;
}

export const upload = multer({ storage });
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_url: process.env.CLOUDINARY_URL,
});

const storage = multer.memoryStorage();

export async function imageUploadUtil(fileBuffers) {
  return new Promise((resolve, reject) => {
    const uploadPromises = fileBuffers.map(fileBuffer =>
      new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { resource_type: 'auto' },
          (error, result) => {
            if (error) {
              reject(new Error(error.message));
            } else {
              resolve(result);
            }
          }
        );
        uploadStream.end(fileBuffer);
      })
    );

    Promise.all(uploadPromises)
      .then(results => resolve(results))
      .catch(error => reject(new Error(error.message))); 
  });
}

export const upload = multer({ storage }).array('files');

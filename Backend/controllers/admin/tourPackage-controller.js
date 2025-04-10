import tourPackages from "../../models/tourPackages.js";
import { imageUploadUtil } from "../../helpers/cloudinary.js";
import multer from "multer";


const storage = multer.memoryStorage();
export const upload = multer({ storage });

export const uploadFields = upload.fields([
  { name: "gallery", maxCount: 10 },
  { name: "thingsToPackImages", maxCount: 10 },
]);

export const addTourPackage = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      salePrice,
      pickDrop,
      duration,
      inclusions,
      exclusions,
      itinerary,
      faq,
      howToReach,
      bestTimeToVisit,
      placesToVisit,
      thingsToDo,
    } = req.body;

    // 1. Upload gallery images
    const gallery = [];
    if (req.files.gallery) {
      for (const file of req.files.gallery) {
        const b64 = Buffer.from(file.buffer).toString("base64");
        const url = `data:${file.mimetype};base64,${b64}`;
        const uploaded = await imageUploadUtil(url);
        gallery.push(uploaded.secure_url);
      }
    }

    // 2. Upload thingsToPack images
    const thingsToPack = [];
    const thingsToPackData = JSON.parse(req.body.thingsToPack || "[]");

    if (thingsToPackData.length && req.files.thingsToPackImages) {
      for (let i = 0; i < thingsToPackData.length; i++) {
        const file = req.files.thingsToPackImages[i];
        const b64 = Buffer.from(file.buffer).toString("base64");
        const url = `data:${file.mimetype};base64,${b64}`;
        const uploaded = await imageUploadUtil(url);

        thingsToPack.push({
          title: thingsToPackData[i].title,
          desc: thingsToPackData[i].desc,
          image: uploaded.secure_url,
        });
      }
    }
    

    const newTour = new tourPackages({
      title,
      gallery,
      description,
      price,
      salePrice,
      pickDrop,
      duration,
      inclusions,
      exclusions,
      itinerary,
      faq,
      howToReach,
      bestTimeToVisit,
      placesToVisit,
      thingsToDo,
      thingsToPack
    });
    await newTour.save();

    res.status(201).json({ success: true, data: newTour });
  } catch (err) {
    console.error("Add Tour Package Error:", err);
    res.status(500).json({ success: false, message: "Failed to add tour package" });
  }
};


// Get all tour packages
export const getTourPackage = async (req, res) => {
    try {
      const packages = await tourPackages.find().sort({ createdAt: -1 });
      res.status(200).json({ success: true, data: packages });
    } catch (err) {
      console.error("Get Tour Packages Error:", err);
      res.status(500).json({ success: false, message: "Failed to fetch tour packages" });
    }
  };
  

  // edit tour
  export const editTourPackage = async (req, res) => {
    try {
      const { id } = req.params;
  
      const {
        title,
        description,
        price,
        salePrice,
        pickDrop,
        duration,
        inclusions,
        exclusions,
        itinerary,
        faq,
        howToReach,
        bestTimeToVisit,
        placesToVisit,
        thingsToDo,
      } = req.body;
  
      // Upload new gallery images if provided
      const gallery = [];
      if (req.files.gallery) {
        for (const file of req.files.gallery) {
          const b64 = Buffer.from(file.buffer).toString("base64");
          const url = `data:${file.mimetype};base64,${b64}`;
          const uploaded = await imageUploadUtil(url);
          gallery.push(uploaded.secure_url);
        }
      }
  
      // Handle thingsToPack images
      const thingsToPack = [];
      const thingsToPackData = JSON.parse(req.body.thingsToPack || "[]");
  
      if (thingsToPackData.length && req.files.thingsToPackImages) {
        for (let i = 0; i < thingsToPackData.length; i++) {
          const file = req.files.thingsToPackImages[i];
          const b64 = Buffer.from(file.buffer).toString("base64");
          const url = `data:${file.mimetype};base64,${b64}`;
          const uploaded = await imageUploadUtil(url);
  
          thingsToPack.push({
            title: thingsToPackData[i].title,
            desc: thingsToPackData[i].desc,
            image: uploaded.secure_url,
          });
        }
      }
  
      const updatedPackage = await tourPackages.findByIdAndUpdate(
        id,
        {
          title,
          gallery: gallery.length ? gallery : undefined,
          description,
          price,
          salePrice,
          pickDrop,
          duration,
          inclusions,
          exclusions,
          itinerary,
          faq,
          howToReach,
          bestTimeToVisit,
          placesToVisit,
          thingsToDo,
          thingsToPack: thingsToPack.length ? thingsToPack : undefined,
        },
        { new: true, omitUndefined: true }
      );
  
      if (!updatedPackage) {
        return res.status(404).json({ success: false, message: "Tour package not found" });
      }
  
      res.status(200).json({ success: true, data: updatedPackage });
    } catch (err) {
      console.error("Edit Tour Package Error:", err);
      res.status(500).json({ success: false, message: "Failed to edit tour package" });
    }
  };
  
  
  // Delete tour package by ID
  export const deleteTourPackageById = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await tourPackages.findByIdAndDelete(id);
      if (!deleted) {
        return res.status(404).json({ success: false, message: "Tour package not found" });
      }
      res.status(200).json({ success: true, message: "Tour package deleted successfully" });
    } catch (err) {
      console.error("Delete Tour Package Error:", err);
      res.status(500).json({ success: false, message: "Failed to delete tour package" });
    }
  };
  
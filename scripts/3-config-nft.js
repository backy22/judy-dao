import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x4DC063F6BaB9E2cbe82f85bCe228146B282fB3fC",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Rose",
        description: "This NFT will give you access to JudyDAO!",
        image: readFileSync("scripts/assets/rose.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
import * as fs from "fs";
import * as path from "path";

type photoType = {
  src: string;
  width: number;
  height: number;
};

const photos: photoType[] = [];

const directoryPath = path.join(__dirname, "../public/gallery");
console.log(directoryPath);

fs.readdir(directoryPath, (err, files) => {
  files.forEach((file) => {
    photos.push({ src: `/gallery/${file}`, width: 250, height: 250 });
  });
  console.log(photos);
});

import * as fs from "fs";
import * as path from "path";

// Specify the directory containing your images
const directoryPath: string = path.join(__dirname, "../public/gallery");

function convertToJpg(filePath: string): void {
  const fileExtension = path.extname(filePath).toLowerCase();
  const baseName = path.basename(filePath, fileExtension);

  // Check if the file is a JPEG but not already in .jpg format
  if (
    [".jpeg", ".jpg", ".JPG", ".JPEG"].includes(fileExtension) ||
    fileExtension !== ".jpg"
  ) {
    const newFilePath = path.join(path.dirname(filePath), `${baseName}.jpg`);

    // Rename the file
    fs.rename(filePath, newFilePath, (err) => {
      if (err) {
        console.error(`Error converting ${filePath} to ${newFilePath}`, err);
      } else {
        console.log(`Successfully converted ${filePath} to ${newFilePath}`);
      }
    });
  } else {
    console.log(`No conversion needed for: ${filePath}`);
  }
}

// Read the directory and process each file
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error(`Unable to read directory: ${directoryPath}`, err);
    return;
  }

  files.forEach((file) => {
    const fullPath = path.join(directoryPath, file);
    convertToJpg(fullPath);
  });
});

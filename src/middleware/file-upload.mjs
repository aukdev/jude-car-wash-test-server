import multer, { diskStorage } from "multer";
import { join, extname } from "node:path";

const __dirname = import.meta.dirname;

// console.log(join(__dirname, "..", "public"));
const storage = diskStorage({
  destination: join(__dirname, "..", "public"),
  filename: (_, f, cb) => {
    console.log(f.size);
    console.log(f.mimetype);
    console.log(`${Date.now()}_${f.fieldname}${extname(f.originalname)}`);
    cb(null, `${Date.now()}_${f.fieldname}${extname(f.originalname)}`);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});

export default upload;

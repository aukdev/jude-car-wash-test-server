import multer, { diskStorage } from "multer";
import { join, extname } from "node:path";
import { cwd } from "node:process";
const __dirname = import.meta.dirname;
const storage = diskStorage({
    destination: join(cwd(), "src", "public"),
    filename: (_req, file, cb) => {
        console.log(file.size);
        console.log(file.mimetype);
        const filename = `${Date.now()}_${file.fieldname}${extname(file.originalname)}`;
        console.log(filename);
        cb(null, filename);
    },
});
const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});
export default upload;
//# sourceMappingURL=file-upload.mjs.map
import multer from 'multer';
import path from 'path';

//@ts-ignore
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Geçersiz dosya türü! Sadece JPEG ve PNG dosyalarına izin veriliyor.'), false);
    }
} 

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/Images/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ 
    storage: storage ,
    fileFilter: fileFilter
});

export default upload;
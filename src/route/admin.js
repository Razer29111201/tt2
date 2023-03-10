import express from 'express';
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/public/fileuploads')
    },
    filename: function (req, file, cb) {

        cb(null, file.originalname)
    }
})


const upload = multer({ storage: storage })


import { getadmin, adduser, adduser1, edituser, edituser1, deleteuser, getaddnews, getadd, deletenews, getedit, edit, setttvb, addttvb, geteditttvb, editttvb, deletettvb, addsdtc, sdtcadd, geteditsdtc } from '../controller/homeController.js'
const router = express.Router();



router.get('/', getadmin)
router.get('/addnews', getaddnews)
router.get('/editnews/:id', getedit)
router.post('/addnews/add', upload.single('thumd'), getadd)
router.post('/delete', deletenews)
router.post('/editnews/edit/done', upload.single('thum'), edit)
router.get('/addttvb', setttvb)
router.post('/addttvb/addd', upload.single('file'), addttvb)
router.get('/editttvb/:id', geteditttvb)
router.post('/editttvb/edit', upload.single('file'), editttvb)
router.post('/deletettvb', deletettvb)
router.get('/addsdtc', addsdtc)
router.post('/addsdtc/add', upload.single('file'), sdtcadd)
router.get('/editsdtc/:id', geteditsdtc)
router.get('/adduser', adduser)
router.post('/adduser/add', adduser1)
router.get('/edituser/:id', edituser)
router.post('/edituser/edit', edituser1)
router.post('/userdelete', deleteuser)







module.exports = router
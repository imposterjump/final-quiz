import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { fileURLToPath } from "url";
import fileUpload from "express-fileupload";

// express app
const app = express();

const dbURI = 'mongodb+srv://imposterjump2:25102002@cluster0.z6cgz77.mongodb.net/jump?retryWrites=true&w=majority';;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(8080))
    .catch(err => console.log(err));

app.use(express.urlencoded({ extended: true }));

// // default options
app.use(fileUpload());
app.use(express.static('public'));
app.use(session({ secret: 'Your_Secret_Key' }))
    // register view engine
app.set('view engine', 'ejs');



// 404 page
app.use((req, res) => {
    res.status(404).render('404', { user: (req.session.user === undefined ? "" : req.session.user) });
});




export default index;
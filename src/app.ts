/* eslint-disable space-before-function-paren */
import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import Cache from './shared/utils/cache';
import path from 'path';
import userRoutes from './user/routes';
import adminRoutes from './admin/routes';
import sharedRoutes from './shared/routes';
import validateToken from './shared/middlewares/validateToken';
import bodyParser from 'body-parser';
import loadPredata from './shared/predata';

dotenv.config();
Cache.initialize();

const app = express();

// set middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// Configurar la carpeta 'public' como estática
app.use(express.static(path.join(__dirname, './shared/public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'shared/interface/views'));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);
// -------------------------------------------------------------
// Routes
app.use('/', sharedRoutes);
// ----------------PRIVATE ROUTES------------------------------
app.use(validateToken); // check if the token is valid
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
app.get('*', function (req, res) {
  res.status(404).render(path.join(__dirname, './shared/interface/views/404'));
});

// -------------------------------------------------------------
// load predata
loadPredata();

// -------------------------------------------------------------
// initialize the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});

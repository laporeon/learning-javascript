require('dotenv').config();

const express = require('express');
const app = express();
// importando  mongoose
const mongoose = require('mongoose');

// criando conexão
mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Conectei a base de dados.');
    app.emit('pronto');
  })
  .catch((e) => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const path = require('path');
// importando helmet
const helmet = require('helmet');
const csrf = require('csurf');
const routes = require('./routes');
const {
  middlewareGlobal,
  checkCsrfError,
  csrfMiddleware,
} = require('./src/middlewares/middleware');

app.use(helmet());
app.use(express.urlencoded({ extended: true }));

// usar arquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));

// configurar a session
const sessionOptions = session({
  secret: 'akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

app.use(sessionOptions);
app.use(flash());

app.use(csrf());
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.set('views', path.resolve(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.on('pronto', () => {
  app.listen(8000, () => {
    console.log('Acessar http://localhost:8000');
    console.log('Servidor rodando...');
  });
});

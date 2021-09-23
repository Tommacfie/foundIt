const Express = require('express')
const app = Express();
const router = require('./router');
const cors = require('cors');
const { PORT, client } = require('./config');

app.use(cors());
app.use(Express.json());
app.use(router);

app.listen(PORT, (error) => {
  if (error) throw new Error(error);
  console.log(`Server running on port ${PORT}`);
});


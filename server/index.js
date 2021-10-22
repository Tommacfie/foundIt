const Express = require('express');
const app = Express();
const cors = require('cors');
const router = require('./router');
const { PORT } = require('./config');

app.use(cors());
app.use(Express.json());
app.use(router);

app.listen(PORT, (error) => {
  if (error) throw new Error(error);
  console.log(`Server running on port ${PORT}`);
});

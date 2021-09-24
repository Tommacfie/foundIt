import dotenv from 'dotenv';
dotenv.config();

const server = process.env.SERVER || 'http://localhost:3001';

// console.log(server, 'server');//DELETEME

export default server;
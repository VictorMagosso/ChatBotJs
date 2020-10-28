import App from './App';

const PORT = process.env.PORT || 3000;

const server = new App(+PORT);

export default server;
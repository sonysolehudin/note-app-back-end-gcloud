/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
const routes = (handler) => [
    {
      method: 'POST',
      path: '/users',
      handler: handler.postUserHandler,
    },
    {
      method: 'GET',
      path: '/users/{id}',
      handler: handler.getUserByIdHandler,
    },
  ];
   
module.exports = routes;

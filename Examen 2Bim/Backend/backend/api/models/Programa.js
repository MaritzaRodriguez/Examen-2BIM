/**
 * Programa.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    pesoGB: {
      type: 'number',
      required: true
    },
    version: {
      type: 'number',
      required: true
    },
    nombre: {
      type: 'string',
      required: true
    },
    imagen: {
      type: 'string',
      required: true
    },
    url: {
      type: 'string',
      required: true
    },
    fechaLanzamiento: {
      type: 'number',
      required: true
    },
    costo: {
      type: 'number',
      required: true
    },
    estado: {
      type: 'boolean',
      required: true
    },
   aplicacion:{
      model:'SistemaOperativo',
    }
  },

};


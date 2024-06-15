/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */

const InvariantError = require('../../exeptions/InvariantError');
const { NotePayloadSchema } = require('./schema');
 
const NotesValidator = {
  validateNotePayload: (payload) => {
    const validationResult = NotePayloadSchema.validate(payload);
    if (validationResult.error) {
        throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = NotesValidator;

/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
const ExportNotesPayloadSchema = require('./schema');
const InvariantError = require('../../exeptions/InvariantError');
 
const ExportsValidator = {
  validateExportNotesPayload: (payload) => {
    const validationResult = ExportNotesPayloadSchema.validate(payload);
 
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};
 
module.exports = ExportsValidator;

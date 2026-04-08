const sanitizeBody = (body, allowedFields) => {
  const clean = {};
  for (const key of allowedFields) {
    if (body[key] !== undefined) {
      clean[key] = body[key];
    }
  }
  return clean;
};

const isValidObjectId = (id) => {
  return /^[0-9a-fA-F]{24}$/.test(id);
};

module.exports = {
  sanitizeBody,
  isValidObjectId
};

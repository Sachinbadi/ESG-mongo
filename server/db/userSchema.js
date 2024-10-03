const userSchema = {
    email: { type: 'string', required: true, unique: true },
    password: { type: 'string', required: true },
    urls: { type: 'array', default: [] },
    keywords: { type: 'array', default: [] },
    pdfs: { type: 'array', default: [] }
  };
  
  module.exports = userSchema;
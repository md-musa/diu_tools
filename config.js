const mongodbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cse-p-diu.rspdn.mongodb.net/?retryWrites=true&w=majority&appName=CSE-P-DIU`;

module.exports = {
  mongodbURI,
};

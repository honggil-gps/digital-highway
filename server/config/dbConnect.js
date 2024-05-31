const mongoose = require('mongoose');

const dbConnect = () => {
  const dbURI = process.env.MONGO_URI;

  if (!dbURI) {
    console.error('MongoDB URI is not defined in environment variables');
    process.exit(1); // 환경 변수가 정의되지 않은 경우 프로세스를 종료
  }

  mongoose.connect(dbURI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => {
      console.error('MongoDB connection error:', err);
      process.exit(1); // 연결 오류가 발생한 경우 프로세스를 종료
    });
};

module.exports = dbConnect;
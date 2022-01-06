import rateLimit from 'express-rate-limit';
const limiter = rateLimit({
  windowMs: 30 * 1000,
  max: 45,
});

export default limiter;

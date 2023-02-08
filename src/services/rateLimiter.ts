import rateLimit from 'express-rate-limit';
class RateLimiter {
  public limiter;
  constructor() {
    this.limiter = rateLimit({
      windowMs: 30 * 1000,
      max: 45,
    });
  }
}

export default new RateLimiter().limiter;

import jwt from 'jsonwebtoken';
export class AuthenticationController {
  public getAccessToken = async (req: any, res: any) => {
    const data = req.body;
    const token = jwt.sign(data, process.env.JWT_SECRET || 'sayMyName');
    res
      .json({
        access_token: token,
      })
      .status(200);
  };
}

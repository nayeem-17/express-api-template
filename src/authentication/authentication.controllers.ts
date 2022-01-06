import jwt from 'jsonwebtoken';
const getAccessToken = async (req: any, res: any) => {
  const data = req.body;
  const token = jwt.sign(data, process.env.JWT_SECRET || 'sayMyName');
  res
    .json({
      access_token: token,
    })
    .status(200);
};

export default getAccessToken;

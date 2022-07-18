import { adminAuth } from "../../firebase/adminInit";

const handler = async (req, res) => {
  try {
    const bearerToken = req.headers.authentication;
    let token;
    //check if token starts with Bearer
    if (!bearerToken.startsWith("Bearer ")) {
      return res.status(403).json({
        message: 'Unable to perform action. Invalid user',
      });
    }
    //extract token from bearerToken
    token = bearerToken.substring(7, bearerToken.length);
    //decode token
    const decodedToken = await adminAuth.verifyIdToken(token);
    //verify if the requesting user is an admin or not
    if(!decodedToken.admin){
      return res.status(403).json({
        message: 'Unable to perform action. Requesting user is not admin',
      });
    }
    const { email } = JSON.parse(req.body);
    const user = await adminAuth.getUserByEmail(email);
    await adminAuth.setCustomUserClaims(user.uid, {
      admin: true,
    });
    res.status(200).json({
      message: "User has been made admin",
    });
  } catch (err) {
    res.status(405).json({
      message: err.message,
    });
  }
};

export default handler;

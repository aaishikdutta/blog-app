import { adminAuth } from "../../firebase/adminInit";

const handler = async (req, res) => {
  try {
    const {email} = JSON.parse(req.body);
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

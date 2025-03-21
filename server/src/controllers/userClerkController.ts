import { Request, Response } from "express";
import { clerkClient } from "../index";

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params;
  const userData = req.body;

  try {
    // 메타데이터 객체 구조 로깅
    console.log("Updating user metadata for:", userId);
    console.log("Request body:", JSON.stringify(userData, null, 2));

    const user = await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        userType: userData.publicMetadata.userType,
        settings: userData.publicMetadata.settings,
      },
    });
    res.json({ message: "User updated successfully", data: user });
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
};

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isStudentRoute = createRouteMatcher(["/user/(.*)"]);
const isTeacherRoute = createRouteMatcher(["/teacher/(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  console.log("미들웨어 실행, URL:", req.url);
  const { sessionClaims } = await auth();
  console.log("sessionClaims:", sessionClaims);

  // metadata에서 userType을 가져오도록 수정 (publicMetadata에서 변경)
  const metadata = sessionClaims?.metadata as {
    userType?: "student" | "teacher";
  };

  const userRole =
    (sessionClaims?.metadata as { userType: "student" | "teacher" })
      ?.userType || "student";

  console.log("세션 클레임:", JSON.stringify(sessionClaims));
  console.log("메타데이터1:", JSON.stringify(metadata));
  console.log("사용자 역할:", userRole);

  if (isStudentRoute(req)) {
    console.log("학생 경로 감지됨");
    if (userRole !== "student") {
      console.log("학생 아님, teacher/courses로 리다이렉트");
      const url = new URL("/teacher/courses", req.url);
      return NextResponse.redirect(url);
    }
  }

  if (isTeacherRoute(req)) {
    console.log("교사 경로 감지됨");
    if (userRole !== "teacher") {
      console.log("교사 아님, user/courses로 리다이렉트");
      const url = new URL("/user/courses", req.url);
      return NextResponse.redirect(url);
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

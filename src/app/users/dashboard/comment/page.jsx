import CommentBox from "@/components/Dashboard/Comment/CommentBox";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";

const Page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });
  // console.log(comments);

  return (
    <section className="mt-4 w-full px-4">
      <CommentBox comments={comments} />
    </section>
  );
};

export default Page;

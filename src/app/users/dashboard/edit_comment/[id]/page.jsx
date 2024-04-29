import prisma from "@/libs/prisma";
import { authUserSession } from "@/libs/auth-libs";
import Header from "@/components/Dashboard/Header";
import EditCommentInput from "@/components/Dashboard/Comment/EditCommentInput";
const Page = async ({ params: { id } }) => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });
  return (
    <div>
      <div className="flex px-4 py-4">
        <Header />
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <EditCommentInput id={id} rating={comments.rating} />
      </div>
    </div>
  );
};

export default Page;

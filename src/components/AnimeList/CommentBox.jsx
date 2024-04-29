import prisma from "@/libs/prisma";

const CommentBox = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } });

  return (
    <div className="mb-4 grid grid-cols-4 gap-4">
      {comments.map((comment) => {
        return (
          <div
            key={comment.id}
            className="rounded-md bg-color-primary px-2 py-4 text-color-secondary"
          >
            <div className="flex flex-row justify-between">
              <div className="flex flex-col gap-4">
                <h2 className="text-sm font-semibold">{comment.user_name}</h2>
                <p className="text-lg font-medium italic">{comment.comment}</p>
              </div>
              <div>
                <h2 className="text-sm font-semibold">
                  {comment.rating.toString()}/5.00
                </h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;

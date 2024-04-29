"use client";
import { useEffect } from "react";

import DeleteComment from "@/components/Dashboard/Comment/DeleteComment";
import Header from "@/components/Dashboard/Header";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CommentBox = async ({ comments }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRefresh = async () => {
      await router.refresh();
    };
    handleRefresh();
  }, []);
  return (
    <div>
      <Header title={"My Comments"} />
      {comments.length == 0 ? (
        <div className="flex min-h-screen items-center justify-center">
          <div className="flex flex-col items-center gap-4 text-color-light">
            <h2 className="font-semibold">Your Comment is Empty</h2>
            <p className="text-medium">
              If you want to see your comments, start to do so by visiting those
              page!
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 py-8 ">
          {comments.map((comment) => {
            return (
              <div className="bg-color-primary p-4 text-color-secondary">
                <Link
                  key={comment.id}
                  href={`/anime/${comment.anime_mal_id}`}
                  className=""
                >
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                      <h2 className="text-sm font-semibold">
                        {comment.anime_title}
                      </h2>
                      <p className="text-md font-medium italic">
                        {comment.comment}
                      </p>
                    </div>
                    <div>
                      <h2 className="text-sm font-semibold">
                        {comment.rating.toString()}/5.0
                      </h2>
                    </div>
                  </div>
                </Link>
                <div className="flex flex-row gap-4 pt-6">
                  <DeleteComment id={comment.id} />
                  <Link
                    href={`edit_comment/${comment.id}`}
                    className="rounded-md bg-color-light px-4 py-2 transition ease-in-out hover:bg-color-primary hover:text-color-light"
                  >
                    Edit Comment
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CommentBox;

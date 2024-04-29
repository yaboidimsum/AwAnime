import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { anime_mal_id, anime_title, user_email, user_name, comment, rating } =
    await request.json();
  const data = {
    anime_mal_id,
    anime_title,
    user_email,
    user_name,
    comment,
    rating,
  };

  const createComment = await prisma.comment.create({ data });

  if (!createComment) {
    return Response.json({ status: 500, isCreated: false });
  } else {
    return Response.json({ status: 200, isCreated: true });
  }
}

export async function DELETE(request, { params }) {
  const id = parseInt(params.id);

  await prisma.comment.delete({
    where: {
      id,
    },
  });

  //return response JSON
  return NextResponse.json(
    {
      sucess: true,
      message: "Comment Deleted!",
    },
    {
      status: 200,
    }
  );
}

export async function PATCH(request, { params }) {
  //get params id
  const id = parseInt(params.id);

  //get request data
  const { comment, rate } = await request.json();

  //update data
  const post = await prisma.comment.update({
    where: {
      id,
    },
    data: {
      comment: comment,
      rating: rate,
    },
  });

  //return response JSON
  return NextResponse.json(
    {
      sucess: true,
      message: "Comment Updated!",
      data: post,
    },
    {
      status: 200,
    }
  );
}

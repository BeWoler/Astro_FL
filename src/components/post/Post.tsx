import React from "react";
import type { IPostProps } from "./post.interface";

const Post = ({ title, body, id }: IPostProps) => {
  return (
    <div className='flex max-w-sm min-w-[300px] border-black border-2 p-4 justify-start flex-col'>
      <h3 className='font-bold'>
        {id}: {title}
      </h3>
      <p>{body}</p>
    </div>
  );
};

export default Post;

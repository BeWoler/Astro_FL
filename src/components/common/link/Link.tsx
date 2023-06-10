import type { ILinkProps } from "./link.interface";

const Link = ({ title, href }: ILinkProps) => {
  return (
    <a
      href={href}
      className='font-medium text-gray-300 hover:text-blue-200 transition-all delay-75'>
      {title}
    </a>
  );
};

export default Link;
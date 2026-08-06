import React from "react";
import { Link } from "react-router-dom";

type IRepositoryItem = React.PropsWithChildren & {
  link: string,
}

const RepositoryItem = ({ link, children}: IRepositoryItem) => {
  return (
    <div>
      <li>
        <Link to={link}>{children}</Link>
      </li>
    </div>
  );
};

export default RepositoryItem;

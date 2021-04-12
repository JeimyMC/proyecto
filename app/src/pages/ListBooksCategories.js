import React from "react";
import { useParams, Link } from "react-router-dom";
import { BookOfKindCategory } from "../components/BookOfKindCategory";

const ListBooksCategories = () => {
  let { name } = useParams();
  return (
    <div className="listBooksUser">
      <p>{name}</p>
      <nav>
        <Link to="/principal">Principal ˃ </Link>
        <p>{name}</p>
      </nav>
      <BookOfKindCategory></BookOfKindCategory>
    </div>
  );
};

export { ListBooksCategories };

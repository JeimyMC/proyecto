import React from "react";
import { port } from "../App";
import { Link } from "react-router-dom";
import { useFetchAuth } from "../hooks/useFetchAuth";

const ProfileUserInside = ({ auth }) => {
  const [dataUser] = useFetchAuth(
    `http://localhost:${port}/login/user/profile`,
    auth
  );

  const userData = dataUser ? dataUser[0] : null;
  const avg = dataUser ? dataUser[1] : null;
  const point = avg ? avg.map((e) => e.point) : null;
  const showProfile = userData
    ? userData.map((e) => {
        const url = `http://localhost:${port}/uploads/${e.photo}`;
        const star = "★".repeat(Math.floor(point));
        return (
          <header key={e.id_user}>
            <img src={url} alt="avatar" style={{ maxWidth: 250 }}></img>
            <main>
              <p>{e.username}</p>
              <p>{e.descriptionUser}</p>
              <p>{e.city}</p>
              <p style={{ color: "orange" }}>{star}</p>
              <p>{e.postalCode}</p>
              <Link to="/principal/profile/valorations">Valoraciones</Link>
            </main>
          </header>
        );
      })
    : null;
  return showProfile;
};

export { ProfileUserInside };

import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const Description = () => {
  const navigate = useNavigate();
  const { title } = useParams();
  const { state } = useLocation();

  if (!state) {
    // Handle the case where state is not available (optional)
    return null;
  }

  const { description, trailerLink } = state;

  return (
    <>
      <button onClick={() => navigate("/")}> Back to Home</button>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <iframe
          title={title}
          width="560"
          height="315"
          style={{ border: "none" }}
          src={trailerLink}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </>
  );
};

export default Description;

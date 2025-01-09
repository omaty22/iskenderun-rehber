import React from "react";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PreLoad() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/Land");
      setIsLoading(false);
    }, 3400);
  });

  return isLoading ? <Loader /> : <></>;
}

export default PreLoad;

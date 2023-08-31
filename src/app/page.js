"use client";
import NamesList from "./Components/NamesList";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Home() {
  const UsersApi = "https://dummyjson.com/users";
  const [UsersData, setUsersData] = useState(null);
  useEffect(() => {
    axios.get(UsersApi).then((response) => {
      setUsersData(response);
    });
  }, []);
  return (
    <div className="center">
      {UsersData && <NamesList UsersData={UsersData} />}
    </div>
  );
}

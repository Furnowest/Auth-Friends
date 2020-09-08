import { axiosWithAuth } from "../utils/AxiosWithAuth";
import Friend from "./friend";
import FriendForm from "./Friendform";
import React, { useState, useEffect } from "react";


function FriendPage() {
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((error) => {
        console.error("Server Error", error);
      });
  }, []);


  const [friends, setFriends] = useState([
    {
      id: "",
      name: "",
      age: "",
      email: ""
    }
  ]);


  console.log(friends);


  const addNewFriend = (friend) => {
    const newFriend = {
      id: Date.now(),
      name: friend.name,
      age: friend.age,
      email: friend.email
    };
    setFriends([...friends, newFriend]);
  };


  return (
    <div className="App">
      <h1>My Friends</h1>


      <FriendForm addNewFriend={addNewFriend} />
      <Friend friends={friends} />
    </div>
  );
}


export default FriendPage;


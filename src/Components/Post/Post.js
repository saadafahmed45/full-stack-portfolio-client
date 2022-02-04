import React, { useState, useEffect, useRef } from "react";

const Post = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users/")
      .then((response) => response.json())
      .then((data) => setUser(data));
  });

  // data post to server
  const nameRef = useRef("");
  const emailRef = useRef("");

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const newUser = { name: name, email: email };
    // console.log(newUser);

    fetch("http://localhost:5000/users/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then(data => {
        console.log(data);
      });

    // alert('Post')
  };

  return (
    <div>
      <div className="data mt-5 text-center">
        <div className="post">
          <h1>post</h1>

          <form onSubmit={handleAddUser}>
            <input type="text" ref={nameRef} placeholder="name" />
            <input type="text" ref={emailRef} placeholder="email" />
            <input type="submit" value="Submit" />
          </form>
        </div>

        <h3>number of Item :{user.length} </h3>

        {user.map((users) => (
          <div className="bg-dark text-warning ">
            <h5>{users.name}</h5>
            <h5>{users.id}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;

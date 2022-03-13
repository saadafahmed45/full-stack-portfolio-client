import React from "react";
import SideBar from "../SideBar/SideBar";
import { useForm } from "react-hook-form";

const AddBlog = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);


    const onSubmit = (data) => {
        const eventData = {
          name: data.name,
          email: data.email,
        //   description: data.description,
    
        //   imageURL: imageURL,
        };
        console.log(eventData);
    
        const url = `http://localhost:5000/addProject`;
        fetch(url, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(eventData),
        }).then((res) =>{

    if(res){
      alert('Services Added successfully');
    } }
        )};

  return (
    <div className="addBlog__section">
      <div className="container-fluid">
        <SideBar />
        <div className="blog__input">
          <h1>Add your New Blog</h1>

     <form onSubmit={handleSubmit(onSubmit)}>
      <input className="form-control"  {...register("name")}  placeholder="name"/>
      
      <input  className="form-control"  {...register("email")}   placeholder="email"/>
      
      <input className="btn btn-dark" type="submit" />
    </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;

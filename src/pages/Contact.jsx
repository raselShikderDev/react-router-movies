/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { Form } from "react-router-dom";



export const getContactFormData = async ({request}) => {
  try {
   const res = await request.formData()
    const data = Object.fromEntries(res)
    console.log(data)
    return data
  } catch (error) {
    console.log(error);
    return error
  }
}

export default function Contact() {
  
  const formDatas = async () => {
    return await getContactFormData()
  }

  console.log(formDatas())
  return (
    <div className="py-10 bg-slate-400">
        <h2 className="font-semibold text-center text-4xl">Contact</h2>
      <div id="formContact" className="w-1/4 m-auto mt-5">
        <Form action="/contact" method="post" className="flex flex-col gap-5">
          <div id="nameContactForm " className="">
            <label htmlFor="text">Name: </label>
            <br />
            <input
              type="text"
              placeholder="Rasel Shikder"
              name="text"
              id="text"
              className="w-full py-1 px-2 rounded focus-visible:outline-none"
            />
          </div>
          <div id="emailContactForm">
            <label htmlFor="email">Email: </label>
            <br />
            <input
              type="email"
              placeholder="name@gmail.com"
              name="email"
              id="email"
              className="w-full py-1 px-2 rounded focus-visible:outline-none"
            />
          </div>
          <div id="massageContactForm">
            <label htmlFor="massage">Massage: </label>
            <br />
            <textarea
              name="massage"
              id="massage"
              placeholder="Write Massage"
              cols="100"
              rows="8"
              className="w-full py-1 px-2 rounded focus-visible:outline-none"
            ></textarea>
          </div>
          <button className="bg-sky-600 py-1 px-5 rounded-sm font-bold hover:bg-blue-950 hover:text-white" type="submit">Send</button>
        </Form>
      </div>
    </div>
  );
}

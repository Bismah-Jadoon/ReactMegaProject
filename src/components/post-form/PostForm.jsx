import React, { useCallback } from "react";
import { useForm } from "react-hok-form";
import { Button, Input, Select, RTE } from "./index";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm() {
  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    dafaultValues: {
        title: '',
    }
  });
  return <div></div>;
}

import React, {useState, useEffect} from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";


export default function AllPosts() {

    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => setPosts(posts))
  return
}

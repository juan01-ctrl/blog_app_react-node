import { useEffect, useState, useContext, ChangeEvent } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import {
  PostContainer,
  PostDescription,
  PostImage,
  PostInfo,
  PostInfoContainer,
  PostTitle,
  SettingsPost,
} from "./PostElements";
import { IPost } from "../../../Interfaces/Post";
import { AuthContext } from "../../../context/Context";
import MainButton from "../../MicroComponents/Buttons/MainButton";
import { FormInputText, FormTextArea } from "../PostForm/PostFormElements";
import BackArrow from "../../MicroComponents/BackArrow";
import Loader from "../../MicroComponents/Loader/Loader";

const Post = () => {
  const {
    state: { user },
  } = useContext(AuthContext);

  const ImgFolder = "http://localhost:8080/images/";

  //STATES
  const [post, setPost] = useState<IPost>();
  const [desc, setDesc] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [updateError, setUpdateError] = useState<string>("");

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const postId = pathname.split("/")[2];

  useEffect(() => {
    const getPost = async () => {
      const { data } = await axios.get(
        process.env.REACT_APP_BASE_URL + `/posts/${postId}`
      );
      setPost(data);
      setDesc(data.desc);
      setTitle(data.title);
    };

    getPost();
  }, [postId]);

  // DELETE POST
  const deletePost = async () => {
    Swal.fire({
      title: "Do you want to delete this post?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
      customClass: {
        actions: "my-actions",
        cancelButton: "order-1 right-gap",
        confirmButton: "order-2",
        denyButton: "order-3",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(
          process.env.REACT_APP_BASE_URL + `/posts/${postId}`,
          {
            data: { username: user?.username },
          }
        );
        navigate("/");
        Swal.fire("Post deleted!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  // HANDLE UPDATE
  const handleUpdate = async () => {
    setUpdateError("");
    if (!desc?.trim().length || !title?.trim().length) {
      setUpdateError("Complete all fields!");
      return;
    }
    if (desc.length < 120) {
      setUpdateError("the content is too short!");
      return;
    }
    if (title.length < 5) {
      setUpdateError("the title is too short!");
      return;
    }
    try {
      await axios.put(process.env.REACT_APP_BASE_URL + `/posts/${post?._id}`, {
        data: { username: user?.username, title, desc },
      });
      setIsEditing(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="section">
      <PostContainer>
        <BackArrow />
        {!post ? (
          <Loader />
        ) : (
          <>
            {post.photo && (
              <PostImage src={ImgFolder + post.photo} alt={post.title} />
            )}
            <PostInfoContainer>
              {post.categories.length > 0 && (
                <div>
                  {user?.username === post.username && !isEditing && (
                    <SettingsPost>
                      <BiEdit
                        cursor="pointer"
                        size="3em"
                        color="#2a5280"
                        onClick={() => setIsEditing((prev) => !prev)}
                      />
                      <MdDeleteOutline
                        cursor="pointer"
                        size="3em"
                        color="#ab1111"
                        onClick={deletePost}
                      />
                    </SettingsPost>
                  )}
                  <PostInfo style={{ display: "inline" }} dark={true}>
                    Categories:{" "}
                  </PostInfo>
                  {post.categories?.map((cat, idx) => (
                    <PostInfo key={idx} style={{ display: "inline" }}>
                      {" "}
                      {cat}
                      {idx !== post.categories.length - 1 ? "," : "."}
                    </PostInfo>
                  ))}
                </div>
              )}
              {isEditing ? (
                <FormInputText
                  value={title}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    setTitle(e.target.value)
                  }
                  opacity={true}
                />
              ) : (
                <div style={{ marginBottom: "2em" }}>
                  <PostTitle>{title}</PostTitle>
                </div>
              )}

              <Link to={`/?username=${post.username}`}>
                <PostInfo dark={true} style={{ opacity: ".8" }}>
                  <span>Author:</span> {post.username}
                </PostInfo>
              </Link>
              <PostInfo>
                Date: {new Date(post.createdAt).toDateString()}
              </PostInfo>
            </PostInfoContainer>
            {isEditing ? (
              <FormTextArea
                value={desc}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setDesc(e.target.value)
                }
                opacity={true}
              />
            ) : (
              <PostDescription>{desc}</PostDescription>
            )}
          </>
        )}
        {updateError && (
          <h4 style={{ margin: ".5em", fontSize: "1.2em" }}>{updateError}</h4>
        )}
        {isEditing && <MainButton onClick={handleUpdate} text="Update" />}
      </PostContainer>
    </section>
  );
};

export default Post;

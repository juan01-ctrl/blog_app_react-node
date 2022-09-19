import { ChangeEvent, FormEvent, useState, useContext } from "react";
import { FcAddImage } from "react-icons/fc";
import MainButton from "../../MicroComponents/Buttons/MainButton";
import { PostImage } from "../Post/PostElements";
import axios from "axios";
import {
  Form,
  FormFieldsContainer,
  FormInputFile,
  FormInputText,
  FormInputTextSmall,
  FormTextArea,
  PostFormContainer,
} from "./PostFormElements";
import { AuthContext } from "../../../context/Context";
import { useNavigate } from "react-router-dom";

const PostForm = () => {
  type PostType = {
    title: string;
    desc: string;
    photo?: string;
    username: string;
    categories?: string[];
  };
  type FormType = {
    title: string;
    content: string;
    photo: File | null;
    categories?: string;
  };

  const navigate = useNavigate();
  const {
    state: { user },
  } = useContext(AuthContext);

  const INITIAL_FORM: FormType = {
    title: "",
    content: "",
    photo: null,
    categories: "",
  };

  const [form, setForm] = useState(INITIAL_FORM);
  const [updateError, setUpdateError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name !== "photo") {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
      return;
    }
    setForm({
      ...form,
      [e.target.name]: e.target.files![0],
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUpdateError("");
    if (!form.content?.trim().length || !form.title?.trim().length) {
      setUpdateError("Complete all fields!");
      return;
    }
    if (form.content.length < 70) {
      setUpdateError("the content is too short!");
      return;
    }
    if (form.title.length < 5) {
      setUpdateError("the title is too short!");
      return;
    }

    const newPost: PostType = {
      title: form.title,
      desc: form.content,
      username: user!.username,
    };

    if (form.categories) {
      const categories = form.categories.split(" ");
      newPost.categories = categories;
      try {
        await axios.post(
          process.env.REACT_APP_BASE_URL + "/categories",
          categories
        );
      } catch (err) {
        console.log(err);
      }
    }

    if (form.photo) {
      const data = new FormData();
      const filename = Date.now() + form.photo.name;

      data.append("name", filename);
      data.append("file", form.photo);
      newPost.photo = filename;
      try {
        await axios.post(process.env.REACT_APP_BASE_URL + "/upload", data);
      } catch (err) {
        console.error(err);
      }
    }

    try {
      const { data } = await axios.post(
        process.env.REACT_APP_BASE_URL + "/posts",
        newPost
      );

      navigate(`/post/${data._id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <PostFormContainer>
      {form.photo && <PostImage src={URL.createObjectURL(form.photo)} alt="" />}
      <Form onSubmit={handleSubmit}>
        <FormFieldsContainer>
          <label htmlFor="inputFile" style={{ alignSelf: "flex-start" }}>
            <FcAddImage size="6em" cursor="pointer" />
          </label>
          <FormInputFile
            name="photo"
            type="file"
            id="inputFile"
            style={{ display: "none" }}
            onChange={handleChange}
          />
          <FormInputText
            name="title"
            placeholder="Post Title*"
            onChange={handleChange}
            required
          />
          <FormTextArea
            name="content"
            placeholder="Post Content*"
            onChange={handleChange}
            required
          />
          <div>
            <label htmlFor="categories" style={{ fontSize: "1.3em" }}>
              Categories (opt):
            </label>
            <FormInputTextSmall
              id="categories"
              name="categories"
              placeholder="Split categories by space"
              onChange={handleChange}
            />
          </div>
        </FormFieldsContainer>
        {updateError && (
          <h4 style={{ margin: ".5em", fontSize: "1.2em" }}>{updateError}</h4>
        )}

        <MainButton type="submit" text="Publish" />
      </Form>
    </PostFormContainer>
  );
};

export default PostForm;

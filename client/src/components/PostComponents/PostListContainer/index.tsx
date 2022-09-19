import { ChangeEvent, FC, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IPost } from "../../../Interfaces/Post";
import PostCard from "../PostCard";
import {
  InputSearch,
  PostList,
  PostListTitle,
  SelectFilter,
  SelectWrapper,
} from "./PostContainerElements";
import axios from "axios";
import { ICategory } from "../../../Interfaces/Category";
import { IUser } from "../../../Interfaces/User";
import Loader from "../../MicroComponents/Loader/Loader";

type Props = {
  posts: IPost[];
  isLoading: boolean;
};
const PostListContainer: FC<Props> = ({ posts, isLoading }) => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState<ICategory[]>([]);
  const [authors, setauthors] = useState<IUser[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await axios.get(
        process.env.REACT_APP_BASE_URL + "/categories"
      );
      setCategories(data);
    };

    getCategories();

    const getAuthors = async () => {
      try {
        const { data } = await axios.get(
          process.env.REACT_APP_BASE_URL + "/user"
        );
        setauthors(data);
      } catch (err) {
        console.log(err);
      }
    };

    getCategories();
    getAuthors();
  }, []);

  const handleCatChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== "0") {
      navigate(`/?category=${e.target.value}`);
      return;
    }
    navigate("/");
  };

  const handleAuthorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== "0") {
      navigate(`/?username=${e.target.value}`);
      return;
    }
    navigate("/");
  };

  //* Instance useRef for Debounce
  const debounceRef = useRef<NodeJS.Timeout>();

  //* Handles

  const onQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setSearch(e.target.value);
    }, 500);
  };

  const filterByTitle = () =>
    posts?.filter((post) => post.title.includes(search));

  return (
    <section
      className="section"
      style={{
        background:
          "radial-gradient(circle, rgba(35,108,180,0.7763480392156863) 0%, rgba(53,53,61,0.7679446778711485) 100%)",
      }}
    >
      <PostListTitle>Our Posts:</PostListTitle>
      {posts.length > 0 && (
        <InputSearch placeholder="Search a post" onChange={onQueryChange} />
      )}
      {(categories.length > 0 || authors.length > 0) && (
        <SelectWrapper>
          {categories.length > 0 && (
            <SelectFilter onChange={handleCatChange}>
              <option value={0}>Select Category</option>

              {categories?.map((category, idx) => (
                <option key={category._id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </SelectFilter>
          )}
          {authors.length > 0 && (
            <SelectFilter onChange={handleAuthorChange}>
              <option value={0}>Select Author</option>

              {authors.map((author, idx) => (
                <option key={author._id} value={author.username}>
                  {author.username}
                </option>
              ))}
            </SelectFilter>
          )}
        </SelectWrapper>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <PostList>
          {filterByTitle()?.map((post) => (
            <PostCard post={post} key={post._id} />
          ))}
        </PostList>
      )}
      {posts.length === 0 && !isLoading && (
        <h3 style={{ fontSize: "3em" }}>
          No post yet.{" "}
          <Link
            to="/createpost"
            style={{ color: "#324ea8", textDecoration: "underline" }}
          >
            Create a Post
          </Link>
        </h3>
      )}
    </section>
  );
};

export default PostListContainer;

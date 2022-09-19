import { FC } from "react";
import { Link } from "react-router-dom";
import { IPost } from "../../../Interfaces/Post";
import {
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  CardContent,
  CardInfo,
  CardCategory,
} from "./PostCardElements";

type Props = {
  post: IPost;
};

const PostCard: FC<Props> = ({
  post: { photo, title, desc, username, createdAt, categories, _id },
}) => {
  const ImgFolder = "http://localhost:8080/images/";
  return (
    <Link to={`/post/${_id}`}>
      <Card>
        {photo && <CardImage src={ImgFolder + photo} alt={title} />}
        <CardContent>
          {categories.length > 0 && (
            <div>
              <h6
                style={{
                  fontSize: ".8em",
                  color: "#00000099",
                  display: "inline",
                }}
              >
                Categories:
              </h6>
              {categories.map((category, idx) => {
                if (idx !== categories.length - 1) {
                  return <CardCategory key={idx}>{category},</CardCategory>;
                }
                return <CardCategory key={idx}>{category}.</CardCategory>;
              })}
            </div>
          )}
          <CardInfo dark={true}>
            <span style={{ opacity: ".8" }}>Author:</span> {username}
          </CardInfo>
          <CardInfo>Date: {new Date(createdAt).toDateString()}</CardInfo>
          <hr />
          <CardTitle>
            {title.length > 30 ? title.substring(0, 32) : title}...
          </CardTitle>
          <CardDescription>{desc.substring(0, 100)}...</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PostCard;

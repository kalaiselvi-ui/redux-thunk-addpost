import React from "react";
import { deletePost } from "../../actions/postAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import EllipsisText from "react-ellipsis-text";

const PostCard = ({ postItem }) => {
  const dispatch = useDispatch();
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card custom-card">
        <img
          src={`https://source.unsplash.com/collection/${postItem.id}/1600x900`}
          alt={postItem.title}
          className="card-img-top"
        />
        <Link
          to={`/updatePost/${postItem.id}`}
          className="btn btn-danger btn-edit"
        >
          <span class="material-icons">
            <MdEdit style={{ fontSize: "25px" }} />
          </span>
        </Link>
        <button
          className="btn btn-danger btn-delete"
          onClick={() => dispatch(deletePost(postItem.id))}
        >
          <span class="material-icons">
            <BsTrash style={{ fontSize: "25px" }} />
          </span>
        </button>
        <div className="card-body">
          <h6 className="text-secondary">{postItem.title}</h6>
          <EllipsisText text={postItem.body} length={"100"} />
        </div>
        <div className="card-footer">
          <Link to={`/post/${postItem.id}`} className="btn btn-primary">
            <span className="mb-1 mx-auto "> read more</span>
            {/* <span class="material-icons">
              <FcRight />
            </span> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

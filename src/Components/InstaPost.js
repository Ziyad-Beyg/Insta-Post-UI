import React, { useState } from "react";
import "./InstaPost.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SendIcon from "@mui/icons-material/Send";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import Tooltip from "@mui/material/Tooltip";
import InputBase from "@mui/material/InputBase";

import SimpleDialogDemo from "./Dialog";

function InstaPost({profilePic, userName, postPic, views, postedTime}) {
  const [liked, setliked] = useState(false);
  const [Saved, setSaved] = useState(false);
  return (
    <div className="mainContainer">
      <div className="PostUI">
        <div className="postHeader">
          <div className="postTitle">
            <img
              width="30px"
              height="30px"
              src={profilePic}
              alt="dp"
            />
            <p>{userName}</p>
          </div>
          <div className="postOption">
            <SimpleDialogDemo />
          </div>
        </div>
        <div className="postBody">
          <img
            width="100%"
            height="100%"
            src={postPic}
            alt="PostPic"
          />
        </div>
        <div className="postFooter">
          <div className="actionsDiv">
            <div className="actions">
              <Tooltip title="Like">
                <FavoriteBorderIcon
                  onClick={() => {
                    setliked(!liked);
                  }}
                  sx={[
                    { color: "black", fontSize: "28px", marginRight: "15px" },
                    {
                      "&:hover": {
                        color: "red",
                        cursor: "pointer",
                      },
                    },
                    liked && {
                      color: "red",
                    },
                  ]}
                />
              </Tooltip>
              <Tooltip title="Comment">
                <ModeCommentOutlinedIcon
                  sx={[
                    { fontSize: "28px", marginRight: "15px" },
                    {
                      "&:hover": {
                        color: "steelblue",
                        cursor: "pointer",
                      },
                    },
                  ]}
                />
              </Tooltip>
              <Tooltip title="Share">
                <SendIcon
                  sx={[
                    { fontSize: "28px", marginRight: "15px" },
                    {
                      "&:hover": {
                        color: "green",
                        cursor: "pointer",
                      },
                    },
                  ]}
                />
              </Tooltip>
            </div>
            <div className="save">
              <Tooltip title="Save">
                <BookmarkAddOutlinedIcon
                  onClick={() => {
                    setSaved(!Saved);
                  }}
                  sx={[
                    { fontSize: "24px", color: "gray" },
                    {
                      "&:hover": {
                        color: "black",
                        cursor: "pointer",
                      },
                    },
                    Saved && {
                      color: "black",
                    },
                  ]}
                />
              </Tooltip>
            </div>
          </div>
          <div className="viewsDiv">
            <p className="views">{views} Views</p>
            <p className="name">{userName}</p>
            <p className="allComments">View all comments</p>
            <p className="postedTime">{postedTime} ago</p>
          </div>
          <div className="commentDiv">
            <SentimentSatisfiedOutlinedIcon
              sx={[
                { fontSize: "26px" },
                {
                  "&:hover": {
                    cursor: "pointer",
                  },
                },
              ]}
            />
            <InputBase
              sx={{ ml: 2, mr: 2, flex: 1 }}
              placeholder="Add a comment..."
              inputProps={{ "aria-label": "search google maps" }}
            />
            <p>POST</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstaPost;

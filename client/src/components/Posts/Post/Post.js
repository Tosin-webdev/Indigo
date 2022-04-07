// import React from "react";
// import {
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
//   Button,
//   Typography,
// } from "@material-ui/core/";
// import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
// import DeleteIcon from "@material-ui/icons/Delete";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// import moment from "moment";
// import { useDispatch } from "react-redux";

// import { deletePost } from "../../../actions/posts";
// import useStyles from "./styles";

// const Post = ({ post, setCurrentId }) => {
//   const dispatch = useDispatch();
//   const classes = useStyles();
//   const user = JSON.parse(localStorage.getItem("profile"));

//   return (
//     <Card className={classes.card}>
//       <CardMedia
//         className={classes.media}
//         image={
//           post.selectedFile ||
//           "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
//         }
//         title={post.title}
//       />
//       <div className={classes.overlay}>
//         <Typography variant="h6">{post.name}</Typography>
//         <Typography variant="body2">
//           {moment(post.createdAt).fromNow()}
//         </Typography>
//       </div>
//       <div className={classes.overlay2}>
//         <Button
//           style={{ color: "white" }}
//           size="small"
//           onClick={() => setCurrentId(post._id)}
//         >
//           <MoreHorizIcon fontSize="medium" />
//         </Button>
//       </div>
//       <div className={classes.details}>
//         <Typography variant="body2" color="textSecondary" component="h2">
//           {post.tags.map((tag) => `#${tag} `)}
//         </Typography>
//       </div>
//       <Typography
//         className={classes.title}
//         gutterBottom
//         variant="h5"
//         component="h2"
//       >
//         {post.title}
//       </Typography>
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//           {post.message}
//         </Typography>
//       </CardContent>
//       <CardActions className={classes.cardActions}>
//         {(user?.result?.googleId === post?.creator ||
//           user?.result._id === post?.creator) && (
//           <Button
//             size="small"
//             color="secondary"
//             onClick={() => dispatch(deletePost(post._id))}
//           >
//             <DeleteIcon fontSize="small" /> Delete
//           </Button>
//         )}
//       </CardActions>
//     </Card>
//   );
// };

// export default Post;
import React from "react";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";

// import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { deletePost } from "../../../actions/posts";

import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  // const navigate = useNavigate;

  const user = JSON.parse(localStorage.getItem("profile"));

  // const openPost = () => navigate(`/posts/${post._id}`);

  return (
    <Card className={classes.card} raised elevation={6}>
      <CardMedia
        className={classes.media}
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      {/* <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div> */}

      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        missing property: {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          desctiption: {post.message}
        </Typography>
      </CardContent>

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>

      <CardActions className={classes.cardActions}>
        {/* <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="medium" />
        </Button> */}
        {/* <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post._id))}
        >
          <ThumbUpAltIcon fontSize="small" /> &nbsp; Like &nbsp;{" "}
          {post.likeCount}{" "}
        </Button> */}
        {(user?.result?.googleId === post?.creator ||
          user?.result._id === post?.creator) && (
          <Button
            size="small"
            color="primary"
            onClick={() => setCurrentId(post._id)}
          >
            <EditIcon fontSize="small" /> Edit
          </Button>
        )}

        {(user?.result?.googleId === post?.creator ||
          user?.result._id === post?.creator) && (
          <Button
            size="small"
            color="secondary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;

import React from "react";

export const  PostCard = ({post}) => {

	return (
		<div className="card text-white bg-dark mb-3">
			<div className="card-body">
				<h5 className="card-title">{post.title}</h5>
				<p className="card-text">{post.body}</p>
				<p className="card-text">
					<small className="text-muted">{post.username}</small>
				</p>
				<div className="card-footer text-muted text-center">
					user name goes here
				</div>
			</div>
		</div>
	)
};
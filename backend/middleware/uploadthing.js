const { createUploadthing } = require("uploadthing/express");

const f = createUploadthing();

const uploadRouter = {
	imageUploader: f({
		image: {
			maxFileSize: "4MB",
			maxFileCount: 1,
		},
	}).onUploadComplete((data) => {
		console.log("upload completed", data);
	}),
};

module.exports = uploadRouter;

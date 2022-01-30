const connection = require("../config/connection");

const userSeedData = require("./userSeedData.json");
const blogSeedData = require("./blogSeedData.json");
const commentSeedData = require("./commentSeedData.json");

const { User, Blog, Comment } = require("../models");

const seedDatabase = async () => {
  await connection.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  const users = await User.bulkCreate(userSeedData);
  console.log("\n----- USERS SEEDED-----\n");

  const blogs = await Blog.bulkCreate(blogSeedData);
  console.log("\n----- BLOGS SEEDED -----\n");

  const comments = await Comment.bulkCreate(commentSeedData);
  console.log("\n----- COMMENTS SEEDED-----\n");

  process.exit(0);
};

seedDatabase();

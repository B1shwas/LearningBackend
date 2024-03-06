require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const githubData = {
  login: "B1shwas",
  id: 108572524,
  node_id: "U_kgDOBnivbA",
  avatar_url: "https://avatars.githubusercontent.com/u/108572524?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/B1shwas",
  html_url: "https://github.com/B1shwas",
  followers_url: "https://api.github.com/users/B1shwas/followers",
  following_url: "https://api.github.com/users/B1shwas/following{/other_user}",
  gists_url: "https://api.github.com/users/B1shwas/gists{/gist_id}",
  starred_url: "https://api.github.com/users/B1shwas/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/B1shwas/subscriptions",
  organizations_url: "https://api.github.com/users/B1shwas/orgs",
  repos_url: "https://api.github.com/users/B1shwas/repos",
  events_url: "https://api.github.com/users/B1shwas/events{/privacy}",
  received_events_url: "https://api.github.com/users/B1shwas/received_events",
  type: "User",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 6,
  public_gists: 0,
  followers: 1,
  following: 1,
  created_at: "2022-07-02T09:42:42Z",
  updated_at: "2023-12-15T11:18:22Z",
};

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/login", (req, res) => {
  res.send(`<h2>Please Login to continue!!</h2>`);
});

app.get("/twitter", (req, res) => {
  res.send("Welcome to Nepal");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Visca Barca</h2>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});

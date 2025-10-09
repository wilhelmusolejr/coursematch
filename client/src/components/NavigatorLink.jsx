import React from "react";

export default function NavigatorLink({ link_name, link_path }) {
  let correctPath;

  const modifiedLink_path = link_path.toLowerCase();

  const isHashLink = modifiedLink_path.startsWith("#");

  if (link_path === "/") {
    correctPath = "/";
  } else if (isHashLink) {
    correctPath = "/" + modifiedLink_path;
  } else {
    correctPath = link_path;
  }

  return (
    <li>
      <a href={correctPath.toLowerCase()}>{link_name}</a>
    </li>
  );
}

import React from "react";
import { useState, useEffect } from "react";

export default function Image(props) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://graph.instagram.com/${props.id}?fields=id,media_type,media_url,username,timestamp&access_token=${props.access}`
    )
      .then((resp) => resp.json())
      .then((resp) => setUrl(resp.media_url));
  }, [props.id]);
  return <img src={url} width="300" style={{ margin: "10px" }} />;
}

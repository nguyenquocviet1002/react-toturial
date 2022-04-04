import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  useEffect(() => {
    props.handleDetail(id);
  }, []);

  let item = props.dataDetail;

  return (
    <div>
      <div>{item.id}</div>
      <div>{item.title}</div>
      <div>{item.time}</div>
    </div>
  );
}

export default Detail;

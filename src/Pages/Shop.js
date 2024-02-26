import React, { useEffect, useState } from "react";
import { Typography, Box, CircularProgress } from "@mui/material";
import LaundryItem from "../Components/LaundryItem";
import axios from "axios";
export default function Shop() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getData = async () => {
    console.log("hello")
    setLoading(true);
    const res = await axios.get("http://localhost:8081/posts/marketplace");
    console.log(res.data);
    setData(res.data);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  if(loading)  return (<Box
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: "#f4f4f4",
    marginTop: { md: "7vh" },
  }}
><CircularProgress/></Box>)

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
        marginTop: { md: "7vh" },
      }}
    >
      <Typography variant="h3" color="primary" sx={{ marginTop: "1rem" }}>
        Shop Page
      </Typography>
      <Typography variant="p" sx={{ marginBottom: "1rem" }}>
        Order your items for shopping
      </Typography>
      {/**Laundry Items */}
      {!loading && (
        <Box
          sx={{
            marginBottom: {
              xs: "7vh",
              md: "0",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-around",
            },
          }}
        >
          {data.map((item) => (
            <LaundryItem
              name={item.title}
              icon={item.image}
              price="TBD"
              userID={item.userID}
              postID={item.postID}
            />
          ))}
        </Box>
      )}
      {loading && (
        <div>
          <CircularProgress /> Loading Items...
        </div>
      )}
    </Box>
  );
}

import React from "react";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Paper,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";

const CarouselItem = (props) => {
  return (
    <Box
      component="img"
      src={props.imgSrc}
      sx={{ width: { xs: "90vw", md: "40vw" }, borderRadius: "50px" }}
    />
  );
};

export default function Home() {
  const carouselItems = [
    {
      title: "Helo",
      imgSrc:
        "https://i.postimg.cc/k5B1stD8/279141121-1300712810417502-7486514226930774330-n.png",
      key: 1,
    },
    {
      title: "Helo",
      imgSrc:
        "https://i.postimg.cc/h49C2n4C/279164757-1116694678908421-8047116068931737396-n.png",
      key: 2,
    },
    {
      title: "Helo",
      imgSrc:
        "https://i.postimg.cc/Wz6XzGfR/279284729-972516606793370-3176617229141192537-n.png",
      key: 3,
    },
    {
      title: "Helo",
      imgSrc:
        "https://i.postimg.cc/W3Z9LLG1/279640439-3165442637048046-8515269756640612024-n.png",
      key: 4,
    },
    // {
    //     title:"Helo",
    //     imgSrc:"https://i.postimg.cc/Y2QfKwZw/front-view-pile-towels-with-iron.jpg",
    //     key:4
    // },
    // {
    //     title:"Helo",
    //     imgSrc:"https://i.postimg.cc/65g9dD6y/young-african-american-man-doing-laundry.jpg",
    //     key:5
    // }
  ];
  return (
    <Box>
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
        <Typography variant="h3" color="primary">
          Buldr Marketplace
        </Typography>
        <Typography>
          Welcome to the best engineering product marketplace in Bangladesh
        </Typography>
        <Box
          sx={{
            minHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Carousel>
            {carouselItems.map((a) => (
              <CarouselItem key={a.key} imgSrc={a.imgSrc} />
            ))}
          </Carousel>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          minHeight: "100vh",
          backgroundColor: "#f4f4f4",
        }}
      ></Box>
    </Box>
  );
}

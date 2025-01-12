import { styled } from "@mui/material";
import { Link as linkcomponent } from "react-router-dom";

export const Visuallyhiddeninput = styled("input")({
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width:1
});

export const Link = styled(linkcomponent)({
    textDecoration: "none",
    color: "black",
    padding: "1rem",
    "&:hover": {
        backgroundColor: "rgba(174, 131, 247, 0.3)",
    }
});

export const InputBox = styled("input")({
    border: 0,
    padding: "0 3rem",
    width: "100%",
    height: "100%",
    fontSize: "1.2rem",
    backgroundColor: "rgb(242, 230, 243)",
    borderRadius: "1.5rem",
    outline: "none",
});
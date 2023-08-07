import * as React from "react";
import MyCv from "../../components/works/MyCv";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import LinkURL from "next/link";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

export interface WorksProps {}

const Works = (props: WorksProps) => {
  return (
    <>
      <div>
        <LinkURL href={"/"} passHref>
          <BsFillArrowLeftSquareFill
            size={50}
            className="hover:-translate-y-1 transition-transform cursor-pointer"
          />
        </LinkURL>
      </div>
      <hr />
      <Stack minHeight="100vh">
        <Box component="main" flexGrow={1}>
          <Box sx={{ height: "100%", position: "relative" }}>
            <MyCv />
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default Works;

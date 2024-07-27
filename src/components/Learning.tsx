import { ArrowBack, VolumeUp } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Learning = () => {
  const [count, setCount] = useState<number>(0);
  const param = useSearchParams()[0].get("language") as LangType
  const navigate = useNavigate();

  const nextHandler = (): void => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <Button onClick={count === 0 ? () => navigate('/') : () => setCount((prev) => prev - 1)}>
        <ArrowBack />
      </Button>
      <Container>

        <Typography m={"2rem 0"}>
          Learning Made Easy
        </Typography>

        <Stack direction={'row'} spacing={'1rem'}>
          <Typography variant={"h4"}>
            {count + 1} - {"Sample"}
          </Typography>
          <Typography color={'blue'} variant={"h4"}>
            : {"Lol"}
          </Typography>
          <Button >
            <VolumeUp />
          </Button>
        </Stack>
        <Button
          sx={{ margin: "3rem 0" }}
          variant="contained"
          fullWidth
          onClick={count === 7 ? () => navigate("/quiz") : nextHandler}
        >
          {count === 7 ? "Test" : "Next"}
        </Button>
      </Container>
    </>
  )
}

export default Learning
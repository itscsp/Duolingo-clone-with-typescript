import { useTheme } from "@emotion/react";
import { Button, Stack, Typography, useMediaQuery } from "@mui/material"
import { useNavigate } from "react-router-dom";

const languages = [
  {
    name: "Hindi",
    code: 'hi'
  },
  {
    name: "Tamil",
    code: 'ta'
  },
  {
    name: "Telugu",
    code: 'te'
  },
  {
    name: "Malayalam",
    code: "ml"
  },
]

const Home = () => {
  const navigate = useNavigate()
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const languageSelectHandler = (language: string): void => {
    navigate(`/learn?language=${language}`)
  };
  return (
    <>
      <Typography variant="h4" p={"2rem"} textAlign={"center"}>
        Welcome, Begin your journey of learning
      </Typography>
      <Stack
      direction={isSmallScreen ? 'column' : 'row'} // Stack vertically on small screens
      spacing={isSmallScreen ? '1rem' : '2rem'} // Adjust spacing based on screen size
      p={isSmallScreen ? '1rem' : '2rem'} // Adjust padding based on screen size
      alignItems="center"
      justifyContent="center"
    >
        {languages.map((i) => (
          <Button key={i.code} onClick={() => languageSelectHandler(i.code)} variant="contained">
            {i.name}
          </Button>
        ))}

      </Stack>
      <Typography textAlign={'center'}>
        Choose from language from above
      </Typography>
    </>
  )
}

export default Home

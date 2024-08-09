import { Button, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";

const languages = [
  {
    name: "Kannada",
    code: 'kn'
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

  const languageSelectHandler = (language: string): void => {
    navigate(`/learn?language=${language}`)
  };
  return (
    <>
      <Typography variant="h4" p={"2rem"} textAlign={"center"}>
        Welcome, Begin your journey of learning
      </Typography>
      <Stack
        direction={"row"}
        spacing={"2rem"}
        p={"2rem"}
        alignItems={'center'}
        justifyContent={'center'}

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
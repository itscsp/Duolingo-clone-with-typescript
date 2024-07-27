import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [result, setResult] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);
  const [ans, setAns] = useState<string>("");


  const navigate = useNavigate();

  const nextHandler = (): void => {
    setResult((prev) => [...prev, ans]);
    setCount((prev) => prev + 1);
    setAns("");
  }

  return (
    <>
      <Typography variant={"h3"}>
        Quiz
      </Typography>
      <br />
      <Typography variant={"h4"}>
        {count + 1} - {"Rondoms"}
      </Typography>

      <FormControl>
        <FormLabel
          sx={{
            mt: "2rem",
            mb: '1rem'
          }}
        >
          Meaning
        </FormLabel>
        <RadioGroup value={ans} onChange={(e) => setAns(e.target.value)}>
          <FormControlLabel
            value={'Lol'}
            control={<Radio />}
            label={"Option 1"}
          />
        </RadioGroup>
      </FormControl>
      <Button
        sx={{ m: "3rem 0" }} 
        variant="contained"
        fullWidth
        onClick={nextHandler}
        disabled={ans === ''}
      >
        {count === 7 ? 'Sumit' : 'Next'}
      </Button>

    </>
  )
}

export default Quiz
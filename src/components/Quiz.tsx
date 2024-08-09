import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveResult } from "../redux/slices";

const Quiz = () => {
  const [result, setResult] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);
  const [ans, setAns] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const { words } = useSelector((state: { root: StateType }) => state.root)



  const nextHandler = (): void => {
    setResult((prev) => [...prev, ans]);
    setCount((prev) => prev + 1);
    setAns("");
  }



  useEffect(() => {
    if (count + 1 > words.length) navigate("/result");
    dispatch(saveResult(result));
  }, [result]);

  return (
    <>
      <Typography variant={"h3"}>
        Quiz
      </Typography>
      <br />
      <Typography variant={"h4"}>
        {count + 1} - {words[count]?.word}
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
          {
            words[count]?.options.map((i, index) => (
            
              <FormControlLabel
                value={i}
                control={<Radio />}
                label={i}
                key={index}

              />
            ))
          }
        </RadioGroup>
      </FormControl>
      <Button
        sx={{ m: "3rem 0" }} 
        variant="contained"
        fullWidth
        onClick={nextHandler}
        disabled={ans === ''}
      >
        {count === words.length - 1 ? 'Sumit' : 'Next'}
      </Button>

    </>
  )
}

export default Quiz
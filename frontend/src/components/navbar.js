import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";

const Navbar = () => {
  const nav = useNavigate();

  const handleNavigate = (route) => {
    nav(`/${route}`);
  };

  return (
    <Box
      width="100vw"
      height="90px"
      bgcolor="#3461c1d9"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        direction="row"
        width="90%"
        justifyContent="space-between"
        alignItems="center"
        color="white"
      >
        <Typography fontSize="24px" fontWeight="bold">
          SocialHub
        </Typography>

        <Stack direction="row" spacing={3} alignItems="center">
          <Typography
            onClick={() => handleNavigate("aditya")}
            sx={{ cursor: "pointer" }}
          >
            <IoPersonOutline size={20} />
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;

import { Box, Stack, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { get_user_profile_data } from "../api/endpoints";
import { SERVER_URL } from "../constants/constants";

export default function UserProfile() {
  const get_username_from_url = () => {
    const url_split = window.location.pathname.split("/");
    return url_split[url_split.length - 1];
  };

  const [username, setUsername] = useState(get_username_from_url());

  useEffect(() => {
    setUsername(get_username_from_url()); // FIXED
  }, []);

  return (
    <Box display="flex" width="100%" justifyContent="center">
      <Stack width="75%">
        <Box width="100%" mt={5}>
          <UserDetails username={username} />
        </Box>
      </Stack>
    </Box>
  );
}

function UserDetails({ username }) {
  const [loading, setLoading] = useState(true);
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await get_user_profile_data(username);
        console.log("API:", data);

        setBio(data.bio);
        setProfileImage(data.profile_image);
        setFollowerCount(data.follower_count);
        setFollowingCount(data.following_count);
        console.log(SERVER_URL, data.profile_image);
      } catch (err) {
        console.log("error", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Stack width="100%" alignItems="flex-start" spacing={2}>
      {/* Username */}
      <Typography variant="h5" fontWeight="bold">
        @{username}
      </Typography>

      <Stack direction="row" spacing={4} alignItems="center">
        {/* Avatar */}
        <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            border: "2px solid #444",
            overflow: "hidden",
          }}
        >
          <img
            src={loading ? "" : `${SERVER_URL}${profileImage}`}
            alt="profile"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          {console.log(
            "IMAGE FINAL URL:",
            `http://127.0.0.1:8000/api${profileImage}`
          )}
        </Box>

        {/* Followers & Following */}
        <Stack spacing={1}>
          <Stack direction="row" spacing={4}>
            <Stack spacing={0.3}>
              <Typography variant="body2">Followers</Typography>
              <Typography variant="subtitle1">
                {loading ? "-" : followerCount}
              </Typography>
            </Stack>

            <Stack spacing={0.3}>
              <Typography variant="body2">Following</Typography>
              <Typography variant="subtitle1">
                {loading ? "-" : followingCount}
              </Typography>
            </Stack>
          </Stack>

          {/* EDIT PROFILE BELOW */}
          <Button variant="outlined" size="small" sx={{ mt: 1 }}>
            Edit Profile
          </Button>
        </Stack>
      </Stack>

      <Typography mt={1} fontSize={18}>
        {loading ? "-" : bio}
      </Typography>
    </Stack>
  );
}

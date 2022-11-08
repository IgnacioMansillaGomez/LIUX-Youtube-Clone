import { Stack } from "@mui/material";

import { categories } from "./utils/constants";

const Sidebar = () => {
  return (
    <Stack
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((element) => (
        <button>
          <span>{element.icon}</span>
          <span>{element.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;

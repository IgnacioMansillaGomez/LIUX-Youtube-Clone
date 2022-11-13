import { Stack } from "@mui/material";

import { categories } from "./utils/constants";

const Sidebar = () => {
  const selectedCategory = "New";

  return (
    <Stack
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((element) => (
        <button
          className="category-btn"
          style={{
            background: element.name === selectedCategory ? "#FC1503" : "",
          }}
        >
          <span>{element.icon}</span>
          <span>{element.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;

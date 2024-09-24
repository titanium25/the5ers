// StockManagement.tsx
import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import { Add } from "@mui/icons-material";

const StockManagement: React.FC = () => {
  const stocks = [
    {
      id: 1,
      name: "AAPL Apple Inc.",
      value: "$1,000 • 10 shares",
      currentValue: "$200",
      imageUrl:
        "https://cdn.usegalileo.ai/sdxl10/a59dcb12-1572-4eaf-90a1-23fee80d11d2.png",
    },
    {
      id: 2,
      name: "AAPL Apple Inc.",
      value: "$1,000 • 10 shares",
      currentValue: "$200",
      imageUrl:
        "https://cdn.usegalileo.ai/sdxl10/f85bae58-71d1-4313-9d4d-a31d15dc5b75.png",
    },
    {
      id: 3,
      name: "AAPL Apple Inc.",
      value: "$1,000 • 10 shares",
      currentValue: "$200",
      imageUrl:
        "https://cdn.usegalileo.ai/sdxl10/c500682d-32b0-44e2-a6de-3b16c4df7ba5.png",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#111418",
        color: "#FFFFFF",
        fontFamily: "Inter, Noto Sans, sans-serif",
      }}
    >
      {/* Main Content */}
      <Box sx={{ flexGrow: 1, maxWidth: 960, mx: "auto", p: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Stocks
        </Typography>
        <Box
          sx={{
            display: "flex",
            mt: 3,
            borderBottom: 1,
            borderColor: "#3c4753",
            mb: 3,
          }}
        >
          <Button
            sx={{
              color: "white",
              borderBottom: "3px solid white",
              borderRadius: 0,
            }}
          >
            All
          </Button>
          <Button
            sx={{
              color: "#9daab8",
              borderBottom: "3px solid transparent",
              borderRadius: 0,
            }}
          >
            Open
          </Button>
          <Button
            sx={{
              color: "#9daab8",
              borderBottom: "3px solid transparent",
              borderRadius: 0,
            }}
          >
            Closed
          </Button>
        </Box>
        {stocks.map((stock) => (
          <Box
            key={stock.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              bgcolor: "#111418",
              p: 2,
              mb: 2,
              borderRadius: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar
                variant="rounded"
                src={stock.imageUrl}
                sx={{ width: 56, height: 56 }}
              />
              <Box>
                <Typography variant="body1">{stock.name}</Typography>
                <Typography variant="body2" sx={{ color: "#9daab8" }}>
                  {stock.value}
                </Typography>
              </Box>
            </Box>
            <Typography>{stock.currentValue}</Typography>
          </Box>
        ))}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#293038",
              color: "white",
              borderRadius: 2,
              textTransform: "none",
              "&:hover": {
                bgcolor: "#3c4753",
              },
            }}
            startIcon={<Add />}
          >
            Add
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default StockManagement;

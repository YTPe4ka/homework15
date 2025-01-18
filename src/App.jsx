import React, { useState } from "react";
import {
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  Modal,
  Box,
  Menu,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Slider,
  Switch,
  Avatar,
  Badge,
  Alert,
  Snackbar,
  CircularProgress
} from "@mui/material";

const App = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [checked, setChecked] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleSnackbarOpen = () => setSnackbarOpen(true);
  const handleSnackbarClose = () => setSnackbarOpen(false);

  return (
    <div style={{ padding: "20px" }}>
      {/* Button */}
      <Button variant="contained" color="primary" onClick={handleModalOpen}>
        Open Modal
      </Button>

      {/* TextField */}
      <div style={{ margin: "20px 0" }}>
        <TextField label="Text Field" variant="outlined" fullWidth />
      </div>

      {/* Card */}
      <Card style={{ maxWidth: 300, margin: "20px 0" }}>
        <CardContent>
          <Typography variant="h5">Card Title</Typography>
          <Typography variant="body2" color="text.secondary">
            This is an example of a card.
          </Typography>
        </CardContent>
      </Card>

      {/* Modal */}
      <Modal open={open} onClose={handleModalClose}>
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            boxShadow: 24,
            borderRadius: "8px",
          }}
        >
          <Typography variant="h6">This is a modal</Typography>
          <Typography variant="body1">Some modal content here.</Typography>
          <Button onClick={handleModalClose} style={{ marginTop: "10px" }}>
            Close
          </Button>
        </Box>
      </Modal>

      {/* Menu */}
      <div>
        <Button variant="outlined" onClick={handleMenuOpen}>
          Open Menu
        </Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
          <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
          <MenuItem onClick={handleMenuClose}>Option 3</MenuItem>
        </Menu>
      </div>

      {/* Checkbox */}
      <div style={{ margin: "20px 0" }}>
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />}
          label="Checkbox Example"
        />
      </div>

      {/* Slider */}
      <div style={{ margin: "20px 0" }}>
        <Typography gutterBottom>Slider</Typography>
        <Slider defaultValue={30} aria-labelledby="slider" />
      </div>

      {/* Switch */}
      <div style={{ margin: "20px 0" }}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={() => setChecked(!checked)} />}
          label="Switch Example"
        />
      </div>

      {/* Avatar */}
      <div style={{ margin: "20px 0" }}>
        <Avatar alt="User Avatar" src="https://via.placeholder.com/150" />
      </div>

      {/* Badge */}
      <div style={{ margin: "20px 0" }}>
        <Badge badgeContent={4} color="secondary">
          <Button variant="outlined">Notifications</Button>
        </Badge>
      </div>

      {/* Alert */}
      <div style={{ margin: "20px 0" }}>
        <Alert severity="info">This is an info alert</Alert>
      </div>

      {/* Snackbar */}
      <div style={{ margin: "20px 0" }}>
        <Button variant="contained" onClick={handleSnackbarOpen}>Show Snackbar</Button>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          message="This is a snackbar!"
        />
      </div>

      {/* Circular Progress */}
      <div style={{ margin: "20px 0" }}>
        <CircularProgress />
      </div>
    </div>
  );
};

export default App;

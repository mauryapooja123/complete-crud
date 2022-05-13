import React from "react";
//import { Grid, TextField, Button, Paper } from "@mui/material";
//import { Container } from "@mui/material";
import { TextField, Button, Container, Grid, Paper } from "@material-ui/core";

function Registaion(props) {
  return (
    <div>
      <Container maxWidth="sm">
        <Grid align="center">
          <h2> Login Form</h2>
        </Grid>

        <Grid item>
          <Grid className="login-form">
            <Paper
              //variant="elevation"
              // elevation={2}
              className="login-background"
            >
              <Grid item>
                <form>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <TextField
                        type="text"
                        placeholder="name"
                        fullWidth
                        name="name"
                        variant="outlined"
                        value={props.user.name}
                        onChange={props.handleChange}
                        required
                      />
                      <Grid item>
                        <TextField
                          type="email"
                          placeholder="Email"
                          fullWidth
                          name="email"
                          variant="outlined"
                          value={props.user.email}
                          onChange={props.handleChange}
                          required
                          autoFocus
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          type="password"
                          placeholder="Password"
                          fullWidth
                          name="password"
                          variant="outlined"
                          value={props.user && props.user.password}
                          onChange={props.handleChange}
                          required
                        />
                      </Grid>

                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          className="button-block"
                          onClick={props.handleSubmit}
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Registaion;

import AssignmentIcon from "@material-ui/icons/Assignment";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Paper, AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import ToDoAdder from "./components/ToDoAdder";
import ToDoContainer from "./components/ToDoContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appContainer: {
    paddingLeft: "5vw",
    paddingRight: "5vw",
    marginTop: "5vh",
  },
  wrapper: {
    textAlign: "center",
    width: "100%",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <AssignmentIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            REDUX TODOS
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.appContainer}>
        <Paper className={classes.wrapper} elevation={0}>
          {/** Todo Adder */}
          <ToDoAdder />
          {/** Todo List */}
          <ToDoContainer />
        </Paper>
      </Container>
    </Box>
  );
};
export default App;

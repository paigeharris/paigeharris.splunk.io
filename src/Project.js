import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 1000,
  },
  media: {
    height: 400,
  },
};

function Project(props) {
  const project = props.project;
  const { classes } = props;
  return (
    <div className="project">
      <Card className={classes.card+" cardpaper"}>
        <CardMedia
          className={classes.media+" cardmedia"}
          image={project.img}
          title={project.name}
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            {project.name}
          </Typography>
          <Typography component="p">
            {project.desc}
          </Typography>
        </CardContent>
        <CardActions className="projectbuttons">
          <a href={project.live_link} target="_blank">
          <Button size="small" color="primary">
            Live Site
          </Button>
          </a>

          <a href={project.live_repo} target="_blank">
          <Button size="small" color="primary">
            Github Repo
          </Button>
          </a>

        </CardActions>
      </Card>
    </div>
  );
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project);

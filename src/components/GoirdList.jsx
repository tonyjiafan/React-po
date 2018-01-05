import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
// import { getList } from '../api/list';

import image1 from '../static/images/logo.png';
import image2 from '../static/images/header.png';
import image3 from '../static/images/7.png';
import image4 from '../static/images/9.png';
import image5 from '../static/images/11.png';
import image6 from '../static/images/12.png';
import image7 from '../static/images/13.png';
import image8 from '../static/images/3.png';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // background: theme.palette.background.paper,
    background: '#E8EAF6',
    paddingBottom: 40,
  },
  gridList: {
    width: '80%',
    height: 'auto',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'pink',
  },
});

const tileData = [
 {
   img: image1,
   title: 'kobe',
   author: 'author',
   featured: true,
 },
 {
   img: image2,
   title: 'Tony',
   author: 'author',
   featured: true,
 },
 {
   img: image3,
   title: 'header',
   author: 'author',
   featured: true,
 },
 {
   img: image4,
   title: 'sdjjs',
   author: 'author',
   featured: true,
 },
 {
   img: image5,
   title: 'sidh',
   author: 'author',
   featured: true,
 },
 {
   img: image6,
   title: 'dsbj',
   author: 'author',
   featured: true,
 },
 {
   img: image7,
   title: '6666fh',
   author: 'author',
   featured: true,
 },
 {
   img: image8,
   title: 'fujgj',
   author: 'author',
   featured: true,
 },
];

function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <Subheader component="div">Time</Subheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img} style={{minHeight: 220,}}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);

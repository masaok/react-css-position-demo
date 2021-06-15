import { makeStyles } from '@material-ui/core/styles'

import { Helmet } from 'react-helmet'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'blue',
    textAlign: 'center',
    fontSize: 20,
    alignItems: 'center',
    overflow: 'auto',
    // maxHeight: 500,
    minWidth: '50vw',
    margin: theme.spacing(3),
  },

  parent: {
    display: 'flex',
    position: 'relative',
    width: '50%',
    backgroundColor: 'pink',
    aspectRatio: 1,
  },

  child1: {
    display: 'flex',
    position: 'absolute',
    backgroundColor: 'red',
    width: '50%',
    aspectRatio: 1,
  },

  child2: {
    display: 'flex',
    position: 'absolute',
    width: '50%',
    left: 10,
    top: 10,
    backgroundColor: 'green',
    aspectRatio: 1,
  },
}))

const PositionAbsoluteDemo = props => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <Helmet>
        <title>Position Absolute Demo</title>
      </Helmet>
      <div className={classes.parent}>
        PARENT
        <div className={classes.child1}>CHILD 1</div>
        <div className={classes.child2}>CHILD 2</div>
      </div>
    </div>
  )
}

export default PositionAbsoluteDemo

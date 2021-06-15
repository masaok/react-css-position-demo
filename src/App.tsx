import './App.css'

import { Helmet } from 'react-helmet'

const App = (props: any) => {
  const classes = useStyles(props)

  const [name] = useState('MASAO')

  console.log('HEYYYYY')

  // const doStuff = () => {
  //   console.log('DOING STUFF')
  // }

  return (
    <div className={classes.root}>
      <Helmet>
        <title>React Scrolling Demo - {name}</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className={classes.root}>
            <Switch>
              <Route path="/" component={Header} />
            </Switch>

            <main className={classes.content}>
              <Switch>
                <Route exact path="/" component={ScrollInsideContainer} />
                <Route path="/scroll-inside-container" component={ScrollInsideContainer} />
                <Route path="/paper-scroll-demo" component={PaperScrollDemo} />
                <Route path="/paper-grid-scroll-demo" component={PaperGridScrollDemo} />
                <Route path="/paper-grid-scrollbar-demo" component={PaperGridScrollBarDemo} />
                <Route path="/state-variable-copy-demo" component={StateVariableCopyDemo} />
              </Switch>
            </main>

            <Switch>
              <Route path="/" component={Footer} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App

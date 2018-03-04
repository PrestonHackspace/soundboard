import * as React from 'react';
import { WithStyles, withStyles, createMuiTheme, MuiThemeProvider, Paper } from 'material-ui';
import { Styles, ClassNames } from './style';
import { SoundList } from '../SoundList';
import { BrowserRouter } from 'react-router-dom';

const theme = createMuiTheme({ palette: { type: 'light' as 'light' } });

interface Props { }
interface State { }

export const App: React.ComponentType<Props> = withStyles(Styles)(
  class App extends React.PureComponent<Props & WithStyles<ClassNames>, State> {
    render() {
      return (
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <Paper className={this.props.classes.App}>
              <SoundList sounds={[1, 2, 3, 4, 5, 6]} />
            </Paper>
          </BrowserRouter>
        </MuiThemeProvider>
      );
    }
  },
);

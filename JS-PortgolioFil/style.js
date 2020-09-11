import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'main': {
    'padding': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }]
  },
  'main h1': {
    'fontSize': [{ 'unit': 'px', 'value': 42 }],
    'color': '#333',
    'fontWeight': '700'
  },
  'main p': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'color': '#687074',
    'width': [{ 'unit': '%H', 'value': 0.7 }],
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'main p a': {
    'textDecoration': 'none',
    'color': '#ec1c23',
    'fontWeight': '900'
  },
  'main ul': {
    'marginTop': [{ 'unit': 'px', 'value': 50 }]
  },
  'main ul li': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#333' }],
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'fontWeight': '700',
    'cursor': 'pointer',
    'transition': 'all .5s ease',
    'color': '#333'
  },
  'main ul liactive': {
    'backgroundColor': '#ec1c23',
    'color': '#FFF',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec1c23' }]
  },
  'main ul li:hover': {
    'backgroundColor': '#ec1c23',
    'color': '#FFF',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ec1c23' }]
  },
  'main ul li:last-of-type': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'main ul li:nth-of-type(3)': {
    'flexGrow': '2'
  },
  'main ul li:nth-of-type(4)': {
    'flexGrow': '2'
  },
  'main ul li:nth-of-type(5)': {
    'flexGrow': '2'
  },
  'main container-fluid': {
    'overflow': 'hidden',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'main container-fluid col-md-3': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'float': 'left',
    'transition': 'all 5s ease-in-out'
  },
  'main container-fluid img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    '<w767': {
      'marginBottom': [{ 'unit': 'px', 'value': 15 }]
    }
  }
});

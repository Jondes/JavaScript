import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'import': 'url(https://fonts.googleapis.com/css?family=Raleway)',
  'body': {
    'backgroundColor': '#f6ede5'
  },
  'a': {
    'fontFamily': ''Raleway', sans-serif'
  },
  'p': {
    'fontFamily': ''Raleway', sans-serif'
  },
  'cont-contactInfo': {
    'float': 'left',
    'paddingRight': [{ 'unit': '%H', 'value': 0.05 }],
    'width': [{ 'unit': '%H', 'value': 0.45 }]
  },
  'cont-contactInfo h3': {
    'fontSize': [{ 'unit': 'px', 'value': 28 }]
  },
  'cont-contactInfo h4': {
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'fontWeight': 'normal',
    'textTransform': 'uppercase'
  },
  'cont-contactInfo h4section': {
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'cont-contactInfo p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'cont-contactInfo p>a': {
    'textTransform': 'uppercase',
    'fontWeight': 'bold'
  },
  'cont-contactBtn': {
    'height': [{ 'unit': 'px', 'value': 359 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': 'px', 'value': 574 }],
    'position': 'relative',
    'perspective': '800px'
  },
  'cont-contactBtn cont-flip': {
    'position': 'absolute',
    'transition': 'transform 0.5s',
    'transformStyle': 'preserve-3d',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'cont-contactBtn cont-flip front': {
    'display': 'block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'absolute',
    'backfaceVisibility': 'hidden'
  },
  'cont-contactBtn cont-flip back': {
    'display': 'block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'absolute',
    'backfaceVisibility': 'hidden'
  },
  'cont-contactBtn cont-flip front': {
    'backgroundColor': '#00E869'
  },
  'cont-contactBtn cont-flip back': {
    'backgroundColor': '#fff',
    'transform': 'rotateX(180deg)'
  },
  'cont-contactBtn btn': {
    'marginTop': [{ 'unit': 'px', 'value': 155 }]
  },
  'cont-contactBtn cont-flipflipped': {
    'transform': 'rotateX(180deg)'
  },
  'cont-contactBtn contact-form': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': '%H', 'value': 0.1 }, { 'unit': 'px', 'value': 0 }, { 'unit': '%H', 'value': 0.1 }],
    'marginTop': [{ 'unit': 'px', 'value': 50 }],
    'width': [{ 'unit': '%H', 'value': 0.8 }]
  },
  'cont-contactBtn contact-form input': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#808080' }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'textTransform': 'uppercase'
  },
  'cont-contactBtn contact-form textarea': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#808080' }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'textTransform': 'uppercase'
  },
  'cont-contactBtn contact-form input[type="text"]': {
    'float': 'left',
    'marginBottom': [{ 'unit': 'px', 'value': 8 }],
    'paddingLeft': [{ 'unit': '%H', 'value': 0.03 }],
    'width': [{ 'unit': '%H', 'value': 0.449 }]
  },
  'cont-contactBtn contact-form gutter': {
    'marginRight': [{ 'unit': '%H', 'value': 0.027999999999999997 }]
  },
  'cont-contactBtn contact-form textarea': {
    'height': [{ 'unit': 'px', 'value': 106 }],
    'paddingLeft': [{ 'unit': '%H', 'value': 0.03 }],
    'marginBottom': [{ 'unit': 'px', 'value': 22 }],
    'width': [{ 'unit': '%H', 'value': 0.9620000000000001 }]
  },
  'cont-contactBtn contact-form input[type="submit"]': {
    'backgroundColor': '#00E869',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'color': '#fff',
    'height': [{ 'unit': 'px', 'value': 45 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'maxWidth': [{ 'unit': 'px', 'value': 93 }],
    'textAlign': 'center'
  },
  'cont-contactBtn close': {
    'display': 'block',
    'height': [{ 'unit': 'px', 'value': 19 }],
    'width': [{ 'unit': 'px', 'value': 19 }],
    'backgroundImage': 'url(close.jpg)',
    'backgroundSize': '10px',
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'center',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 15 }],
    'right': [{ 'unit': '%H', 'value': 0.03 }]
  },
  'btn': {
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': '#fff' }, { 'unit': 'string', 'value': 'solid' }],
    'color': '#fff',
    'display': 'block',
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'fontWeight': 'normal',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'maxWidth': [{ 'unit': 'px', 'value': 280 }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    'textTransform': 'uppercase',
    'textDecoration': 'none',
    'width': [{ 'unit': '%H', 'value': 1 }]
  }
});

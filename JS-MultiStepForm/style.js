import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'background': '#ff8181',
    'fontFamily': ''Lato', sans-serif'
  },
  '#progressb': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'position': 'fixed',
    'background': '#ff3d3d',
    'height': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': 'px', 'value': 0 }],
    'transition': 'width 0.2s ease-in-out'
  },
  'h1': {
    'color': '#333'
  },
  'center': {
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  '#form': {
    'background': '#fff',
    'color': '#333',
    'position': 'relative',
    'width': [{ 'unit': 'px', 'value': 410 }],
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 15 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.14)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.14),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.12)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.12),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': -5 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.3)' }],
    'transition': 'transform .1s ease-in-out',
    'borderRadius': '30px'
  },
  '#formclose': {
    'width': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'transition': '.8s ease-in-out',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0)' }]
  },
  'next': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 20 }],
    'bottom': [{ 'unit': 'px', 'value': 10 }],
    'fontSize': [{ 'unit': 'px', 'value': 40 }],
    'color': '#ff3d3d',
    'float': 'right',
    'cursor': 'pointer'
  },
  'next:hover': {
    'color': '#333'
  },
  'wrong next': {
    'color': '#ff2d26'
  },
  'close next': {
    'color': '#fff'
  },
  '#container': {
    'position': 'relative',
    'opacity': '0',
    'width': [{ 'unit': 'px', 'value': 350 }],
    'marginTop': [{ 'unit': 'px', 'value': 25 }],
    'transition': 'opacity .3s ease-in-out'
  },
  '#container input': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'fontWeight': 'bold',
    'outline': '0',
    'background': 'transparent',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  '#placeholder': {
    'position': 'absolute',
    'pointerEvents': 'none',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'fontWeight': 'bold',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'transition': '.2s ease-in-out'
  },
  '#container input:valid+#placeholder': {
    'top': [{ 'unit': 'px', 'value': -15 }],
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'fontWeight': 'normal',
    'color': '#333'
  },
  '#bottomline': {
    'position': 'absolute',
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ff3d3d' }],
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 5 }],
    'transition': 'width .6s ease-in-out'
  },
  'wrong #bottomline': {
    'borderColor': '#ff2d26'
  }
});

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'import': 'url("https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap")',
  'body': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'fontFamily': ''Josefin Sans', sans-serif',
    'backgroundColor': '#B8F0FF',
    'overflow': 'hidden',
    'position': 'relative',
    'outline': 'none',
    'perspective': '1000px'
  },
  'html': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'fontFamily': ''Josefin Sans', sans-serif',
    'backgroundColor': '#B8F0FF',
    'overflow': 'hidden',
    'position': 'relative',
    'outline': 'none',
    'perspective': '1000px'
  },
  'main': {
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 730 }],
    'height': [{ 'unit': 'px', 'value': 420 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'boxSizing': 'border-box',
    'transform': 'translate(-50%, -50%)',
    'transition': 'all 0.195s ease',
    'transformStyle': 'preserve-3d'
  },
  'mainis-rotated-left': {
    'transform': 'translate(-50%, -50%) rotateY(-4deg)'
  },
  'mainis-rotated-right': {
    'transform': 'translate(-50%, -50%) rotateY(4deg)'
  },
  'main sideb': {
    'backgroundColor': 'white',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'float': 'left',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }],
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'flex-start',
    'alignItems': 'center'
  },
  'main right-wrapper': {
    'backgroundColor': 'white',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'float': 'left',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }],
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'flex-start',
    'alignItems': 'center'
  },
  'main header': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }],
    'display': 'flex',
    'justifyContent': 'space-between',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'main header i': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'cursor': 'pointer'
  },
  'main header span': {
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }],
    'fontWeight': '700'
  },
  'main right-wrapper': {
    'backgroundColor': '#f05855',
    'color': 'white',
    'transformOrigin': 'left center',
    'transform': 'rotateY(110deg)',
    'transition': 'all 0.5s'
  },
  'main right-wrapperis-active': {
    'transform': 'rotateY(0deg)'
  },
  'main right-wrapper header': {
    'textAlign': 'left',
    'justifyContent': 'center'
  },
  'main right-wrapper day': {
    'fontSize': [{ 'unit': 'em', 'value': 12 }],
    'textIndent': '-12px',
    'display': 'block'
  },
  'main right-wrapper month': {
    'fontSize': [{ 'unit': 'em', 'value': 2.5 }]
  },
  'main sideb showDate': {
    'color': 'white',
    'textAlign': 'right',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'main sideb showDate i': {
    'cursor': 'pointer',
    'background': '#f05855',
    'borderRadius': '4px',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 12 }],
    'transform': 'scale(1)',
    'transition': 'all 0.3s'
  },
  'main sideb showDate iis-active': {
    'transform': 'scale(-1)'
  },
  'main sideb table': {
    'textAlign': 'center',
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'tableLayout': 'fixed',
    'borderCollapse': 'collapse'
  },
  'main sideb table tbody:before': {
    'content': '"-"',
    'display': 'block',
    'lineHeight': [{ 'unit': 'em', 'value': 0.75 }],
    'color': 'transparent'
  },
  'main sideb table th': {
    'color': '#f05855',
    'fontSize': [{ 'unit': 'em', 'value': 0.75 }],
    'textTransform': 'uppercase',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'main sideb table td': {
    'padding': [{ 'unit': 'px', 'value': 11 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 11 }, { 'unit': 'px', 'value': 5 }],
    'color': '#ced0ce',
    'fontSize': [{ 'unit': 'em', 'value': 0.75 }],
    'transition': 'all 0.3s',
    'position': 'relative'
  },
  'main sideb table td::before': {
    'content': '""',
    'display': 'none',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'height': [{ 'unit': 'px', 'value': 2 }],
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'top': [{ 'unit': '%V', 'value': 1 }],
    'transform': 'translate(-50%, -8px)',
    'backgroundColor': '#f05855'
  },
  'main sideb table tdcurrentDay::before': {
    'display': 'block'
  },
  'main sideb table tdselectable': {
    'color': '#303633',
    'cursor': 'pointer'
  },
  'main sideb table tdselectable:hover': {
    'background': '#f05855',
    'color': 'white'
  },
  'main sideb table tdbetween': {
    'backgroundColor': '#333',
    'color': 'white'
  },
  'main sideb table tdactive': {
    'background': '#f05855',
    'color': 'white'
  },
  'main sideb table tdhover': {
    'background': '#f05855',
    'color': 'white'
  },
  'main right-wrapperis-active': {
    'transform': 'rotateY(0deg)'
  },
  'main right-wrapper header': {
    'textAlign': 'left',
    'justifyContent': 'center'
  },
  'main right-wrapper day': {
    'fontSize': [{ 'unit': 'em', 'value': 12 }],
    'textIndent': '-12px',
    'display': 'block'
  },
  'main right-wrapper month': {
    'fontSize': [{ 'unit': 'em', 'value': 2.5 }]
  },
  'main sideb showDate': {
    'color': 'white',
    'textAlign': 'right',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'main sideb showDate i': {
    'cursor': 'pointer',
    'background': '#f05855',
    'borderRadius': '4px',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 12 }],
    'transform': 'scale(1)',
    'transition': 'all 0.3s'
  },
  'main sideb showDate iis-active': {
    'transform': 'scale(-1)'
  },
  'main sideb table': {
    'textAlign': 'center',
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'tableLayout': 'fixed',
    'borderCollapse': 'collapse'
  },
  'main sideb table tbody:before': {
    'content': '"-"',
    'display': 'block',
    'lineHeight': [{ 'unit': 'em', 'value': 0.75 }],
    'color': 'transparent'
  },
  'main sideb table th': {
    'color': '#f05855',
    'fontSize': [{ 'unit': 'em', 'value': 0.75 }],
    'textTransform': 'uppercase',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'main sideb table td': {
    'padding': [{ 'unit': 'px', 'value': 11 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 11 }, { 'unit': 'px', 'value': 5 }],
    'color': '#ced0ce',
    'fontSize': [{ 'unit': 'em', 'value': 0.75 }],
    'transition': 'all 0.3s',
    'position': 'relative'
  },
  'main sideb table td::before': {
    'content': '""',
    'display': 'none',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'height': [{ 'unit': 'px', 'value': 2 }],
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'top': [{ 'unit': '%V', 'value': 1 }],
    'transform': 'translate(-50%, -8px)',
    'backgroundColor': '#f05855'
  },
  'main sideb table tdcurrentDay::before': {
    'display': 'block'
  },
  'main sideb table tdselectable': {
    'color': '#303633',
    'cursor': 'pointer'
  },
  'main sideb table tdselectable:hover': {
    'background': '#f05855',
    'color': 'white'
  },
  'main sideb table tdbetween': {
    'backgroundColor': '#333',
    'color': 'white'
  },
  'main sideb table tdactive': {
    'background': '#f05855',
    'color': 'white'
  },
  'main sideb table tdhover': {
    'background': '#f05855',
    'color': 'white'
  }
});

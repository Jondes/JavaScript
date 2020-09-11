import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    'boxSizing': 'border-box'
  },
  'body': {
    'background': '#2d2013',
    'color': '#fff',
    'fontFamily': 'Verdana, Geneva, Tahoma, sans-serif',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'container': {
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'maxWidth': [{ 'unit': 'px', 'value': 800 }],
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'justifyContent': 'center',
    'textAlign': 'center'
  },
  'flex': {
    'display': 'flex'
  },
  'input': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dedede' }],
    'borderTopLeftRadius': '4px',
    'borderBottomLeftRadius': '4px',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 10 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'button': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dedede' }],
    'borderTopLeftRadius': '4px',
    'borderBottomLeftRadius': '4px',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 10 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'input[type='text']': {
    'width': [{ 'unit': 'px', 'value': 300 }],
    '<w500': {
      'width': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'search-btn': {
    'cursor': 'pointer',
    'borderLeft': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '0',
    'borderTopRightRadius': '4px',
    'borderBottomRightRadius': '4px'
  },
  'random-btn': {
    'cursor': 'pointer',
    'marginLeft': [{ 'unit': 'px', 'value': 10 }],
    'borderTopRightRadius': '4px',
    'borderBottomRightRadius': '4px'
  },
  'meals': {
    'display': 'grid',
    'gridTemplateColumns': 'repeat(4, 1fr)',
    'gridGap': '20px',
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    '<w800': {
      'gridTemplateColumns': 'repeat(3, 1fr)'
    },
    '<w700': {
      'gridTemplateColumns': 'repeat(2, 1fr)'
    }
  },
  'meal': {
    'cursor': 'pointer',
    'position': 'relative',
    'height': [{ 'unit': 'px', 'value': 180 }],
    'width': [{ 'unit': 'px', 'value': 180 }],
    'textAlign': 'center'
  },
  'meal img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'border': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': '#fff' }, { 'unit': 'string', 'value': 'solid' }],
    'borderRadius': '2px'
  },
  'meal-info': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'background': 'rgba(0, 0, 0, 0.7)',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'transition': 'opacity 0.2s ease-in',
    'opacity': '0'
  },
  'meal:hover meal-info': {
    'opacity': '1'
  },
  'single-meal': {
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': '%H', 'value': 0.7 }]
  },
  'single-meal img': {
    'width': [{ 'unit': 'px', 'value': 300 }],
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'border': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': '#fff' }, { 'unit': 'string', 'value': 'solid' }],
    'borderRadius': '2px'
  },
  'single-meal-info': {
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': '#e09850' }, { 'unit': 'string', 'value': 'dashed' }],
    'borderRadius': '5px'
  },
  'single-meal p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 0.5 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'single-meal ul': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'listStyleType': 'none'
  },
  'single-meal ul li': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ededed' }],
    'borderRadius': '5px',
    'backgroundColor': '#fff',
    'display': 'inline-block',
    'color': '#2d2013',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'fontWeight': 'bold',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  }
});

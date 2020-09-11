import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Code By Webdevtrick ( https://webdevtrick.com )
  'import': 'url('https://fonts.googleapis.com/css?family=Muli&display=swap')',
  '*': {
    'boxSizing': 'border-box'
  },
  'body': {
    'backgroundColor': 'rgb(230, 233, 62)',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'perspective': '1000px'
  },
  'slider': {
    'position': 'relative',
    'height': [{ 'unit': 'px', 'value': 400 }],
    'width': [{ 'unit': 'px', 'value': 400 }],
    'transformStyle': 'preserve-3d',
    'animation': 'rotate 4s linear infinite',
    'screen&&<w500': {
      'height': [{ 'unit': 'px', 'value': 280 }],
      'width': [{ 'unit': 'px', 'value': 280 }]
    }
  },
  'slide': {
    'opacity': '0',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'slidevisible': {
    'opacity': '1'
  },
  'slide img': {
    'objectFit': 'cover',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  }
});

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'fontFamily': ''Open Sans', sans-serif',
    'backgroundColor': 'black'
  },
  '#container': {
    'width': [{ 'unit': 'px', 'value': 1000 }],
    'height': [{ 'unit': 'px', 'value': 550 }],
    'backgroundImage': 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(bgImg.jpg)',
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }]
  },
  '#calculator': {
    'width': [{ 'unit': 'px', 'value': 320 }],
    'height': [{ 'unit': 'px', 'value': 520 }],
    'backgroundColor': '#eaedef',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'top': [{ 'unit': 'px', 'value': 20 }],
    'position': 'relative',
    'borderRadius': '5px',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.19)' }]
  },
  '#result': {
    'height': [{ 'unit': 'px', 'value': 120 }]
  },
  '#history': {
    'textAlign': 'right',
    'height': [{ 'unit': 'px', 'value': 20 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }],
    'paddingTop': [{ 'unit': 'px', 'value': 20 }],
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'color': '#919191'
  },
  '#output': {
    'textAlign': 'right',
    'height': [{ 'unit': 'px', 'value': 60 }],
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }],
    'fontSize': [{ 'unit': 'px', 'value': 30 }]
  },
  '#output-text': {
    'width': [{ 'unit': 'px', 'value': 250 }],
    'height': [{ 'unit': 'px', 'value': 120 }],
    'float': 'left'
  },
  '#microphone': {
    'height': [{ 'unit': 'px', 'value': 30 }],
    'width': [{ 'unit': 'px', 'value': 30 }],
    'float': 'right',
    'backgroundImage': 'url(mic.png)',
    'backgroundSize': '100% 100%',
    'borderRadius': '50%',
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'marginTop': [{ 'unit': 'px', 'value': 45 }]
  },
  'record': {
    'animation': 'microphone-animation 1.5s infinite'
  },
  'tooltip': {
    'width': [{ 'unit': 'px', 'value': 200 }],
    'fontSize': [{ 'unit': 'px', 'value': 9 }],
    'position': 'absolute',
    'backgroundColor': '#dddddd',
    'color': '#636363',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'top': [{ 'unit': 'px', 'value': 45 }],
    'transform': 'translateX(50px)',
    'borderRadius': '5px',
    'visibility': 'hidden'
  },
  'tooltip::before': {
    'content': '''',
    'position': 'absolute',
    'borderWidth': '5px',
    'borderStyle': 'solid',
    'borderColor': 'transparent #dddddd transparent transparent',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'px', 'value': -10 }]
  },
  '#output-microphone:hover tooltip': {
    'visibility': 'visible'
  },
  '#keyboard': {
    'height': [{ 'unit': 'px', 'value': 400 }]
  },
  'operator': {
    'width': [{ 'unit': 'px', 'value': 50 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'float': 'left',
    'borderRadius': '50%',
    'borderWidth': '0',
    'fontWeight': 'bold',
    'fontSize': [{ 'unit': 'px', 'value': 15 }]
  },
  'number': {
    'width': [{ 'unit': 'px', 'value': 50 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'float': 'left',
    'borderRadius': '50%',
    'borderWidth': '0',
    'fontWeight': 'bold',
    'fontSize': [{ 'unit': 'px', 'value': 15 }]
  },
  'empty': {
    'width': [{ 'unit': 'px', 'value': 50 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'float': 'left',
    'borderRadius': '50%',
    'borderWidth': '0',
    'fontWeight': 'bold',
    'fontSize': [{ 'unit': 'px', 'value': 15 }]
  },
  'number': {
    'backgroundColor': '#eaedef'
  },
  'empty': {
    'backgroundColor': '#eaedef'
  },
  'number': {
    'cursor': 'pointer'
  },
  'operator': {
    'cursor': 'pointer'
  },
  'operator:active': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }]
  },
  'number:active': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }]
  },
  'operator:focus': {
    'outline': '0'
  },
  'number:focus': {
    'outline': '0'
  },
  'empty:focus': {
    'outline': '0'
  },
  'button:nth-child(4)': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'backgroundColor': '#20b2aa'
  },
  'button:nth-child(8)': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'backgroundColor': '#ffa500'
  },
  'button:nth-child(12)': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'backgroundColor': '#f08080'
  },
  'button:nth-child(16)': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'backgroundColor': '#7d93e0'
  },
  'button:nth-child(20)': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'backgroundColor': '#9477af'
  }
});

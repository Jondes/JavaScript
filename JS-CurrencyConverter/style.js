import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'import': 'url('https://fonts.googleapis.com/css?family=Muli&display=swap')',
  '*': {
    'boxSizing': 'border-box'
  },
  'body': {
    'background': 'linear-gradient(to bottom, #aff2ff 0%, #aff2ff 50%, #50dcff 50%, #50dcff 100%)',
    'fontFamily': ''Muli', sans-serif',
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'alignItems': 'center',
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'currency': {
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'space-between'
  },
  'currency select': {
    'background': 'transparent',
    'backgroundImage': 'url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%20000002%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')',
    'backgroundRepeat': 'no-repeat, repeat',
    'backgroundPosition': 'right .2em top 50%, 0 0',
    'backgroundSize': '.50em auto, 100%',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 20 }],
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'MozAppearance': 'none',
    'WebkitAppearance': 'none',
    'appearance': 'none'
  },
  'currency input': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'background': 'transparent',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'textAlign': 'right'
  },
  'middle': {
    'color': '#f59300',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'space-between'
  },
  'middle button': {
    'backgroundColor': '#fff',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ecf0f1' }],
    'borderRadius': '50%',
    'cursor': 'pointer',
    'color': '#f59300',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'height': [{ 'unit': 'px', 'value': 30 }],
    'width': [{ 'unit': 'px', 'value': 30 }],
    'transform': 'rotate(90deg)'
  },
  'middle button:active': {
    'transform': 'rotate(90deg) scale(0.9)'
  },
  'middle rate': {
    'backgroundColor': '#fff',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ecf0f1' }],
    'borderRadius': '50px',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'height': [{ 'unit': 'px', 'value': 30 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 25 }]
  },
  'select:focus': {
    'outline': '0'
  },
  'input:focus': {
    'outline': '0'
  },
  'button:focus': {
    'outline': '0'
  }
});

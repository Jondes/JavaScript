import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    'boxSizing': 'border-box',
    'fontFamily': ''Segoe UI', Tahoma, Geneva, Verdana, sans-serif',
    'fontWeight': 'normal'
  },
  '*::before': {
    'boxSizing': 'border-box',
    'fontFamily': ''Segoe UI', Tahoma, Geneva, Verdana, sans-serif',
    'fontWeight': 'normal'
  },
  '*::after': {
    'boxSizing': 'border-box',
    'fontFamily': ''Segoe UI', Tahoma, Geneva, Verdana, sans-serif',
    'fontWeight': 'normal'
  },
  'body': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'background': '#00AAFF'
  },
  'calculator-grid': {
    'display': 'grid',
    'justifyContent': 'center',
    'alignContent': 'center',
    'minHeight': [{ 'unit': 'vh', 'value': 100 }],
    'gridTemplateColumns': 'repeat(4, 100px)',
    'gridTemplateRows': 'minmax(120px, auto) repeat(5, 100px)'
  },
  'calculator-grid>button': {
    'cursor': 'pointer',
    'fontSize': [{ 'unit': 'rem', 'value': 2 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'white' }],
    'outline': 'none',
    'backgroundColor': 'rgba(255, 255, 255, .75)'
  },
  'calculator-grid>button:hover': {
    'backgroundColor': 'rgba(255, 255, 255, .9)'
  },
  'span-two': {
    'gridColumn': 'span 2'
  },
  'output': {
    'gridColumn': '1 / -1',
    'backgroundColor': 'rgba(0, 0, 0, .75)',
    'display': 'flex',
    'alignItems': 'flex-end',
    'justifyContent': 'space-around',
    'flexDirection': 'column',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'wordWrap': 'break-word',
    'wordBreak': 'break-all'
  },
  'output previous-operand': {
    'color': 'rgba(255, 255, 255, .75)',
    'fontSize': [{ 'unit': 'rem', 'value': 1.5 }]
  },
  'output current-operand': {
    'color': 'white',
    'fontSize': [{ 'unit': 'rem', 'value': 2.5 }]
  }
});

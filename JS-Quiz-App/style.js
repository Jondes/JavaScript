import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    'boxSizing': 'border-box',
    'fontFamily': ''Segoe UI', Tahoma, Geneva, Verdana, sans-serif'
  },
  '*::before': {
    'boxSizing': 'border-box',
    'fontFamily': ''Segoe UI', Tahoma, Geneva, Verdana, sans-serif'
  },
  '*::after': {
    'boxSizing': 'border-box',
    'fontFamily': ''Segoe UI', Tahoma, Geneva, Verdana, sans-serif'
  },
  ':root': {
    'HueNeutral': '200',
    'HueWrong': '0',
    'HueCorrect': '145'
  },
  'body': {
    'Hue': 'var(--hue-neutral)',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'display': 'flex',
    'width': [{ 'unit': 'vw', 'value': 100 }],
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'justifyContent': 'center',
    'alignItems': 'center',
    'backgroundColor': 'hsl(var(--hue), 100%, 20%)'
  },
  'bodycorrect': {
    'Hue': 'var(--hue-correct)'
  },
  'bodywrong': {
    'Hue': 'var(--hue-wrong)'
  },
  'container': {
    'width': [{ 'unit': 'px', 'value': 800 }],
    'maxWidth': [{ 'unit': '%H', 'value': 0.8 }],
    'backgroundColor': 'white',
    'borderRadius': '5px',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 2 }]
  },
  'btn-grid': {
    'display': 'grid',
    'gridTemplateColumns': 'repeat(2, auto)',
    'gap': '10px',
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'btn': {
    'Hue': 'var(--hue-neutral)',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': '%H', 'value': NaN }],
    'backgroundColor': 'hsl(var(--hue), 100%, 50%)',
    'borderRadius': '5px',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }],
    'color': 'white',
    'outline': 'none'
  },
  'btn:hover': {
    'borderColor': 'black'
  },
  'btncorrect': {
    'Hue': 'var(--hue-correct)',
    'color': 'black'
  },
  'btnwrong': {
    'Hue': 'var(--hue-wrong)'
  },
  'start-btn': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.5 }],
    'fontWeight': 'bold',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }]
  },
  'next-btn': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.5 }],
    'fontWeight': 'bold',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }]
  },
  'controls': {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'hide': {
    'display': 'none'
  }
});

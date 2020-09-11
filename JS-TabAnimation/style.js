import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'background': '#ebebeb'
  },
  'container': {
    'position': 'fixed',
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'top': [{ 'unit': 'px', 'value': 400 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'zIndex': '999'
  },
  'wrap': {
    'width': [{ 'unit': 'px', 'value': 550 }],
    'margin': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 16 }, { 'unit': 'string', 'value': 'auto' }],
    'background': '#FDFFFC',
    'borderRadius': '1rem',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, .2)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, .2),
' }, { 'unit': 'string', 'value': '' }, { 'unit': 'string', 'value': '' }, { 'unit': 'string', 'value': '' }, { 'unit': 'string', 'value': '' }, { 'unit': 'string', 'value': '' }, { 'unit': 'string', 'value': '' }, { 'unit': 'string', 'value': '' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, .14)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, .14),
' }, { 'unit': 'string', 'value': '' }, { 'unit': 'string', 'value': '' }, { 'unit': 'string', 'value': '' }, { 'unit': 'string', 'value': '' }, { 'unit': 'string', 'value': '' }, { 'unit': 'string', 'value': '' }, { 'unit': 'string', 'value': '' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, .12)' }]
  },
  'wrap active-grid-circle': {
    'display': 'grid',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'wrap nav-circle': {
    'width': [{ 'unit': 'rem', 'value': 1.5 }],
    'height': [{ 'unit': 'rem', 'value': 0.6 }],
    'borderRadius': '100px',
    'background': '#f24c5e',
    'position': 'relative',
    'marginBottom': [{ 'unit': 'rem', 'value': -4.2 }],
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }],
    'marginTop': [{ 'unit': 'string', 'value': 'auto' }],
    'bottom': [{ 'unit': 'rem', 'value': 8.6 }],
    'left': [{ 'unit': '%H', 'value': 0 }],
    'display': 'none',
    'justifyContent': 'center',
    'alignItems': 'center',
    'transition': '0.355s cubic-bezier(0.46, 0.03, 0.52, 0.96)'
  },
  'nav-grid': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'display': 'grid',
    'gridTemplateColumns': '1fr 1fr 1fr 1fr 1fr'
  },
  'nav-grid nav-grid-items': {
    'padding': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 10 }],
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'cursor': 'pointer'
  },
  'nav-grid nav-grid-items icon': {
    'color': '#212121',
    'fontSize': [{ 'unit': 'rem', 'value': 2.8 }]
  },
  'nav-grid nav-grid-itemsactive icon': {
    'color': '#f24c5e'
  },
  'grid-item-active': {
    'display': 'flex !important',
    'alignItems': 'center',
    'justifyContent': 'center',
    'WebkitAnimation': 'zoomIn .255s cubic-bezier(0.46, 0.03, 0.21, 0.93)',
    'animation': 'zoomIn .255s cubic-bezier(0.46, 0.03, 0.21, 0.93)'
  },
  'containertheme-dark wrap': {
    'background': '#212121'
  },
  'containertheme-dark nav-grid nav-grid-items icon': {
    'color': '#eee'
  },
  'containertheme-dark nav-grid nav-grid-itemsactive icon': {
    'color': '#f24c5e'
  },
  'zoomIn': {
    'WebkitAnimationName': 'zoomIn',
    'animationName': 'zoomIn'
  }
});

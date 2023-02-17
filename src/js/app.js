// console.log('worked');
export default function healthIndicator({ health }) {
  let indicatorLevel = '';

  if (health > 50) {
    indicatorLevel = 'healthy';
  } else if (health < 15) {
    indicatorLevel = 'critical';
  } else {
    indicatorLevel = 'wounded';
  }
  return indicatorLevel;
}

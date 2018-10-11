import Vue from 'vue'

Vue.filter('capitalize', val => val.toUpperCase());
Vue.filter('slice', (val, start, end, txt) => {
  if (val.length > end)
    return val.slice(start, end) + ((txt == undefined) ? '...' : txt);
  return val;
});
Vue.filter('dateTimestamp', (val) => {
  return new Date(val.seconds * 1000) // unix date
    .toLocaleDateString(
      'es-ES', // lang
      {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }
    );
});

Vue.filter('date', val => {
  let parts = val.split('-');

  let mes;
  // 2018-01-11

  switch (parseInt(parts[1])) {
    case 1:
      {
        mes = "Enero";
        break;
      }
    case 2:
      {
        mes = "Febrero";
        break;
      }
    case 3:
      {
        mes = "Marzo";
        break;
      }
    case 4:
      {
        mes = "Abril";
        break;
      }
    case 5:
      {
        mes = "Mayo";
        break;
      }
    case 6:
      {
        mes = "Junio";
        break;
      }
    case 7:
      {
        mes = "Julio";
        break;
      }
    case 8:
      {
        mes = "Agosto";
        break;
      }
    case 9:
      {
        mes = "Septiembre";
        break;
      }
    case 10:
      {
        mes = "Octubre";
        break;
      }
    case 11:
      {
        mes = "Noviembre";
        break;
      }
    case 12:
      {
        mes = "Diciembre";
        break;
      }
  }
  return `${parts[2]} de ${mes}, ${parts[0]}`
});

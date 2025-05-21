$(document).ready(function() {
  // Activa la primera pestaña al cargar la página por defecto (Herramientas)
  $('#tools').prop('checked', true);

  // Lógica para activar la pestaña basada en el parámetro de la URL (opcional)
  let url = window.location.href;
  let urlParams = new URLSearchParams(window.location.search);
  let tabIdFromUrl = urlParams.get('tab'); // Obtiene el valor del parámetro 'tab'

  if (tabIdFromUrl) {
      // Asegúrate de que el ID del input radio exista antes de intentar activarlo
      const targetRadio = $('#' + tabIdFromUrl);
      if (targetRadio.length) { // Verifica si el elemento existe
          targetRadio.prop('checked', true);
      }
  }

  // Nota: La visibilidad de los paneles ahora se maneja completamente por CSS
  // usando los inputs radio y la propiedad :checked, lo cual es más eficiente
  // y amigable para los rastreadores de Google.
  // No se necesita lógica de fadeIn/fadeOut aquí.
});
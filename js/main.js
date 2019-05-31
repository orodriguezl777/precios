$(document).ready(function(){

  const $formatter = new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0
  })

  var $total1 = 'GRATIS';
  var $total2 = 0;
  var $total3 = 0;
  var $textTotal1 = "";
  var $textTotal2 = "";
  var $textTotal3 = "";
  var $textPeriode1 = "";
  var $textPeriode2 = " pago único";
  var $periode = [1, 0.9, 0.8]; /* 1: Mensual, 0.9: Anual, 0.8: Bianual*/
  var $price1 = 0;
  var $price2 = 400;
  var $textButton1 = 'Alta gratis';
  var $textButton2 = 'Contratar';
  var $textButton3 = $textButton2;
  var $textUsers1 = '5';
  var $textUsers2 = $textUsers1;
  var $textUsers3 = $textUsers1;
  var $textLimit = "ilimitado";
  var $title1 = "<h4>Gratis hasta "+ $textUsers1 + " usuarios</h4>";
  var $title2 = "<h5>Pago</h5>";
  var $subtitle2 = "<h5>Usuarios</h5>";
  var $title3 = "<h5>Pago único</h5>";
  var $textli1 = "<li>Usuarios ilimitados.</li>";
  var $textli20 = "<li>Hasta 5 usuarios activos.</li>";
  var $textli21 = "<li>Hasta "+ $textUsers2 +" usuarios activos.</li>";
  var $textli22 = "<li>Hasta "+ $textUsers3 +" usuarios activos.</li>";
  var $textli3 = "<li>Descarga de informes de todos los usuarios.</li>";
  var $textli4 = "<li>Almacenamiento informes mensuales durante 4 años. Los informes más antiguos se borrarán mensualmente de forma automática.</li>";
  var $textli5 = "<li>Almacenamiento informes " + $textLimit.bold() + ".</li>";
  var $textCond = "<ul><li>Pago por domiciliación bancaria, tras firma de contrato SEPA B2B. Pagos al inicio del periodo contratado.</li><li>Al no renovar se activa el plan gratis, con hasta 5 usuarios activos y el resto en modo consulta.</li><li>En todo momento podrá decidir que usuarios son activos, y cuáles no, para ajustarse a su plan.</li></ul>";

    function updatePricing() {

        if (('Mensual') == form1.periode1.value){
          $price1 = $periode[0] * 1;
          $textPeriode1 = " cada mes";
        }
        if (('Anual') == form1.periode1.value) {
          $price1 = $periode[1] * 12;
          $textPeriode1 = " cada año";
        }
        if (('Bianual') == form1.periode1.value){
          $price1 = $periode[2] * 24;
          $textPeriode1 = " cada dos años";
        }

        $total2 = Math.round($price1 * parseInt(form1.users1.value), 0);
        $total3 = Math.round(($price2/10) * parseInt(form2.users2.value), 0);

        $textli21 = "<li>Hasta "+ form1.users1.value.bold() +" usuarios activos.</li>";
        $textli22 = "<li>Hasta "+ form2.users2.value.bold() +" usuarios activos.</li>";

        $("#textPrice2").replaceWith("<ul>" + $textli1 + $textli21 + $textli3 + $textli5 + "</ul>");
        $("#textPrice3").replaceWith("<ul>" + $textli1 + $textli22 + $textli3 + $textli5 + "</ul>");

        $textTotal1 = $total1.toString();
        $textTotal2 = $formatter.format($total2).toString() + $textPeriode1;
        $textTotal3 = $formatter.format($total3).toString() + $textPeriode2;

        $("#total1").text($textTotal1).css('font-weight','bold');
        $("#total2").text($textTotal2).css('font-weight','bold');
        $("#total3").text($textTotal3).css('font-weight','bold');

    }

    updatePricing();

    $("#periode1").on('change', function() { updatePricing(); });
    $("#users1").on('change', function() { updatePricing(); });
    $("#users2").on('change', function() { updatePricing(); });

    $("#button1").text($textButton1);
    $("#button2").text($textButton2);
    $("#button3").text($textButton3);

    $("#title1").replaceWith($title1);
    $("#title2").replaceWith($title2);
    $("#subtitle2").replaceWith($subtitle2);
    $("#title3").replaceWith($title3);
    $("#subtitle3").replaceWith($subtitle2);
    $("#textPrice1").replaceWith("<ul>" + $textli1 + $textli20 + $textli3 + $textli4 + "</ul>");
    $("#textPrice2").replaceWith("<ul>" + $textli1 + $textli21 + $textli3 + $textli5 + "</ul>");
    $("#textPrice3").replaceWith("<ul>" + $textli1 + $textli22 + $textli3 + $textli5 + "</ul>");
    $("#textConditions").replaceWith($textCond);

});

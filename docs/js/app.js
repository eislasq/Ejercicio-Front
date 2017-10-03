var app = angular.module('frontend', ['chart.js']);

app.factory('Ingresos', function () {
    return [
        {nombre: 'scotia bank inverlat, s.a.', monto: 388.6}
        , {nombre: 'juan jose leaño padilla', monto: 388.6}
        , {nombre: 'asesoria administrativa vai sa de cv', monto: 15824.72}
        , {nombre: 'juan jose leaño padilla', monto: 17249.88}
        , {nombre: 'El patito bonito', monto: 8495.88}

    ];
});
app.factory('Egresos', function () {
    return [
        {nombre: 'Banorte el banco fuerte de méxico', monto: -6565.45}
        , {nombre: 'juan jose leaño padilla', monto: -9283.44}
        , {nombre: 'asesoria administrativa vai sa de cv', monto: -23458.55}
        , {nombre: 'Bic consultoria integral de negocios SC', monto: -2234.56}
        , {nombre: 'El patito feo', monto: 9654.56}

    ];
});

app.controller("ChartCtrl",
        function ($scope, Ingresos, Egresos) {
            $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];

            $scope.labels = ['Junio 2017', '', 'Julio 2017', '', 'Agosto 2017'];


            var getMonto = function (obj) {
                return obj.monto;
            };

//                    $scope.data = [
//                        [0, 1, .5, 2, 0],
//                        [0, -1, -.5, -2, 1]
//                    ];
            $scope.data = [
                Ingresos.map(getMonto),
                Egresos.map(getMonto)
            ];
            $scope.datasetOverride = [
                {
                    label: "Bar chart",
                    borderWidth: 1,
                    type: 'line',
                    backgroundColor: 'rgba(1, 184, 164, .4)'
                },
                {
                    label: "Line chart",
                    borderWidth: 3,
                    type: 'line',
                    borderColor: 'rgba(10, 10, 10, 1)',
                    backgroundColor: 'rgba(10, 10, 10, .4)'
                }
            ];

            $scope.chartOptions = {
                elements: {
                    line: {
                        tension: 0, // bezier curves (0 disables)
                    }
                },
                xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Fecha'
                        }
                    }]
                , yAxes: [{
                        display: true
                        , scaleLabel: {
                            display: true,
                            labelString: 'Valores'
                        }}]
            }
        });


app.controller("TableCtrl",
        function ($scope, Egresos, Ingresos) {
            $scope.registros={};
            $scope.registros.egresos = Egresos;
            $scope.registros.ingresos = Ingresos;

            $scope.display = 'ingresos';
        });
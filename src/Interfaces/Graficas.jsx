// src/components/Graficas.jsx
import { useEffect, useRef } from "react";
import { NavbarDashboard } from "./NavbarDashboard";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export const Graficas = () => {
  const chartRef = useRef(null);
  const pagosData = useRef([]);

  const fetchPagos = async () => {
    const response = await fetch("http://localhost:4000/pagos");
    const data = await response.json();
    return data;
  };

  const groupByDay = (pagos) => {
    const grouped = {};
    pagos.forEach((pago) => {
      const fecha = new Date(pago.fecha_pago);
      const day = fecha.toLocaleDateString("es-ES");
      if (!grouped[day]) {
        grouped[day] = 0;
      }
      grouped[day] += pago.monto;
    });
    return grouped;
  };

  useEffect(() => {
    const renderChart = async () => {
      const pagos = await fetchPagos();
      pagosData.current = pagos;

      const pagosPorDia = groupByDay(pagos);
      const dias = Object.keys(pagosPorDia);
      const montos = Object.values(pagosPorDia);

      const ctx = chartRef.current.getContext("2d");
      const pagosChart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: dias,
          datasets: [
            {
              label: "Montos Pagados por Día",
              data: montos,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  const label = tooltipItem.label || "";
                  const value = tooltipItem.raw || 0;
                  return `${label}: $${value}`;
                },
              },
            },
          },
        },
      });
      return () => {
        pagosChart.destroy();
      };
    };

    renderChart();
  }, []);

  return (
    <>
      <NavbarDashboard />
      <div className="container mt-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            {" "}
            <h2 className="text-center">Gráfica de Pagos por Día</h2>
            <canvas ref={chartRef} width="400" height="400"></canvas>
          </div>
        </div>
      </div>
    </>
  );
};

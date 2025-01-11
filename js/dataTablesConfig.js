$(document).ready(function () {
    $("#employeeTable").DataTable({
        responsive: true,
        language: {
            url: "https://cdn.datatables.net/plug-ins/1.13.4/i18n/fr-FR.json",
        },
        pageLength: 10,
        dom: "Bfrtip",
        buttons: ["copy", "excel", "pdf", "print"],
    });
});

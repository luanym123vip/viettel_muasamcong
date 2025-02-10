const XLSX = require("xlsx");
const fs = require("fs");

// Dữ liệu JSON
const jsonData = [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", age: 30, city: "Los Angeles" },
    { name: "Charlie", age: 35, city: "Chicago" }
];

// Chuyển JSON thành worksheet
const worksheet = XLSX.utils.json_to_sheet(jsonData);
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

// Xuất file Excel
XLSX.writeFile(workbook, "output.xlsx");

console.log("Xuất file Excel thành công!");

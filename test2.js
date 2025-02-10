import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

// Dữ liệu JSON cần xuất
const jsonData = [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", age: 30, city: "Los Angeles" },
    { name: "Charlie", age: 35, city: "Chicago" }
];

// Chuyển JSON thành worksheet
const worksheet = XLSX.utils.json_to_sheet(jsonData);

// Tạo workbook và thêm worksheet vào
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

// Xuất file Excel
const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
const excelBlob = new Blob([excelBuffer], { type: "application/octet-stream" });
saveAs(excelBlob, "output.xlsx");

console.log("Xuất file Excel thành công!");
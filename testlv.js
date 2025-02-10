const axios = require("axios");

const HF_API_TOKEN = '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'; // Thay token của bạn

// Hàm phân loại văn bản
async function classifyText(text) {
    const labels = ["Cho thuê máy móc", "Điện toán đám mây", "Cung cấp dịch vụ khác", "Cung cấp thiết bị", "GPCNTT", "Giáo dục", "Nhân sự", "Y tế", "Thiết kế", "Vận chuyển"];
    
    try {
        const response = await axios.post(
            "https://api-inference.huggingface.co/models/facebook/bart-large-mnli",  // Mô hình Zero-Shot
            {
                inputs: text,
                parameters: { candidate_labels: labels },
            },
            {
                headers: { Authorization: `Bearer ${HF_API_TOKEN}` },
            }
        );

        const result = response.data.labels[0] + ", "+ response.data.labels[1];
        console.log("Kết quả phân loại:", result);
        return result;
    } catch (error) {
        console.error("Lỗi khi gọi API:", error.response ? error.response.data : error.message);
    }
}

// Mô phỏng chat input
const userInput = "Thuê dịch vụ hạ tầng máy chủ, an ninh thông tin phục vụ Kho dữ liệu dùng chung thành phố và nền tảng chính quyền điện tử thành phố";
classifyText(userInput);

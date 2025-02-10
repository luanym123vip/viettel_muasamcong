const axios = require("axios");
const https = require("https");
const XLSX = require('xlsx');
const fs = require("fs");
const moment = require("moment");

const batdau = "2025-02-05";
const ketthuc = "2025-02-08";
var page = 0;

const url = "https://muasamcong.mpi.gov.vn/o/egp-portal-contractor-selection-v2/services/smart/search?token=03AFcWeA50NTUdNDBa_wduNJuYlIQpvAi9kcpJHrPF_4ydH7XjbXObQAOqODY0IrqE4ayWBJ3AfnrmegSGDvDhFUzp5ceKYwktbi2A6sknt2cR7zJGzRKpDkpigt2CLq7Z6JMoSj1waA2POF4tMpJs5KPFAvAkDCF8WFoUbzg6KqmZqZ7GXtsC6jRilWDGHusoobTRUQ-1Zupo1uhrr53V8Wf2BvPPvX6y68TfShlRPaVh0m2iu6acMSWSBdi5NTZogScmnhgujA4VD-r0pzaV2NRiVD0fo7AyieZRBG5hC2oFgI4ECss8naAjmQPmucuEGbQEWKdt7M76d-RcnbAKSeO6slzjtC2tErF6Y5T7DxEJ8fdz5UcE7KdPa-dA5yDdUAlQchzo5ab8Mve1oQ106Cgp2me7HdkPwdJGO4xM4DAdxTdzsKBg94NzkjPgLE8n-DmxzQOTvKfQrdiPkT4-CFI5l11tW_-sg1nFzl3_P9OwbCjwcd9ypNbIXgeBMsedKXwOaptN0RyhnS04qXidkfXTophwgx_qoeCwZKAeznGUaPKdIL0jbWPRfppWAXEOKjzHzzhdseWW2373IWy-I_1dUQRRQSX05IuZTgl9Tvl6XBeuVcPQFvZh4159_XSvujYawK5Pjq6bjM3xl6WR08zmNG1XA-64fXccNO-g2gaTxSMcO8xmITcBVGPn2frBXj9YkFti_5_Mu-7o5DyaawqsXGpnO16COY9ZSKUH2pTBpo_UF_C0ZicXRUU6Er4_xZY9MLn2p3Fk6DJ0JQJob_xPes65H5rZFBbaiXgiE4UQAImvrIxM_CK7W1om6VRNIon4WmExeNBUXO_7U0vqScstNrzabfBRFHmsPB7Dg17jsnuKLAwXE4qABHahPeTlQhUv1uNtYohFUqN8y4DmeQp_LRC0zmvZMSRpmBKMjBAs67DgbHgsLH7G8LjuZ4ILFYEaMxU6GEdFf6DK0g2GN5O2uoio20SG4jjBIcTnRLF_jDDQ1FR9SB-YKjtCOodXo4qoqxHDIno6hUxO79g3VITwsyOO6rxIIlOMEQF1y0neGQRERcjblIc1jZ_74QMLeWE77K-8kLq5TTyPBVQheSiFy7XpJ6AxLH9Al-p8MtE6U8Z-3zhjudZWqqYtzyPo2i64qHLaRyX2b3XxUpDno2lGyICPoS0CzryyqUx5LTl5L52zJJ2jH_T2q2vkAFZCcGHEg1a83Di-SfKYozc5f1GAeY_1xtUK6eTt_iYebMl15EXEBzWNDfvc0_brlN9TlquJs4bJfGhKELCesITzJQV1gyU4jUp2hF3ayb7XvaPmn4LfyesM-9j3Jwnre9bcHMaepotyPQ2-MrAumdCH5ssJZLX5hxP-F1B-Te4_s1ZUuPnjVsWhdPu1H8RCj7roY4KKumE0kpOXBkQ-cItPiuDwgi0yh1xlJLXKg5ZMMHvgb5AL4VqHLvqkSwdPssjOdxQHoLHNdr-U4Xsk6Cb0sChkjqrWWgcSw8Y8nokdQ2s2wsM2eolHB7c7lplq5CCJNFzIAK8iMCTBudHokTQBE5dy3QYVUl2QnGjKcoBTaGZbho_NaJvIsHvrK2UGQKiHi3v6-fIcbKl27-uwk5D6Sfh51xp0_SiNO-4UJyG9-gxBqi_Qm5Jzkly4-5mycYD8IqJLz1-bhj9zsaoLT5ZxKPbszZ2k1SPx80x0Q9lwWjuKThrGczLnd995PAY-YNq3xiXzJrujGhfTOk0PEi70yjBcCkT1Sw-tb-DecQ6bxNMy35jcFCLcy0DV5zSE1Gu9lyErIPQq1FV0NI7e2EnMPjOE_yJw3wBafU1jufN2CWtHHRFyiEpSUwQ65Fl1ltfNKVaNE3oY4GzYNnGjfK9hozvibvLPfLJGTZ29eKwg2HaVPPW6XcC-qadbm9bxOlPVcwx5lFshKEuEi9Hcv3QhhB5BQJKvQn5_VlXiXvIJXdnicl24zlzMGMT3fmzVl3gzCyvheiumWJBv7rua2VnFwme7aCO4O4Zeo9dIzQAIPlJR3ODsNCgl7wFKLCTcmUyouXN3n_Kku41Olzh3W8TZD1f2WbXDHt0fPQ"; // Thay bằng URL của API
const headers = {
    "Cookie": "COOKIE_SUPPORT=true; GUEST_LANGUAGE_ID=vi_VN; _ga=GA1.1.1920411337.1738850318; JSESSIONID=lVoUUOhAedMLwvZ-LYdLitWN935gkRV8s5U4YVtg.dc_app1_02; NSC_WT_QSE_QPSUBM_NTD_NQJ=ffffffffaf183e2245525d5f4f58455e445a4a4217de; _ga_19996Z37EE=GS1.1.1738850317.1.1.1738852838.0.0.0; LFR_SESSION_STATE_20103=1738852854365"
};

var body = [{ "pageSize": "50", "pageNumber": "" + page + "", "query": [{ "index": "es-contractor-selection", "matchType": "all-1", "matchFields": ["notifyNo", "bidName"], "filters": [{ "fieldName": "publicDate", "searchType": "range", "from": "" + batdau + "T00:00:00.000Z", "to": "" + ketthuc + "T23:59:59.059Z" }, { "fieldName": "investField", "searchType": "in", "fieldValues": ["PTV", "HON_HOP"] }, { "fieldName": "isDomestic", "searchType": "in", "fieldValues": [1] }, { "fieldName": "type", "searchType": "in", "fieldValues": ["es-notify-contractor"] }, { "fieldName": "caseKHKQ", "searchType": "not_in", "fieldValues": ["1"] }, { "fieldName": "isDomestic", "searchType": "in", "fieldValues": [1] }, { "fieldName": "locations.provCode", "searchType": "in", "fieldValues": ["701"] }, { "fieldName": "bidCloseDate", "searchType": "range", "from": "2025-02-06T21:40:53.825Z", "to": null }] }] }];

// Tạo agent để bỏ qua lỗi chứng chỉ SSL
const agent = new https.Agent({
    rejectUnauthorized: false  // Bỏ qua kiểm tra chứng chỉ
});

const HF_API_TOKEN = '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'; // Token huggingface


// Chạy phân loại lĩnh vực
async function classifyText(text) {
    const labels = ["Cho thuê máy móc", "Điện toán đám mây", "Cung cấp dịch vụ khác", "Cung cấp thiết bị", "GPCNTT", "Giáo dục", "Nhân sự", "Y tế", "Thiết kế", "Vận chuyển"]; // Danh sách lĩnh vực
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
        const result = response.data.labels[0] + ", " + response.data.labels[1];
        return result;
    } catch (error) {
        console.error("Lỗi khi gọi API:", error.response ? error.response.data : error.message);
    }
}

// Lấy json về
async function sendPostRequestData() {
    try {
        const response = await axios.post(url, body, { headers, httpsAgent: agent });
        var filteredData = await Promise.all(response.data.page.content.map(async goithau => ({
            // id: goithau.id,     
            tieude: goithau.bidName[0],
            diachi: goithau.locations[0].districtName + " - " + goithau.locations[0].provName,
            benmoithau: goithau.procuringEntityName,
            chudautu: goithau.investorName,
            ngaydongthau: moment(goithau.bidCloseDate).format("DD/MM/YYYY"),
            linhvuc: await classifyText(goithau.bidName[0])
        })));

        console.log(filteredData.length)
        const count = filteredData.length;
        if (count == 50) {
            ++page;
            body = [{ "pageSize": "50", "pageNumber": "" + page + "", "query": [{ "index": "es-contractor-selection", "matchType": "all-1", "matchFields": ["notifyNo", "bidName"], "filters": [{ "fieldName": "publicDate", "searchType": "range", "from": "" + batdau + "T00:00:00.000Z", "to": "" + ketthuc + "T23:59:59.059Z" }, { "fieldName": "investField", "searchType": "in", "fieldValues": ["PTV", "HON_HOP"] }, { "fieldName": "isDomestic", "searchType": "in", "fieldValues": [1] }, { "fieldName": "type", "searchType": "in", "fieldValues": ["es-notify-contractor"] }, { "fieldName": "caseKHKQ", "searchType": "not_in", "fieldValues": ["1"] }, { "fieldName": "isDomestic", "searchType": "in", "fieldValues": [1] }, { "fieldName": "locations.provCode", "searchType": "in", "fieldValues": ["701"] }, { "fieldName": "bidCloseDate", "searchType": "range", "from": "2025-02-06T21:40:53.825Z", "to": null }] }] }];
            const response = await axios.post(url, body, { headers, httpsAgent: agent });
            const filteredData2 = await Promise.all(response.data.page.content.map(async goithau => ({
                // id: goithau.id,     
                tieude: goithau.bidName[0],
                diachi: goithau.locations[0].districtName + " - " + goithau.locations[0].provName,
                benmoithau: goithau.procuringEntityName,
                chudautu: goithau.investorName,
                ngaydongthau: moment(goithau.bidCloseDate).format("DD/MM/YYYY"),
                linhvuc: await classifyText(goithau.bidName[0])
            })));
            filteredData = [...filteredData, ...filteredData2];
            console.log(filteredData.length)

        }
        //Nếu chạy lâu quá có thể tách ra 1 mảng phân loại lĩnh vực riêng r export ra excel cột riêng
        // const linhvuc = await Promise.all(filteredData.map(async goithau => ({
        //     linhvuc: await classifyText(goithau.tieude)
        // })));

        // Chuyển đổi dữ liệu thành worksheet
        const ws = XLSX.utils.json_to_sheet(filteredData);

        // Đặt độ rộng cột mặc định cho tất cả các cột
        const colCount = Object.keys(filteredData[0]).length; // Số cột trong dữ liệu
        ws["!cols"] = Array(colCount).fill({ wch: 30 });

        // Tạo workbook chứa worksheet
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

        // Xuất file Excel
        XLSX.writeFile(wb, "output.xlsx");

    } catch (error) {
        console.log("Lỗi:", error.message);
    }
}
sendPostRequestData()
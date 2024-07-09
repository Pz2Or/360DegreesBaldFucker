function doGet() {
    const data = getData();
    const response = ContentService.createTextOutput(JSON.stringify(data));
    response.setMimeType(ContentService.MimeType.JSON);
    return response;
}

function getData() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('2学期中間');
    if (sheet === null) {
        throw new Error("Sheet '2学期中間' not found.");
    }

    let row = 1;
    const combinedArray = [];
    while (true) {
        const range = sheet.getRange(`A${row}:D${row}`);
        const values = range.getValues();
        if (values[0].every(value => value === "")) {
            break;
        }
        combinedArray.push(values[0]); // ここを変更して、値をそのまま追加
        row++;
    }
    return combinedArray;
}
function doGet() {
    const data = getData();
    const response = ContentService.createTextOutput(JSON.stringify(data));
    response.setMimeType(ContentService.MimeType.JSON);
    return response;
}

interface Word {
    word: string;
    meaning: string;
    root: string;
    english: string;
}

function getData() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('2学期中間');
    if (sheet === null) {
        throw new Error("Sheet '2学期中間' not found.");
    }

    let row = 1;
    const combinedArray :Word[] = [];
    while (true) {
        const range = sheet.getRange(`A${row}:D${row}`);
        const values = range.getValues();
        if (values[0].every(value => value === "")) {
            break;
        }
        const word: Word = {
            word: values[0][0],
            meaning: values[0][1],
            root: values[0][2],
            english: values[0][3]
        };
        combinedArray.push(word);
    }
    return combinedArray;
}
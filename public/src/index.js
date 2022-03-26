$("#main").on("input", e => {
    let data = e.target.value
    let newData = data.replace(/Yellow\shighlight\s\|\s?(Location|Page)\:\s[0-9,]+\n/g, "") //.replace(/\n\n/g, "")
    let output = [];
    let outputData = newData.split("\n")
    outputData.forEach(line => {
        if(line.match(/^[a-z].+/g)) {
            let splitLine = line.split("");
            splitLine[0] = splitLine[0].toUpperCase();
            output.push(splitLine.join(""));
        } else {
            output.push(line);
        }
    })
    $("#output").text(output.join("\n"))
})
$("#output").on("input", e => {
    e.preventDefault();
})

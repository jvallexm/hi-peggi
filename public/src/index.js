$("#main").on("input", e => {
    let data = e.target.value
    let newData = data.replace(/Yellow\shighlight\s\|\s?Location\:\s[0-9,]+\n/g, "").replace(/\n\n/g, "")
    $("#output").text(newData)
})
$("#output").on("input", e => {
    e.preventDefault();
})

export default (data) => {
    let template = [
        {
            str: "days",
            time: 1
        },
        {
            str: "h",
            time: 24
        },
        {
            str: "m",
            time: 60
        },
        {
            str: "s",
            time: 60
        }
    ]
    if (data == "Infinity")
        return "Infinity"
    let c = 0
    for (let c = 0; c < template.length; c++) {
        if (data > 1)
            return `${data.toFixed(2)} ${template[c].str}`
        else
            data *= template[c].time
    }
}
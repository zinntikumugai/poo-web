export default (val) => {
    let type = ["", "K", "M", "G", "T", "P"]
    val = Math.floor(val);
    var nums = String(val).replace(/(\d)(?=(\d\d\d)+$)/g, "$1,").split(",");
    var data = nums[0];
    if (nums[1] != null && nums[1].replace(/0+$/, '') != '')
        data += '.' + nums[1].replace(/0+$/, '');
    data += ' ' + type[nums.length - 1];
    return data + "H/s";
}
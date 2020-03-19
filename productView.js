export default function clearMainView([...rst], clrFun) {
    console.log(rst);
    rst.forEach((curr) => {
        curr.style.display = "none"
    })
}
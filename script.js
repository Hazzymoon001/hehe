document.getElementById("calculateBtn").addEventListener("click", function () {
    // Lấy giá trị từ các ô nhập
    const power = parseFloat(document.getElementById("power").value);
    const effOld = parseFloat(document.getElementById("effOld").value) / 100;
    const effNew = parseFloat(document.getElementById("effNew").value) / 100;
    const hours = parseFloat(document.getElementById("hours").value);
    const loadFactor = parseFloat(document.getElementById("loadFactor").value);

    // Kiểm tra đầu vào
    if (isNaN(power) || isNaN(effOld) || isNaN(effNew) || isNaN(hours) || isNaN(loadFactor)) {
        document.getElementById("result").innerText = "Please enter all values correctly.";
        return;
    }

    // Tính toán năng lượng
    const energyOld = (power * loadFactor / effOld) * hours * 365; // kWh/năm
    const energyNew = (power * loadFactor / effNew) * hours * 365; // kWh/năm
    const energySaved = energyOld - energyNew; // Năng lượng tiết kiệm

    // Hiển thị kết quả
    document.getElementById("result").innerHTML = `
        <strong>Results:</strong><br>
        Energy Saved per Year: <strong>${energySaved.toFixed(2)} kWh</strong>
    `;
});

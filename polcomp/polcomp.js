function startUp() {
    const btn = document.getElementById('download-btn');
    btn.disabled = true;
}


async function draw() {
    const canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    canvas.width = 2000 / 2;
    canvas.height = 2177 / 2;

    let background = new Image();
        background.src = "/polcomp/pooliticalcumpiss.png";

    background.onload = function() {
        ctx.drawImage(background, 0, 0);

        ctx.fillStyle = "white";
        ctx.font = applyText(canvas, "LOL", 'Nanami');
        ctx.textAlign = "center";
    }

    const btn = document.getElementById('download-btn');
    btn.disabled = false;
}

function download() {
    var link = document.createElement('a');
    link.download = 'politics.png';
    link.href = document.getElementById('canvas').toDataURL()
    link.click();
}
function startUp() {
    const btn = document.getElementById('download-btn');
    btn.disabled = true;
}


async function draw() {

    var imageLoader = document.getElementById('imageLoader');
    var words = textBox.value;

    const canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    canvas.width = 2046 / 2;
    canvas.height = 1152 / 2;

    let background = new Image();
    let foreground = new Image();
    if (imageLoader && imageLoader.value){
        background.src = "/walroose/walroosegone.png";
        foreground.src = URL.createObjectURL(imageLoader.files[0]);
        

        background.onload = function() {
            foreground.onload = function() {
                ctx.drawImage(background, 0, 0);
                ctx.filter = 'blur(6px) drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.72))';
                ctx.drawImage(foreground, 450, -10, 576, 596);
                ctx.filter = 'none';

                ctx.fillStyle = "white";
                ctx.font = applyText(canvas, words.toUpperCase(), 'Nanami');
                ctx.textAlign = "center";
                // ctx.fillText(words, canvas.width / 2, canvas.height / 2);
                drawStrokedText(words.toUpperCase(), 1023 / 2, canvas.height / 1.7);
            }
        }       
    } else {
        background.src = "/walroose/walroose.png";
        background.onload = function() {
            ctx.drawImage(background, 0, 0);

            ctx.fillStyle = "white";
            ctx.font = applyText(canvas, words.toUpperCase(), 'Nanami');
            ctx.textAlign = "center";
            // ctx.fillText(words, canvas.width / 2, canvas.height / 2);
            drawStrokedText(words.toUpperCase(), 1023 / 2, canvas.height / 1.7);
        }
    }

    function drawStrokedText(text, x, y)
    {
        ctx.save();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 14;
        ctx.lineJoin="round";
        ctx.miterLimit=2;
        ctx.strokeText(text, x, y);
        ctx.fillText(text, x, y);
        ctx.restore();
    }

    const btn = document.getElementById('download-btn');
    btn.disabled = false;
}

const applyText = (canvas, text, font) => {

	const ctx = canvas.getContext('2d');

	let fontSize = 220 / 2 - 10;

	do {
		
		ctx.font = `${fontSize -= 1}px ` + font;
		
	} while (ctx.measureText(text).width > canvas.width);

	return ctx.font;
};

function download() {
    var link = document.createElement('a');
    link.download = 'politics.png';
    link.href = document.getElementById('canvas').toDataURL()
    link.click();
}
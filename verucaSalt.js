var gDelta = new Decimal(1);
var gValue = new Decimal(0);
var gPos = new Decimal(0);
var NilPrestige = new Decimal(0);
var PNAuto = new Decimal(0);
const gOmega = new Decimal(10);

document.getElementById('gVdisplay').textContent = gValue;
document.getElementById('PrestigeLayer0').textContent = NilPrestige;

function DeltaTrigger() {
	gValue = gValue.plus(gDelta);
	document.getElementById('gVdisplay').textContent = gValue;
}

function PrestigeNilTrigger() {
	if (gValue > 100)
		NilPrestige = NilPrestige.plus(gValue.dividedBy(100).floor());
		gValue = gValue.minus((gValue.dividedBy(100).floor()).mul(100));
		document.getElementById('gVdisplay').textContent = gValue;
		document.getElementById('PrestigeLayer0').textContent = NilPrestige;
}

function PNAutoclicker() {
	if (NilPrestige >= (2**PNAuto)) {
		NilPrestige = NilPrestige.minus(2**PNAuto);
		PNAuto = PNAuto.plus(1);
		document.getElementById('PrestigeLayer0').textContent = NilPrestige;
	}
}

function DeltaAuto() {
	gValue = gValue.plus(gDelta*PNAuto);
	document.getElementById('gVdisplay').textContent = gValue;
}

var PNAwork = window.setInterval(function(){
	DeltaAuto()
}, 500);

console.log("Currently the tabs don't work.");
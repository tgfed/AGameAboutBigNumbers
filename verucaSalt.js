// this is where i store my vairables. God, isn't it Gorges?
var gDelta = new Decimal(1);
var gValue = new Decimal(0);
var gPos = new Decimal(0);
var NilPrestige = new Decimal(0);
var OnePrestige = new Decimal(0);
var TwoPrestige = new Decimal(0);
var ThreePrestige = new Decimal(0);
var FourPrestige = new Decimal(0);
var FivePrestige = new Decimal(0);
var SixPrestige = new Decimal(0);
var SevenPrestige = new Decimal(0);
var ERightPrestige = new Decimal(0);
var UnPrestige = new Decimal(0);
var PNAuto = new Decimal(0);
var FactorShift = new Decimal(0);
var FactorA = new Decimal(1);
var FactorB = new Decimal(1);
var FactorC = new Decimal(1);
var FactorD = new Decimal(1);
var Speed = new Decimal(500);
var MoYuLayhonky = new Decimal(0);
// Next up are all of the documents.
document.getElementById('gVdisplay').textContent = gValue;
document.getElementById('PrestigeLayer0').textContent = NilPrestige;
document.getElementById('PrestigeLayer1').textContent = OnePrestige;
document.getElementById('PrestigeLayer2').textContent = TwoPrestige;
document.getElementById('PrestigeLayer3').textContent = ThreePrestige;
document.getElementById('PrestigeLayer4').textContent = FourPrestige;
document.getElementById('PrestigeLayer5').textContent = FivePrestige;
document.getElementById('PrestigeLayer6').textContent = SixPrestige;
document.getElementById('PrestigeLayer7').textContent = SevenPrestige;
document.getElementById('PrestigeLayer8').textContent = ERightPrestige;
document.getElementById('PrestigeLayer9').textContent = UnPrestige;
// This is where the game actually starts.
function DeltaTrigger() {
	gValue = gValue.plus(gDelta.mul(FactorA).mul(FactorB).mul(FactorC).mul(FactorD));
	document.getElementById('gVdisplay').textContent = gValue;
}

function PrestigeNilTrigger() {
	if (gValue > 99)
		NilPrestige = NilPrestige.plus(gValue.dividedBy(100).floor());
		gValue = gValue.minus((gValue.dividedBy(100).floor()).mul(100));
		document.getElementById('gVdisplay').textContent = gValue;
		document.getElementById('PrestigeLayer0').textContent = NilPrestige;
}

let PNAwork = null;

function PNAutoclicker() {
	if (NilPrestige >= (2**PNAuto)) {
		NilPrestige = NilPrestige.minus(2**PNAuto);
		clearInterval(PNAwork);
		PNAuto = PNAuto.plus(1);
		Speed = Math.floor(500/(PNAuto))
		PNAwork = setInterval(DeltaAuto, Speed);
		document.getElementById('PrestigeLayer0').textContent = NilPrestige;
	}
}

function DeltaAuto() {
	if (PNAuto > 0) {
	gValue = gValue.plus(gDelta.mul(FactorA).mul(FactorB).mul(FactorC).mul(FactorD).plus(MoYuLayhonky));
	document.getElementById('gVdisplay').textContent = gValue;
	}
}

function PNFactorShift() {
	if (NilPrestige >= ((1000**(FactorShift+1)))) {
		NilPrestige = NilPrestige.minus(1000**(FactorShift+1));
		FactorShift = FactorShift.add(1);
		document.getElementById('PrestigeLayer0').textContent = NilPrestige;
		}
	else {
		console.log("FactorShift unable to function. Amount of NilPrestige is less than the required amount.");
	}
}

function PNFactorShiftA() {
	if (FactorShift > 0.5) {
		if (NilPrestige > 10**FactorA-0.5) {
			NilPrestige = NilPrestige.minus(10**FactorA);
			document.getElementById('PrestigeLayer0').textContent = NilPrestige;
			FactorA = FactorA.add(1);
		}
	}
}

function PNFactorShiftB() {
	if (FactorShift > 1.5) {
		if (NilPrestige > 100**FactorB-0.5) {
			NilPrestige = NilPrestige.minus(100**FactorB);
			document.getElementById('PrestigeLayer0').textContent = NilPrestige;
			FactorB = FactorB.add(1);
		}
	}
}

function PNFactorShiftC() {
	if (FactorShift > 2.5) {
		if (NilPrestige > 1000**FactorC-0.5) {
			NilPrestige = NilPrestige.minus(1000**FactorC);
			document.getElementById('PrestigeLayer0').textContent = NilPrestige;
			FactorC = FactorC.add(1);
		}
	}
}

function PNFactorShiftD() {
	if (FactorShift > 3.5) {
		if (NilPrestige > 10000**FactorD-0.5) {
			NilPrestige = NilPrestige.minus(10000**FactorD);
			document.getElementById('PrestigeLayer0').textContent = NilPrestige;
			FactorD = FactorD.add(1);
		}
	}
}

function Prestige1Trigger() {
	if (gValue > 10**100) {
		OnePrestige = OnePrestige.add(gValue.dividedBy(10**100));
		gValue = gValue.minus(gValue);
		NilPrestige = NilPrestige.minus(NilPrestige);
		FactorShift = FactorShift.minus(FactorShift);
		PNAuto = PNAuto.minus(PNAuto);
		FactorA = FactorA.minus(FactorA).plus(1);
		FactorB = FactorB.minus(FactorB).plus(1);
		FactorC = FactorC.minus(FactorC).plus(1);
		FactorD = FactorD.minus(FactorD).plus(1);
		document.getElementById('gVdisplay').textContent = gValue;
		document.getElementById('PrestigeLayer0').textContent = NilPrestige;
		document.getElementById('PrestigeLayer1').textContent = OnePrestige;
	}
}

// Fun fact: There are 3 more tabs for Veblen, Bachmann-Howard and Buchholz ordinals, but they are currently not implemented because there is no thing in the ExpantaNum.js library that can count functionally without going to Infinity or slowing down.
console.log("Currently the tabs don't work.");
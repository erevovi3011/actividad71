maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 160)
basic.pause(2000)
maqueen.motorStop(maqueen.Motors.M1)
basic.pause(1000)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 101)
basic.pause(2000)
maqueen.motorStop(maqueen.Motors.M2)
basic.pause(2000)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 103)
maqueen.motorStop(maqueen.Motors.All)
basic.forever(function () {
	
})

var jest = require ("jest");

describe('Mars Rover!', () => {
    it('should exist?', () => {
        var mars_rover = new MarsRover()
        expect(mars_rover).toBeDefined()
    });
    it('should have  an initial x starting point',()=>{
        var mars_rover = new MarsRover()
        expect(mars_rover.x).toBe("0")
    })
    it('should have  an initial y starting point',()=>{
        var mars_rover = new MarsRover()
        expect(mars_rover.y).toBe("0")
    })
    it('should have an initial direction',()=>{
        var mars_rover = new MarsRover()
        expect(mars_rover.direction).toBe("N")
    })
});

describe("Accepting command arrays", () => {
    it("Can accept the forward command once", () => {
        var commands = ['f']

        var mars_rover = new MarsRover()
        mars_rover.move(commands);

        expect(mars_rover.x).toBe("1");
        expect(mars_rover.y).toBe("0");
    })

    it("Can accept the forward command twice", () => {
        var commands = ['f', 'f']

        var mars_rover = new MarsRover()
        mars_rover.move(commands);

        expect(mars_rover.x).toBe("2");
        expect(mars_rover.y).toBe("0");
    })
})

const MarsRover = function() {
    this.x = "0";
    this.y = "0";
    this.direction = "N";

    this.move = function (commands) {
        var length  = commands.length
        this.x = `${length}`
        
    }
}

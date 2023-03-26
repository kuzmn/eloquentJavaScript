function compareRobots(robot1, memory1, robot2, memory2) {
    function runRobotTest(state, robot, memory) {
        for (let turn = 0; ; turn++) {
            if (state.parcels.length == 0)
                return turn;
            let action = robot(state, memory);
            state = state.move(action.direction);
            memory = action.memory;
        }
    }
    let r1 = []
      , r2 = [];
    for (let test = 0; test < 100; test++) {
        r1.push(runRobotTest(VillageState.random(), robot1, memory1));
        r2.push(runRobotTest(VillageState.random(), robot2, memory2));
    }
    return {
        r1: Math.floor(r1.reduce((x,y)=>x + y) / r1.length),
        r2: Math.floor(r2.reduce((x,y)=>x + y) / r2.length)
    };
}

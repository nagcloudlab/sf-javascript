
const { Subject } = require('rxjs')

//----------------------------------------------------------

//----------------------------------------------------------


const doorStream = new Subject();

// ----------------------------------------------------------
// Light
// ----------------------------------------------------------

const light = {
    on() {
        console.log("light ON");
    },
    off() {
        console.log("light OFF");
    }
}

doorStream.subscribe({
    next: e => {
        if (e.type === "OPEN") {
            light.on()
        }
        if (e.type === "CLOSE") {
            light.off()
        }
    }
})


// ----------------------------------------------------------
// AC
// ----------------------------------------------------------

const AC = {
    on() {
        console.log("AC ON");
    },
    off() {
        console.log("AC OFF");
    }
}

const subscription = doorStream.subscribe({
    next: e => {
        if (e.type === "OPEN") {
            AC.on()
        }
        if (e.type === "CLOSE") {
            AC.off()
        }
    }

})

setTimeout(() => {
    subscription.unsubscribe();
}, 4000);


// ----------------------------------------------------------
// Door
// ----------------------------------------------------------
const door = {
    // doorListeners: [],
    // addDoorListener(listener) {
    //     this.doorListeners.push(listener)
    // },
    open() {
        console.log("door opened..");
        // this.doorListeners.forEach(listener => {
        //     listener.on() // 
        // })
        doorStream.next({ type: 'OPEN' })
    },
    close() {
        console.log("door closed");
        // this.doorListeners.forEach(listener => {
        //     listener.off()
        // })
        doorStream.next({ type: 'CLOSE' })
    }
}

//----------------------------------------------------------------
// door.addDoorListener(light)
// door.addDoorListener(AC)
//----------------------------------------------------------------


setTimeout(() => {
    door.open();
    setTimeout(() => {
        door.close()
    }, 2000);

    setTimeout(() => {
        door.open();
        setTimeout(() => {
            door.close()
        }, 2000);
    }, 2000);

}, 2000);
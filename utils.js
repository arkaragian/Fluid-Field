function distance(p1, p2) {
    return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2));
}

function distancex(start, end) {
    return (end.x - start.x);
}

function distancey(start, end) {
    return (end.y - start.y);
}

function toDegrees(angle) {
    return angle * (180 / Math.PI);
}

function toRadians(angle) {
    return angle * (Math.PI / 180);
}

function draw_screen(particles, fields, context) {
    //Draw grid
    //for(var i=0; i<context.canvas.width; i+=100){
    //    for(var j=0; j<context.canvas.height; j+=100){
    //        context.strokeStyle = "rgb(0,125,0)";
    //        context.font = "12px Arial";
    //        context.beginPath();
    //        context.arc(i,j,2,0,2*Math.PI);
    //        context.fillText(i.toString().concat(",").concat(j.toString()),i+5,j);
    //        context.stroke();
    //    }
    //}
    
    for (var i = 0; i < particles.length; i++) {
        particles[i].draw(context)
    }

    for (var i = 0; i < fields.length; i++) {
        //console.log("Drawing field")
        fields[i].draw(context)
    }
}

function calc_velocities(particles, fields) {
    for (var i = 0; i < particles.length; i++) {
        var u = new Vector(0, 0);
        for (var j = 0; j < fields.length; j++) {
            u.add(fields[j].velocOn(particles[i]));
        }
        particles[i].setVeloc(u);
    }
}

function calc_positions(particles, dt) {
    for (var i = 0; i < particles.length; i++) {
        particles[i].calcPos(dt);
    }
}

function calculate(particles, fields, dt) {
    calc_velocities(particles, fields)
    calc_positions(particles, dt)
}


function clear(context, width, height) {
    context.clearRect(0, 0, width, height);
}



function start_animation(particles, fields, context) {
    //clear(context,canvas.width,canvas.height)
    //sinks = get_sinks(fields)
    //particles = remove_particles(sinks, particles)
    calculate(particles, fields, 0.1)
    draw_screen(particles, fields, context)
    window.requestAnimationFrame(
        function () {
            start_animation(particles, fields, context);
        }
    );
}

function particle_column(xpos, N) {
    var dy = window.innerHeight / (N - 1)
    var p_array = new Array()
    for (var y = window.innerHeight / 2; y <= window.innerHeight; y += dy) {
        var p = new Particle(xpos, y)
        p_array.push(p)
    }

    for (var y = window.innerHeight / 2 - dy; y >= 0; y -= dy) {
        var p = new Particle(xpos, y)
        p_array.push(p)
    }
    return p_array
}

function field_row(xpos, ypos, strength, dx, N) {
    var fs = new Array()
    for (i = 1; i <= N; i++) {
        console.log(i)
        var f = new Field(xpos + i * dx, ypos, strength)
        fs.push(f)
    }
    return fs
}

function vortex_row(xpos, ypos, strength, dx, N) {
    var fs = new Array()
    for (i = 1; i <= N; i++) {
        console.log(i)
        var f = new Vortex(xpos + i * dx, ypos, strength)
        fs.push(f)
    }
    return fs
}

function alternating_vortex_row(xpos, ypos, strength, dx, N) {
    var fs = new Array()
    for (i = 1; i <= N; i++) {
        console.log(i)
        var f = new Vortex(xpos + i * dx, ypos, (Math.pow(-1, i)) * strength)
        fs.push(f)
    }
    return fs
}

function get_sinks(fields) {
    var sinks = new Array()
    for (i = 0; i < fields.length; i++) {
        if (fields[i].strength < 0) {
            sinks.push(fields[i])
        }
    }
    return sinks
}

function remove_particles(sinks, particles) {
    var newparts = new Array()
    for (var i = 0; i < sinks.length; i++) {
        for (var j = 0; j < particles.length; j++) {
            if (distance(sinks[i], particles[j]) > 5) {
                newparts.push(particles[j])
            }
        }
    }
    return newparts
}
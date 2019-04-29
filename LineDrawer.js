import Range from "./lib/Range"

export default class LineDrawer {
    static draw(plot, x0, y0, x1, y1) {
        bresenham(plot, x0, y0, x1, y1)
    }
}

function bresenham(plot, x0, y0, x1, y1) {
    // https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm

    var deltax = x1 - x0
    var deltay = y1 - y0  
    var dx1 = Math.sign(deltax)
    var dy1 = Math.sign(deltay) 
    var dx2 = 0
    var dy2 = 0 
    var longest = Math.abs(deltax)
    var shortest = Math.abs(deltay)
    if (longest <= shortest) {
        var tmp = longest
        longest = shortest
        shortest = tmp
        dy2 = dy1
    } else {
        dx2 = dx1
    }
    var numerator = Math.floor(longest / 2)
    var x = x0
    var y = y0
    for (var i of Range.get(0, longest + 1)) {
        plot(x, y)
        numerator += shortest
        if (numerator >= longest) {
            numerator -= longest
            x += dx1
            y += dy1
        } else {
            x += dx2
            y += dy2
        }
    }
}
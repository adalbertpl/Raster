export default function plotPixelFactory(ctx) {
    return (x, y) => {
        ctx.fillStyle = "rgba(0, 0, 0, 1)"
        ctx.fillRect(x, y, 1, 1)
    }
}
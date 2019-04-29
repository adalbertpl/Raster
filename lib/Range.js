export default class Range {
    static * get(start, end) {
        for (var i = start; i < end; i++) {
            yield i;
        }
    }
}
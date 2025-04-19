class TimeMap {
    private map: Map<string, { stamp: number, value: string }[]>;
    constructor() {
        this.map = new Map();
    }

    set(key: string, value: string, timestamp: number): void {
        if (!this.map.has(key)) {
            this.map.set(key, [])
        }
        this.map.get(key).push({ stamp: timestamp, value: value })
    }

    get(key: string, timestamp: number): string {
        if (!this.map.get(key)) {
            return "";
        }

        const list = this.map.get(key);
        for (let i = list.length - 1; i >= 0; i--) {
            if (list[i].stamp <= timestamp) {
                return list[i].value;
            }
        }
        return ""
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
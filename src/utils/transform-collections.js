import {OrderedMap, Map} from 'immutable';


export function arrToMap(arr, DataRecord = Map) {
    return arr.reduce((acc, item) => {
        return acc.set(item._id, new DataRecord(item));
    }, new OrderedMap({}));
}

export function mapToArr(map = new Map({})) {
    return map.valueSeq().toArray();
}

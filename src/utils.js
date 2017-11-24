import {OrderedMap, Map} from 'immutable';


export function arrToMap(arr, DataRecord = Map, change) {
    return arr.reduce((acc, item) => {
        if (change) item = customObjFields(item);
        return acc.set(item.id, new DataRecord(item));
    }, new OrderedMap({}));
}

export function mapToArr(map = new Map({})) {
    return map.valueSeq().toArray();
}

function customObjFields(item) {
    const {
        _id: id,
        content: description,
        createdAt: date,
        img: image,
        title,
    } = item;

    return {id, description, date, image, title};
}
